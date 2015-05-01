Template.inviteSend.events({
    'click #sendInviteBtn': function () {
        var email = $('#inviteSend [name=email]').val();
        $('#sendInviteBtn').attr("disabled", true);

        var existsInvite = Invite.findOne({email:email});
        if ( existsInvite == undefined ) {
            if (UI._globalHelpers.validateEmail( email )) {
                Meteor.call('invationSender', email, function (error, result) {
                    if (error) {
                        $('#inviteSend [name=email]').val("");
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
                $('#inviteSend [name=email]').val("");
                $('#sendInviteBtn').removeAttr("disabled");
                bootbox.alert("Email не соответствует формату email@example.ru!");
            }
        } else {
            $('#inviteSend [name=email]').val("");
            $('#sendInviteBtn').removeAttr("disabled");
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
                textStatus = 'принято';
                break;
        }
        return textStatus;
    },
    inviteIsComplete: function () {
        if (this.status == INVITE_COMPLETED) {
            return true;
        } else {
            return false;
        }
    },
    inviteIsEmailed: function () {
        if (this.status == INVITE_EMAILED) {
            return true;
        } else {
            return false;
        }
    },
    inviteIsCreated: function () {
        if (this.status == INVITE_CREATED) {
            return true;
        } else {
            return false;
        }
    }
});

if (Meteor.isClient) {

    Template.activateInviteToCompany.rendered = function () {
        Session.set('activationToken', Router.current().params.activationToken);
    };
    Template.activateInviteToCompany.helpers({
        companyNameByInviteCode: function () {
            var invite = Invite.findOne({token:Router.current().params.activationToken});
            var company = Company.findOne({_id:invite.companyId});
            return company.title;
        },
        companyUserNameByInviteCode: function () {
            var invite = Invite.findOne({token:Router.current().params.activationToken});
            var company = Company.findOne({_id:invite.companyId});
            var user = Meteor.users.findOne({_id:company.userId});
            return user.profile.name;
        },
        userActivationCode: function () {
            return Router.current().params.activationToken;
        },
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
