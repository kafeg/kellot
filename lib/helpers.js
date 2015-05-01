if (Meteor.isClient) {
    Template.registerHelper('userCompany', function () {
        var company = Company.findOne({userId: Meteor.userId()});
        //if user not owner of company, but he is a memeber of company
        if (company == undefined) {
            if (Meteor.userId() != null) {
                var user = Meteor.users.findOne({_id: Meteor.userId()}, {fields: {'companyId': 1}});
                //console.log('getCompany', Meteor.userId(), user.companyId);
                company = Company.findOne({_id: user.companyId});
            }
        }
        return company;
    });
}
