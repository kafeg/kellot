i18n.setLanguage('ru');

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');

Router.map(function () {
    this.route('index', {
        trackPageView: true,
        path: '/'
    });

    //company
    this.route('company', {
        trackPageView: true,
        path: '/company',
        waitOn: function () {
            return Meteor.subscribe('company', Meteor.userId());
        }
    });
    this.route('registerNewCompanyForm', {
        trackPageView: true,
        path: '/company/register',
        waitOn: function () {
            return Meteor.subscribe('company', Meteor.userId());
        }
    });
    this.route('updateCompanyForm', {
        trackPageView: true,
        path: '/company/update',
        waitOn: function () {
            return Meteor.subscribe('company', Meteor.userId());
        }
    });
    this.route('requestInviteToCompany', {
        trackPageView: true,
        path: '/company/request',
        waitOn: function () {
            return Meteor.subscribe('company', Meteor.userId());
        }
    });

    this.route('profile', {
        trackPageView: true,
        path: '/profile'
    });
    this.route('firstLoginForm', {
        trackPageView: true,
        path: '/firstLogin'
    });
    this.route('reviews', {
        trackPageView: true,
        path: '/reviews'
    });
});

Router.onBeforeAction(function (pause) {
    //GAnalytics.pageview();
    //yaCounter29872914.hit(pause.url, pause.url, '');
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

        //console.log(pause);
        //TODO userAssigned to company
        if (UI._globalHelpers.userCompany() == undefined &&
            (pause.url != '/firstLogin'
            && pause.url != '/company/register'
            && pause.url != '/company/request'
            && pause.url != '/company/requestInvite'
            //&& pause.url != '/' && pause.url != '/index'
            )) {
            Router.go('firstLoginForm');
        }
    }

    if ((Router.current().route.path() == "/company/register") && (Company.findOne({userId: Meteor.userId()}) != undefined)) {
        //var currentRoute = Router.current();
        //console.log(currentRoute);
        Router.go('company');
    }

    this.next();
});
