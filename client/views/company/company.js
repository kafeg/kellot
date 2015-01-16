if (Meteor.isClient) {
  Template.company.helpers({
    userDontHasCompany: function (template) {

      var userCompany = Company.findOne({userId:Meteor.userId()})

      if (userCompany == undefined) {
        return true;
      } else {
        return false;
      }

      //TODO if user assigned to company
    }
  });
  Template.viewCompanyForm.helpers({
    userCompany: function (template) {

      var userCompany = Company.findOne({userId:Meteor.userId()})

      return userCompany;

      //TODO if user assigned to company
    }
  });



}
