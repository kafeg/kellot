Security.defineMethod("ifUserOwner", {
  fetch: [],
  deny: function (type, arg, userId, collection) {
    return userId !== collection.userId;
  }
});

Security.defineMethod("ifCompanyOwner", {
  fetch: [],
  deny: function (type, arg, userId, collection) {
    return Company.findOne({userId: userId})._id !== collection.companyId;
  }
});

Company.permit(['insert']).ifLoggedIn().apply();

Company.permit(['update']).ifUserOwner().apply();

Department.permit(['insert', 'update', 'remove']).ifCompanyOwner().apply();

Holiday.permit(['insert', 'update', 'remove']).ifCompanyOwner().apply();
