/**
 * Created by kafeg on 23.04.2015.
 */

Template.inviteSend.events({
    'click #sendInviteBtn': function () {
        var email = $('#inviteSend [name=email]').val();
        console.log('invite to ' + email);

        if (email != '') {
            Meteor.call('invationSender', email, function (error, result) {
                if (error) {
                    bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: " + error.reason);
                } else {
                    $('#inviteSend [name=email]').val("");
                    bootbox.alert("Приглашение успешно отправлено на адрес " + email);
                }
            });
        } else {
            bootbox.alert("Для начала введите Email!");
        }
    }
});
