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
