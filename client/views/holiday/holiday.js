var baseTemplateName = "holiday";
var baseTemplateNameF = "Holiday";

Template.holiday.helpers({
  settings: function () {
    return {
      collection: Holiday.find(),
      rowsPerPage: 10,
      showNavigation: 'always',
      showFilter: false,
      fields:
      [
        { key: 'title', label: 'Праздник' },
      {
        key: 'actions',
        label: '',
        //fn: function (value, object) {
        //console.log(object)
        //  return new Spacebars.SafeString('<a href="'+object._id+'">View</a>');
        //}
        tmpl: Template.holidayTableActions
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
    addFormTitle: "Добавить праздник",
    updateFormTitle: "Редактирвоать праздник",
    baseFormTitle: "Справоник праздников",
    datepickerOptions: function() { return { format: "dd.mm.yyyy" } }
});

Template.addHolidayForm.inheritsHelpersFrom(baseTemplateName);
Template.updateHolidayForm.inheritsHelpersFrom(baseTemplateName);
Template.holidayTableActions.inheritsHelpersFrom(baseTemplateName);
Template.holidayFieldset.inheritsHelpersFrom(baseTemplateName);

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
  addHolidayForm: {
    onSuccess: function(operation, result, template) { Router.go(baseTemplateName); },
  },
  updateHolidayForm: {
    onSuccess: function(operation, result, template) { Router.go(baseTemplateName); },
  }
});
