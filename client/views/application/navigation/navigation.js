if (Meteor.isClient) {
  Template.navItems.helpers({
    activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      //console.log(currentRoute.lookupTemplate(), template);
      return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
    }
  });
}

Template.navItems.events({
  'click #logoutLink' : function(e, t) {
    Meteor.logout();
    Alerts.removeSeen();
    Alerts.add('Вы вышли из системы!', 'success');
    Router.go('loginForm');
  }
});
