i18n.setLanguage('ru');

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');

//new syntax
Router.route('/', {
    name: 'index',
    subscriptions: function() {
        // returning a subscription handle or an array of subscription handles
        // adds them to the wait list.
        this.subscribe('userData').wait();
        this.subscribe('company', Meteor.userId()).wait();
    },
    action: function () {
        this.render('index');
    }
});

Router.route('/company', {
    name: 'company',
    subscriptions: function() {
        // returning a subscription handle or an array of subscription handles
        // adds them to the wait list.
        this.subscribe('userData').wait();
        this.subscribe('company', Meteor.userId()).wait();
    },
    action: function() {
        if (this.ready()) {
            this.render('company');
        } else {
            this.render('loading');
        }
    }
});

Router.route('/company/register', {
    name: 'registerNewCompanyForm',
    subscriptions: function() {
        // returning a subscription handle or an array of subscription handles
        // adds them to the wait list.
        this.subscribe('userData').wait();
        this.subscribe('company', Meteor.userId()).wait();
    },
    action: function() {
        if (this.ready()) {
            this.render('registerNewCompanyForm');
        } else {
            this.render('loading');
        }
    }
});

Router.route('/company/update', {
    name: 'updateCompanyForm',
    subscriptions: function() {
        // returning a subscription handle or an array of subscription handles
        // adds them to the wait list.
        this.subscribe('userData').wait();
        this.subscribe('company', Meteor.userId()).wait();
    },
    action: function() {
        if (this.ready()) {
            this.render('updateCompanyForm');
        } else {
            this.render('loading');
        }
    }
});

Router.route('/company/request', {
    name: 'requestInviteToCompany',
    subscriptions: function() {
        // returning a subscription handle or an array of subscription handles
        // adds them to the wait list.
        this.subscribe('userData').wait();
        this.subscribe('company', Meteor.userId()).wait();
    },
    action: function() {
        if (this.ready()) {
            this.render('requestInviteToCompany');
        } else {
            this.render('loading');
        }
    }
});

Router.route('/company/invite/:activationToken', {
    name: 'activateInviteToCompany',
    subscriptions: function() {
        // returning a subscription handle or an array of subscription handles
        // adds them to the wait list.
        this.subscribe('userData').wait();
        this.subscribe("inviteToken", Router.current().params.activationToken).wait();
        this.subscribe('companyToken', Router.current().params.activationToken).wait();
        this.subscribe('userToken', Router.current().params.activationToken).wait();
    },
    action: function() {
        if (this.ready()) {
            this.render('activateInviteToCompany');
        } else {
            this.render('loading');
        }
    }
});

Router.route('/profile', {
    name: 'profile',
    action: function () {
        this.render('profile');
    }
});

Router.route('/firstLogin', {
    name: 'firstLoginForm',
    action: function () {
        this.render('firstLoginForm');
    }
});

Router.route('/reviews', {
    name: 'reviews',
    action: function () {
        this.render('reviews');
    }
});

//old syntax. TODO make new syntax, complete!
//Router.map(function () {
    //this.route('index', {
    //    trackPageView: true,
    //    path: '/'
    //});

    //company
    //this.route('company', {
    //    trackPageView: true,
    //    path: '/company',
    //    waitOn: function () {
    //        return Meteor.subscribe('company', Meteor.userId());
    //    }
    //});
    //this.route('registerNewCompanyForm', {
    //    trackPageView: true,
    //    path: '/company/register',
    //    waitOn: function () {
    //        Meteor.subscribe('userData');
    //        return Meteor.subscribe('company', Meteor.userId());
    //    }
    //});
    //this.route('updateCompanyForm', {
    //    trackPageView: true,
    //    path: '/company/update',
    //    waitOn: function () {
    //        Meteor.subscribe('userData');
    //        return Meteor.subscribe('company', Meteor.userId());
    //    }
    //});
    //this.route('requestInviteToCompany', {
    //    trackPageView: true,
    //    path: '/company/request',
    //    waitOn: function () {
    //        Meteor.subscribe('userData');
    //        return Meteor.subscribe('company', Meteor.userId());
    //    }
    //});
    ////Роутинг для страницы которая будет показана пользователю перешедшему по ссылке
    //this.route('activateInviteToCompany', {
    //    trackPageView: true,
    //    path: '/company/invite/:activationToken',
    //    waitOn: function () {
    //        Meteor.subscribe('userData');
    //        //подписываемся на один инвайт, одну компанию и пользователя, который нас пригласил
    //        Meteor.subscribe("inviteToken", Router.current().params.activationToken);
    //        Meteor.subscribe('companyToken', Router.current().params.activationToken);
    //        return Meteor.subscribe('userToken', Router.current().params.activationToken);
    //    }
    //});

    //profile
    //this.route('profile', {
    //    trackPageView: true,
    //    path: '/profile'
    //});
    //
    //this.route('firstLoginForm', {
    //    trackPageView: true,
    //    path: '/firstLogin'
    //});
    //this.route('reviews', {
    //    trackPageView: true,
    //    path: '/reviews'
    //});
//});

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
        case '/company/invite': pageTitle = 'Активация аккаунта'; break;
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

    Alerts.removeSeen();
    //не авторизованных пользователей не пускаем дальше заранее заданного перечня страниц
    if (Meteor.userId() == null) {
        if (pause.url != '/index'
            && pause.url != '/'
            && pause.url != '/reviews'
            && pause.url != '/company/invite/'+Router.current().params.activationToken) {
            Router.go('index');
        }
    }

    // если пользователь авторизован, но ещё не привязан ни к одной компании,
    // то стоит сначала проверить код активации пргилашения в сессии
    // для его привязки к существующей компании и если его нет,
    // то позволим ему зарегистрировать новую компанию и стать её владельцем
    if (Meteor.isClient && Meteor.userId() != null) {

        //Аккаунт разработчика - админ всея системы
        if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
                Meteor.call('checkAndAdminizeUser', function (error, result) {
            });
        }

        if (pause.url.indexOf('/admin') > -1) {
            console.log('Attempt to admin page!');
            if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
                Router.go('index');
            }
        }

        //Если наш пользователь не привязан ни к одной компании...
        if (UI._globalHelpers.userCompany() == undefined &&
            (pause.url != '/firstLogin'
            && pause.url != '/company/register'
            )) {

            //... и в текущей сессии сохранено приглашение, то...
            if (Session.get('activationToken') != undefined) {
                //запомним приглашение и грохнем его из сессии
                var activationToken = Session.get('activationToken');
                Session.set('activationToken', undefined);

                //получим объект инвайта по приглашению
                var invite = Invite.findOne({ token: activationToken });

                //вызовем серверный метод активации приглашения
                Meteor.call('activateInviteToken', activationToken, Meteor.userId(), function (error, result) {
                    //по результатам
                    if (error) {
                        //либо сообщим пользователю об ошибке...
                        console.log(error);
                        bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: " + error.reason);
                    } else {
                        //либо сообщим об успехе и подпишем его на все нужные коллекции!
                        Meteor.subscribe('userData');
                        Meteor.subscribe('company');
                        Meteor.subscribe('invite');
                        Meteor.subscribe('staff');
                        Meteor.subscribe('timecard');
                        Meteor.subscribe('holiday');
                        Meteor.subscribe('department');
                        bootbox.alert("Приглашение успешно активировано!");
                    }
                });
            } else {
                //если же в текущей сессии код активации отсутствует - пошлём пользователя лесом
                // (на страницу создания компании)
                Router.go('firstLoginForm');
            }
        }
    }

    if ((Router.current().route.path() == "/company/register") && (Company.findOne({userId: Meteor.userId()}) != undefined)) {
        Router.go('company');
    }

    this.next();
});
