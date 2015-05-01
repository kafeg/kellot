Tracker.autorun(function () {
    Meteor.subscribe("userData");
    Meteor.subscribe("allUserData");
});

AutoForm.hooks({
    registerNewCompanyForm: {
        onSuccess: function (operation, result, template) {
            //console.log('registerNewCompanyForm success', operation, result, template);
            Meteor.subscribe("company", Meteor.userId(), {
                onReady: function () {
                    //console.log("onReady And the Itemns actually Arrive", arguments);
                    //var company = Company.find().fetch();
                    //console.log('Insert default records for company...', company);

                    Meteor.call('registerAdminUser', UI._globalHelpers.userCompany()._id, Meteor.userId(), function (error, result) {
                        if (error) {
                            //console.log(error);
                        } else {
                            //console.log('CompanyAdmin complete');
                        }
                    });

                    //отделы по умолчанию
                    var admId = Department.insert({title:'Администрация'});
                    Department.insert({title:'Бухгалтерия'});
                    Department.insert({title:'Отдел IT'});
                    Meteor.subscribe('department', Meteor.userId());

                    //праздники по умолчанию
                    Holiday.insert({title:'Новый год 1', holidayDate:'01.01.2015', repeatPerYear: true });
                    Holiday.insert({title:'8 марта', holidayDate:'08.03.2015', repeatPerYear: true });
                    Meteor.subscribe('holiday', Meteor.userId());

                    Staff.insert({firstName:'Василий', lastName:'Пупкин',personnelNumber:1,
                        departments:[admId], employmentDate:'01.05.2015',
                        starWorkTime:'01.01.2015 09:00', endWorkTime:'01.01.2015 18:00' });

                    Meteor.subscribe('staff', Meteor.userId());

                    Router.go('company');
                },
                onError: function () { console.log("onError", arguments); }
            });
            Meteor.subscribe('company', Meteor.userId());
            //console.log(Company.find().fetch()[0]._id);
        }//,
        //after: {
        //    insert: function(error, result) {
        //
        //    }
        //}
    },
    updateCompanyForm: {
        onSuccess: function (operation, result, template) {
            Router.go('company');
        }
    }
});

if (Meteor.isClient) {

    Template.firstLoginForm.events({
        'click #buttonCreateCompany': function () {
            Router.go("registerNewCompanyForm");
        },
        'click #buttonRequestInviteToCompany': function () {
            Router.go("requestInviteToCompany");
        }
    });
}
