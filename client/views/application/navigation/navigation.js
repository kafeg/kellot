if (Meteor.isClient) {
    Template.navItems.helpers({
        activeIfTemplateIs: function (template) {
            var currentRoute = Router.current();
            var templates = template.split('|');

            if ((templates != undefined) && (templates instanceof Array)) {
                var isActive = false;

                templates.forEach(function (element, index, array) {
                    var active = currentRoute && element === currentRoute.lookupTemplate();
                    if (active) {
                        isActive = true;
                        ;
                    }
                });
                return isActive ? 'active' : '';
            } else {
                return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
            }
        }
    });
}

Template.navItems.events({
    'click #logoutLink': function (e, t) {
        Meteor.logout();
        Alerts.removeSeen();
        Alerts.add('Вы вышли из системы!', 'success');
        Router.go('loginForm');
    }
});

Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        event.stopPropagation();
        Template._loginButtons.toggleDropdown();
        Router.go('profile');
    },
    'click #login-buttons-admin': function(event) {
        event.stopPropagation();
        Template._loginButtons.toggleDropdown();
        Router.go('adminDashboard');
    }
});
