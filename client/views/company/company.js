AutoForm.hooks({
  registerNewCompanyForm: {
    onSuccess: function(operation, result, template) { Router.go('company'); },
  },
  updateCompanyForm: {
    onSuccess: function(operation, result, template) { Router.go('company'); },
  }
});
