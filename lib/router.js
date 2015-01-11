Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.onBeforeAction('loading');

Router.map(function() {
  this.route('index', {path: '/'});
});

Router.map(function() {
    this.route('loginForm', {path: '/login',
    //waitOn: function() { return Meteor.subscribe('users'); }
  });
});

Router.map(function() {
    this.route('timeCard', {path: '/timeCard',
    //waitOn: function() { return Meteor.subscribe('users'); }
  });
});

Router.map(function() {
    this.route('staff', {path: '/staff',
    //waitOn: function() { return Meteor.subscribe('users'); }
  });
});
