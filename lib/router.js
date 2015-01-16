Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.onBeforeAction('loading');
Router.onBeforeAction(function (pause) {
  if (Meteor.isClient) {
    var userCompany = Company.findOne({userId:Meteor.userId()})

    if (userCompany == undefined) {
      Router.go('company');
    }
  }
  this.next();
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('loginForm', {path: '/login',
    //waitOn: function() { return Meteor.subscribe('users'); }
  });
  this.route('timeCard', {path: '/timeCard',
    //waitOn: function() { return Meteor.subscribe('users'); }
  });
  this.route('staff', {path: '/staff',
    //waitOn: function() { return Meteor.subscribe('users'); }
  });
  this.route('company', {path: '/company',
    //waitOn: function() { return Meteor.subscribe('users'); }
  });
  this.route('userProfile', {path: '/userProfile',
    //waitOn: function() { return Meteor.subscribe('users'); }
  });
});
