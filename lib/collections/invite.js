Invite = new Mongo.Collection('invite');

//SimpleSchema.debug = true;

if (Meteor.isServer) {
    Meteor.methods({
        invationSender: function (email) {
            check(this.userId, String);
            check(email, String);

            var token = Random.hexString(10);
            var company = Company.findOne({userId: this.userId});
            var companyName = company.title;

            var inviteId = Invite.insert({email:email,token:token,status:INVITE_CREATED});

            Email.send({
                to: email,
                from: 'info@forsk.ru',
                subject: 'Присоединитесь к компании '+companyName+' в онлайн табеле учёта рабочего времени Kellot.ru',
                html: 'Привет! Пользователь сайта Kellot.Ru под именем '+Meteor.user().profile.name+' приглашает Вас ' +
                    'присоединиться к ведению табеля учёта рабочего времени компании "'+companyName+'". ' +
                    '<br/><br/>Ваш код активации приглашения: '+token+''+
                    '<br/><br/>Чтобы войти в систему, пожалуйста пройдите по ссылке ' +
                    '<a href="http://p.kellot.ru/company/invite">http://p.kellot.ru/company/invite</a> ' +
                    'и введите вышеуказанный код активации приглашения.'+
                    '<br/><br/>С уважением, команда разработчиков онлайн табеля учёта рабочего времени Kellot.Ru'
            });

            Invite.update({_id:inviteId}, {$set: {status: INVITE_EMAILED}}, {}, function(error, count) {
                console.log('update error', error, count);
            });

            return true;
        }
    });
}

const INVITE_CREATED = 0;
const INVITE_EMAILED = 1;
const INVITE_COMPLETED = 2;

Invite.attachSchema(new SimpleSchema({
    email: {
        type: String,
        label: "Электронный адрес / Email",
        min: 3,
        max: 30
    },
    token: {
        type: String,
        label: "Код приглашения",
        min: 10,
        max: 10
    },
    status: {
        type: Number,
        label: "Статус приглашения"
    },
    invitedUserId: {
        type: String,
        label: "Идентификатор пригашённого пользователя",
        optional: true
    },
    creator: {
        type: String,
        label: "Создатель",
        autoValue: function() {
            if (this.isInsert) {
                return Meteor.userId();
            } else {
                this.unset();
            }
        }
    },
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
        //denyInsert: true,
        denyUpdate: true,
        optional: true
    },
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
        //denyInsert: true,
        denyUpdate: true,
        optional: true
    },
    // Force value to be current date (on server) upon update
    // and don't allow it to be set upon insert.
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
