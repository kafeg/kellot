var baseTemplateName = "department";
var baseTemplateNameF = "Department";

Template.department.helpers({
  settings: function () {
    return {
      collection: Department.find(),
      rowsPerPage: 10,
      showNavigation: 'always',
      showFilter: false,
      fields:
      [
        { key: 'title', label: 'Подразделение' },
        {
          key: 'actions',
          label: '',
          //fn: function (value, object) {
            //console.log(object)
          //  return new Spacebars.SafeString('<a href="'+object._id+'">View</a>');
          //}
          tmpl: Template.departmentTableActions
        }
      ],
    };
  },
  //base vars
  addFormName: "add"+baseTemplateNameF+"Form",
  backFormName: baseTemplateName,
  updateFormName: "update"+baseTemplateNameF+"Form",
  collectionName: baseTemplateNameF,
  filedSetTemplate: baseTemplateName+"Fieldset",
  //titles
  addFormTitle: "Добавить подразделение",
  updateFormTitle: "Редактирвоать подразделение",
  baseFormTitle: "Справоник подразделений"
});

Template.addDepartmentForm.inheritsHelpersFrom(baseTemplateName);
Template.updateDepartmentForm.inheritsHelpersFrom(baseTemplateName);
Template.departmentTableActions.inheritsHelpersFrom(baseTemplateName);

Router.map(function() {
  this.route(baseTemplateName, {path: '/'+baseTemplateName,
  waitOn: function() { return Meteor.subscribe('company', Meteor.userId()); },
  //waitOn: function() { return Meteor.subscribe('holiday', Meteor.userId()); }
  });
  this.route('add'+baseTemplateNameF+'Form', {path: '/'+baseTemplateName+'/add',
  //waitOn: function() { return Meteor.subscribe('department', Meteor.userId()); }
  });
  this.route('update'+baseTemplateNameF+'Form', {
    path: '/'+baseTemplateName+'/update/:_id',
    data: function() { return Department.findOne(this.params._id); }
    //waitOn: function() { return Meteor.subscribe('department', Meteor.userId()); }
  });
});

AutoForm.hooks({
  addDepartmentForm: {
    onSuccess: function(operation, result, template) { Router.go(baseTemplateName); },
  },
  updateDepartmentForm: {
    onSuccess: function(operation, result, template) { Router.go(baseTemplateName); },
  }
});
