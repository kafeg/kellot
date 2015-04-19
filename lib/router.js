i18n.setLanguage('ru');

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');

Router.map(function () {
    this.route('index', {path: '/'});
    //company
    this.route('company', {
        path: '/company',
        waitOn: function () {
            return Meteor.subscribe('company', Meteor.userId());
        }
    });
    this.route('registerNewCompanyForm', {
        path: '/company/register',
        waitOn: function () {
            return Meteor.subscribe('company', Meteor.userId());
        }
    });
    this.route('updateCompanyForm', {
        path: '/company/update',
        waitOn: function () {
            return Meteor.subscribe('company', Meteor.userId());
        }
    });
    this.route('profile', {
        path: '/profile'
    });
});

Router.onBeforeAction(function (pause) {
    //console.log(Meteor.userId());
    Alerts.removeSeen();
    //unauthorized - go to index page
    if (Meteor.userId() == null) {
        Router.go('index');
    }

    //if logged in but not assiged to company
    if (Meteor.isClient && Meteor.userId() != null) {
        //var userCompany = Company.findOne({userId:Meteor.userId()});
        //console.log(userCompany);

        //TODO userAssigned to company
        if (UI._globalHelpers.userCompany() == undefined) {
            Router.go('registerNewCompanyForm');
        }
    }

    if ((Router.current().route.path() == "/company/register") && (Company.findOne({userId: Meteor.userId()}) != undefined)) {
        //var currentRoute = Router.current();
        //console.log(currentRoute);
        Router.go('company');
    }

    this.next();
});
