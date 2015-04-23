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
    //Router.route('requestInviteToCompany', {
    //    path: '/company/request/:token',
    //    onBeforeAction: function() {
    //        Session.set('betaToken', this.params.token);
    //    }
    //});
    //
    //Router.route('companyInvites', {
    //    path: '/company/invites',
    //    waitOn: function () {
    //        return Meteor.subscribe('invites', Meteor.userId());
    //    }
    //});

    //profile
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

Router.onAfterAction(function (pause) {
    var pageTitle = '';
    switch (this.url) {
        case '/': pageTitle = 'Главная'; break;
        case '/index': pageTitle = 'Главная'; break;
        case '/company': pageTitle = 'Моя компания'; break;
        case '/company/register': pageTitle = 'Регистрация новой компании'; break;
        case '/company/update': pageTitle = 'Редактирование информации о компании'; break;
        case '/company/request': pageTitle = 'Запрос приглашения в компанию'; break;
        case '/profile': pageTitle = 'Профиль'; break;
        case '/firstLogin': pageTitle = 'Первое знакомство'; break;
        case '/reviews': pageTitle = 'Отзывы'; break;
        case '/staff': pageTitle = 'Сотрудники'; break;
        case '/timecard': pageTitle = 'Табель'; break;
        case '/department': pageTitle = 'Подразделения'; break;
        case '/holiday': pageTitle = 'Праздники'; break;
    }
    if (pageTitle > '') {
        document.title = 'Kellot - онлайн табель учёта рабочего времени - ' + pageTitle;
    } else {
        document.title = 'Kellot - онлайн табель учёта рабочего времени';
    }
    //console.log('Metrika hit', pageTitle,  location.href, document.title, document.referrer);
    Metrika.hit(location.href, document.title, document.referrer);
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
