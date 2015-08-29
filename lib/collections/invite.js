Invite = new Mongo.Collection('invite');

//SimpleSchema.debug = true;

//серверные методы
if (Meteor.isServer) {
    Meteor.methods({
        //отправка нового приглашения на email
        invationSender: function (email) {
            check(this.userId, String);
            check(email, String);

            //генерируем токен. Его мы будет отправлять пользователю на Email
            var token = Random.hexString(10);

            //получаем имя текущей компании для включения в текст письма.
            var company = Company.findOne({userId: this.userId});
            var companyName = company.title;

            //создаём новое приглашение и записываем его в БД
            //Храним самое важное - постовый адрес, код активации и статус
            var inviteId = Invite.insert({email:email,token:token,status:INVITE_CREATED});

            //Возвращаем управление в основной код программы, а всё остальное делаем в фоне
            this.unblock();

            //Подготоваливаем текст и отправляем письмо с приглашением
            //В тексте указываем код приглашения, имя приглашающего пользователя и наименование компании
            Email.send({
                to: email,
                from: 'info@forsk.ru',
                subject: 'Присоединитесь к компании '+companyName+' в онлайн табеле учёта рабочего времени Kellot.ru',
                html: 'Привет! Пользователь сайта Kellot.Ru под именем '+Meteor.user().profile.name+' приглашает Вас ' +
                    'присоединиться к ведению табеля учёта рабочего времени компании "'+companyName+'". ' +
                    '<br/><br/>Ваш код активации приглашения: '+token+
                    '<br/><br/>Чтобы войти в систему, пожалуйста пройдите по ссылке ' +
                    '<a href="http://p.kellot.ru/company/invite/'+token+'">http://p.kellot.ru/company/invite/'+token+'</a> ' +
                    ' и следуйте дальнейшим инструкциям. Ваш аккаунт будет активирован автоматически.'+
                    '<br/><br/>С уважением, команда разработчиков онлайн табеля учёта рабочего времени Kellot.Ru'
            });

            //Обнолвяем статус приглашения с "создано" на "отправлено"
            Invite.update({_id:inviteId}, {$set: {status: INVITE_EMAILED}}, {}, function(error, count) {
                console.log('update error', error, count);
            });
            return true;
        },
        //Администратор компани должен имет ьвозможность удалять пригашения
        deleteInvite: function(inviteId) {
            check(inviteId, String);
            var invite = Invite.findOne({_id: inviteId});
            //если приглашение не в статусе "принято" то его можно удалить.
            // Иначе уже нельзя, потому как оно будет связано с конкретным пользователей
            if (invite.status != INVITE_COMPLETED) {
                Invite.remove({_id: inviteId});
                return true;
            } else {
                return false;
            }
        },
        //Метод активации приглашения пользователя
        activateInviteToken: function (activationToken, userId) {
            check(this.userId, String);
            check(activationToken, String);
            check(userId, String);

            //подготавливаем требуемые данные - текущего пользователя, компанию и инвайт
            var user = Meteor.users.findOne({_id:userId});
            var invite = Invite.findOne({token:activationToken});
            var company = Company.findOne({_id:invite.companyId});

            //если инвайт уже активирован - возвращаем пользователю ошибку
            if (invite.status == INVITE_COMPLETED) {
                return false;
            }

            //Обновляем карточку пользователя и привязываем его к нашей компании
            Meteor.users.update({_id:userId}, { $set: {companyId: company._id } });

            //Обновляем статус приглашения и связываем его с новым пользователем
            Invite.update({_id:invite._id}, { $set: {invitedUserId: userId, status: 2 } });

            //Добавляем пользователя в группу участников
            Roles.addUsersToRoles(Meteor.userId(), ["CompanyMember"]);

            return true;
        }
    });
}

SimpleSchema.messages({
    "required": "Поле \"[label]\" обязательно для заполнения!"
});

//схема
Invite.attachSchema(new SimpleSchema({
    //Email пользователя с формы, на него будет отправлено приглшение
    email: {
        type: String,
        label: "Электронный адрес / Email",
        min: 3,
        max: 30
    },
    //сгенерированный нами код активации приглашения. Случайное значение
    token: {
        type: String,
        label: "Код приглашения",
        min: 10,
        max: 10
    },
    //Статус приглашения
    status: {
        type: Number,
        label: "Статус приглашения"
    },
    //Если пользовател активировал приглашение
    invitedUserId: {
        type: String,
        label: "Идентификатор пригашённого пользователя",
        optional: true
    },
    //кто создал данное приглашение?
    creator: {
        type: String,
        label: "Создатель",
        autoValue: function() {
            if (this.isInsert) {
                return Meteor.userId();
            } else {
                this.unset();
            }
        },
        denyUpdate: true,
        optional: true
    },
    //Связываем приглашение с компанией
    companyId: {
        type: String,
        autoValue: function() {
            if (this.isInsert) {
                return Company.findOne({userId:Meteor.userId()})._id;
            } else {
                this.unset();
            }
        },
        label: "Компания",
        denyUpdate: true,
        optional: true
    },
    //дата создания
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        },
        denyUpdate: true,
        optional: true
    },
    //дата обновления.
    //Последнее значение будет являться датой активации
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
}));
