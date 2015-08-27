//эти хелперы бессмысленны на сервере, пожтому показываем их только на клиенте
if (Meteor.isClient) {
    //ищем компанию текущег опользователя. Он может быть как её владельцем, так и просто приглашённым пользователем
    Template.registerHelper('userCompany', function () {
        var company = Company.findOne({userId: Meteor.userId()});
        if (company == undefined) {
            if (Meteor.userId() != null) {
                var user = Meteor.users.findOne({_id: Meteor.userId()}, {fields: {'companyId': 1}});
                console.log();
                company = Company.findOne({_id: user.companyId});
            }
        }
        return company;
    });

    //нам нужна функция для проверки Email на форме перед передачей данных на сервер
    Template.registerHelper('validateEmail', function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    });
}

