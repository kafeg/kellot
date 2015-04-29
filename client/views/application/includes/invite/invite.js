/**
 * Created by kafeg on 23.04.2015.
 */

const INVITE_CREATED = 0;
const INVITE_EMAILED = 1;
const INVITE_COMPLETED = 2;

Template.inviteSend.events({
    'click #sendInviteBtn': function () {
        var email = $('#inviteSend [name=email]').val();
        $('#sendInviteBtn').attr("disabled", true);
        //console.log('invite to ' + email);

        var existsInvite = Invite.findOne({email:email});
        if ( existsInvite == undefined ) {
            if (UI._globalHelpers.validateEmail( email )) {
                Meteor.call('invationSender', email, function (error, result) {
                    if (error) {
                        $('#sendInviteBtn').removeAttr("disabled");
                        bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: " + error.reason);
                    } else {
                        $('#inviteSend [name=email]').val("");
                        $('#sendInviteBtn').removeAttr("disabled");
                        Meteor.subscribe('invite', Meteor.userId());
                        bootbox.alert("Приглашение успешно отправлено на адрес " + email);
                    }
                });
            } else {
                bootbox.alert("Email не соответствует формату email@example.ru!");
            }
        } else {
            bootbox.alert("На данный Email ранее уже было отправлено приглашение!");
        }
    }
});

Template.inviteList.events({
    'click .deleteInviteBtn': function () {
        //console.log('event', this);
        Meteor.call('deleteInvite', this._id, function (error, result) {
            if (error) {
                bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: " + error.reason);
            } else {
                bootbox.alert("Приглашение удалено!");
            }
        });
    }
});

Template.inviteList.helpers({
    invitedUsers: function () {
        return Invite.find();
    },
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
                textStatus = 'зарегистрирован';
                break;
        }
        return textStatus;
    }
});