i18n.setLanguage('ru');

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('company', Meteor.userId()); }
});

Router.onBeforeAction('loading');

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
  //company
  this.route('company', {path: '/company',
    waitOn: function() { return Meteor.subscribe('company', Meteor.userId()); }
  });
  this.route('registerNewCompanyForm', {path: '/company/register',
    waitOn: function() { return Meteor.subscribe('company', Meteor.userId()); }
  });
  this.route('updateCompanyForm', {path: '/company/update',
    waitOn: function() { return Meteor.subscribe('company', Meteor.userId()); }
  });
  this.route('userProfile', {
    path: '/userProfile',
    //waitOn: function() { return Meteor.subscribe('users'); }
  });
});

Router.onBeforeAction(function (pause) {
  Alerts.removeSeen();
  //unauthorized - go to index page
  if (Meteor.userId() == null) {
    Router.go('index');
  }

  //if logged in but not assiged to company
  if (Meteor.isClient && Meteor.userId() != null) {
    //var userCompany = Company.findOne({userId:Meteor.userId()});
    //console.log(userCompany);

    //TODO userAssgned to company
    if (UI._globalHelpers.userCompany() == undefined) {
      Router.go('registerNewCompanyForm');
    }
  }

  if ((Router.current().route.path() == "/company/register") && (Company.findOne({userId:Meteor.userId()}) != undefined)) {
    //var currentRoute = Router.current();
    //console.log(currentRoute);
    Router.go('company');
  }

  this.next();
});
