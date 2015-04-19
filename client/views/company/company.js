Tracker.autorun(function () {
    Meteor.subscribe("userData");
    Meteor.subscribe("allUserData");
});

AutoForm.hooks({
    registerNewCompanyForm: {
        onSuccess: function (operation, result, template) {
            Meteor.subscribe('company', Meteor.userId());
            Router.go('company');
        }
    },
    updateCompanyForm: {
        onSuccess: function (operation, result, template) {
            Router.go('company');
        }
    }
});

if (Meteor.isClient) {

    Template.firstLoginForm.events({
        'click #buttonCreateCompany': function () {
            Router.go("registerNewCompanyForm");
        }
    });
    Template.firstLoginForm.events({
        'click #buttonInviteToCompany': function () {
            Router.go("registerNewCompanyForm");
        }
    });

    Template.linkTemplate.events({
        'click .link-facebook': function () {
            Meteor.linkWithFacebook();
        }
    });
    Template.linkTemplate.events({
        'click .link-vk': function () {
            Meteor.linkWithVk();
        }
    });



    Template.linkTemplate.helpers({
        services: function () {
            var user = Meteor.user();
            console.log(user);
            if (user) {
                return _.keys(user.services);
            } else {
                return;
            }
        }
    })
}
