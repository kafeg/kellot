if (Meteor.isClient) {
    Template.registerHelper('userCompany', function () {
        return Company.findOne({userId: Meteor.userId()});
        //TODO if user assigned to company
    });
}
