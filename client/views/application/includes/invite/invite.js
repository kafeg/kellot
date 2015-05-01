Template.inviteSend.events({
    'click #sendInviteBtn': function () {
        //поулчаем значение поля из нашей формы Email
        var email = $('#inviteSend [name=email]').val();
        $('#sendInviteBtn').attr("disabled", true);

        //проверяем инвайт для данного Email на существование
        var existsInvite = Invite.findOne({email:email});
        if ( existsInvite == undefined ) {
            //если приглашения для нег ещё нет - проверяем Email на валидность
            if (UI._globalHelpers.validateEmail( email )) {
                //Если Email прошёл валидацию - отправляем приглашение через вызов серверной функции
                Meteor.call('invationSender', email, function (error, result) {
                    if (error) {
                        //что-то пошло не так. Выводим ошибку
                        $('#inviteSend [name=email]').val("");
                        $('#sendInviteBtn').removeAttr("disabled");
                        bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: " + error.reason);
                    } else {
                        //всё пучком. Приглашение отправлено, спсиок обновился автоматически
                        $('#inviteSend [name=email]').val("");
                        $('#sendInviteBtn').removeAttr("disabled");
                        Meteor.subscribe('invite', Meteor.userId());
                        bootbox.alert("Приглашение успешно отправлено на адрес " + email);
                    }
                });
            } else {
                //Если Email не прошёл валидацию - выводим сообщение пользователю
                $('#inviteSend [name=email]').val("");
                $('#sendInviteBtn').removeAttr("disabled");
                bootbox.alert("Email не соответствует формату email@example.ru!");
            }
        } else {
            //если приглашение для введённого Email уже существует - сообщаем об этом пользователю.
            $('#inviteSend [name=email]').val("");
            $('#sendInviteBtn').removeAttr("disabled");
            bootbox.alert("На данный Email ранее уже было отправлено приглашение!");
        }
    }
});

Template.inviteList.events({
    //обрабатываем клик по кнопке удаления приглашения
    'click .deleteInviteBtn': function () {
        //просто вызываем серверный метод с параметрами и выводим то или иное сообщение
        Meteor.call('deleteInvite', this._id, function (error, result) {
            if (error) {
                bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: " + error.reason);
            } else {
                bootbox.alert("Приглашение удалено!");
            }
        });
    }
});

//определим несколько хелперов для шаблона с перечнем приглашений
Template.inviteList.helpers({
    //перечень приглашённых пользователей
    invitedUsers: function () {
        return Invite.find();
    },
    //преобразуем числовые статусы в текст для отобраения пользователю
    inviteTextStatus: function() {
        var textStatus = '-';
        switch(this.status) {
            case INVITE_CREATED:
                textStatus = 'создано';
                break;
            case INVITE_EMAILED:
                textStatus = 'выслано';
                break;
            case INVITE_COMPLETED:
                textStatus = 'принято';
                break;
        }
        return textStatus;
    },
    //проверяем статус приглашения
    inviteIsComplete: function () {
        if (this.status == INVITE_COMPLETED) {
            return true;
        } else {
            return false;
        }
    },
    //проверяем статус приглашения
    inviteIsEmailed: function () {
        if (this.status == INVITE_EMAILED) {
            return true;
        } else {
            return false;
        }
    },
    //проверяем статус приглашения
    inviteIsCreated: function () {
        if (this.status == INVITE_CREATED) {
            return true;
        } else {
            return false;
        }
    }
});

if (Meteor.isClient) {

    //После рендеринга шаблона страницы из ссылки, автоматически записываем в сессию текущий код активации
    Template.activateInviteToCompany.rendered = function () {
        Session.set('activationToken', Router.current().params.activationToken);
    };

    //ещё немного хелперов
    Template.activateInviteToCompany.helpers({
        //выводим имя компании передавая код приглашения в шаблон
        companyNameByInviteCode: function () {
            var invite = Invite.findOne({token:Router.current().params.activationToken});
            var company = Company.findOne({_id:invite.companyId});
            return company.title;
        },
        //выводим имя пользователя по коду приглашения в шаблон
        companyUserNameByInviteCode: function () {
            var invite = Invite.findOne({token:Router.current().params.activationToken});
            var company = Company.findOne({_id:invite.companyId});
            var user = Meteor.users.findOne({_id:company.userId});
            return user.profile.name;
        },
        //выводим текущий код активации в шаблон
        userActivationCode: function () {
            return Router.current().params.activationToken;
        },
        //проверяем не активировано ли текущее приглашение
        //небольшое дублирование кода с другим шаблоном
        inviteIsActivated: function () {
            var userInviteCode = Router.current().params.activationToken;
            var invite = Invite.findOne({token: userInviteCode});
            if (invite.status == INVITE_COMPLETED) {
                return true;
            } else {
                return false;
            }
        }
    });
}
