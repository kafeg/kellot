var baseTemplateName = "staff";
var baseTemplateNameF = "Staff";

Template.staff.helpers({
    settings: function () {
        return {
            collection: Staff.find(),
            rowsPerPage: 10,
            showNavigation: 'always',
            showFilter: false,
            fields: [
                {
                    key: 'personnelNumber', label: '№'
                },
                {
                    key: 'staffFullName', label: 'Сотрудник', fn: function (value, object) {
                    return new Spacebars.SafeString(object.firstName + ' ' + object.lastName);
                }
                },
                {
                    key: 'employmentDate', label: 'Принят', fn: function (value, object) {
                    return value.toLocaleDateString();
                }
                },
                {
                    key: 'dismissalDate', label: 'Уволен', fn: function (value, object) {
                    if (value > '') {
                        return value.toLocaleDateString();
                    } else {
                        return 'работает'
                    }
                }
                },
                {
                    key: 'workTime', label: 'Время работы', fn: function (value, object) {
                    return new Spacebars.SafeString(object.starWorkTime.toLocaleFormat('%H:%M') + ' - ' + object.endWorkTime.toLocaleFormat('%H:%M'));
                }
                },
                {
                    key: 'departments', label: 'Подразделения', fn: function (value, object) {
                    var deps = [];

                    for (var dep in value) {
                        var departObj = Department.findOne({_id: value[dep]});
                        if (departObj != undefined) {
                            var depart = departObj.title;
                            deps.push(depart);
                        }
                    }

                    return new Spacebars.SafeString(implodeArray(', ', deps));
                }
                },
                {
                    key: 'actions',
                    label: '',
                    tmpl: Template.staffTableActions
                }
            ]
        };
    },
    //base vars
    addFormName: "add" + baseTemplateNameF + "Form",
    backFormName: baseTemplateName,
    updateFormName: "update" + baseTemplateNameF + "Form",
    collectionName: baseTemplateNameF,
    fieldSetTemplate: baseTemplateName + "Fieldset",
    //titles
    addFormTitle: "Завести карточку сотрудника",
    updateFormTitle: "Редактирвоать карточку сотрудника",
    baseFormTitle: "Сотрудники",
    datepickerOptions: function () {
        return {format: "dd.mm.yyyy"}
    },
    datetimepickerOptions: function () {
        return {format: 'HH:mm', pickDate: false, useCurrent: false}
    }
});

Template.addStaffForm.inheritsHelpersFrom(baseTemplateName);
Template.updateStaffForm.inheritsHelpersFrom(baseTemplateName);
Template.staffTableActions.inheritsHelpersFrom(baseTemplateName);
Template.staffFieldset.inheritsHelpersFrom(baseTemplateName);

//hack, but default widgetcode not work =((
Template.addStaffForm.rendered = function () {
    $('[name=starWorkTime]').data("DateTimePicker").setDate('09:00');
    $('[name=endWorkTime]').data("DateTimePicker").setDate('18:00');
};
Template.updateStaffForm.rendered = function () {
    $('[name=starWorkTime]').data("DateTimePicker").setDate(this.data.starWorkTime);
    $('[name=endWorkTime]').data("DateTimePicker").setDate(this.data.endWorkTime);
};

Router.map(function () {
    //console.log('setup', 'add'+baseTemplateNameF+'Form');
    this.route(baseTemplateName, {
        path: '/' + baseTemplateName,
        waitOn: function () {
            return Meteor.subscribe('company', Meteor.userId());
        }
        //waitOn: function() { return Meteor.subscribe('staff', Meteor.userId()); }
    });
    this.route('add' + baseTemplateNameF + 'Form', {
        path: '/' + baseTemplateName + '/add'
        //waitOn: function() { return Meteor.subscribe('department', Meteor.userId()); }
    });
    this.route('update' + baseTemplateNameF + 'Form', {
        path: '/' + baseTemplateName + '/update/:_id',
        data: function () {
            return Staff.findOne(this.params._id);
        }
        //waitOn: function() { return Meteor.subscribe('department', Meteor.userId()); }
    });
});

AutoForm.hooks({
    addStaffForm: {
        onSuccess: function (operation, result, template) {
            Router.go(baseTemplateName);
            Meteor.subscribe('company', Meteor.userId());
        }
    },
    updateStaffForm: {
        onSuccess: function (operation, result, template) {
            Router.go(baseTemplateName);
        }
    }
});
