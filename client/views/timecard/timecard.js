var baseTemplateName = "timecard";
var baseTemplateNameF = "Timecard";

Template.timecard.helpers({
    settings: function () {
        return {
            collection: Timecard.find(),
            rowsPerPage: 10,
            showNavigation: 'always',
            showFilter: false,
            fields: [
                {
                    key: 'staffId', label: 'Сотрудник', fn: function (value, object) {
                        var staff = Staff.findOne({_id:value});
                        return new Spacebars.SafeString(staff.firstName + ' ' + staff.lastName);
                    }
                },
                { key: 'd1', label: '1', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="1">'+value+'</a>'); }},
                { key: 'd2', label: '2', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="2">'+value+'</a>'); }},
                { key: 'd3', label: '3', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="3">'+value+'</a>'); }},
                { key: 'd4', label: '4', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="4">'+value+'</a>'); }},
                { key: 'd5', label: '5', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="5">'+value+'</a>'); }},
                { key: 'd6', label: '6', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="6">'+value+'</a>'); }},
                { key: 'd7', label: '7', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="7">'+value+'</a>'); }},
                { key: 'd8', label: '8', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="8">'+value+'</a>'); }},
                { key: 'd9', label: '9', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="9">'+value+'</a>'); }},
                { key: 'd10', label: '10', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="10">'+value+'</a>'); }},
                { key: 'd11', label: '11', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="11">'+value+'</a>'); }},
                { key: 'd12', label: '12', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="12">'+value+'</a>'); }},
                { key: 'd13', label: '13', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="13">'+value+'</a>'); }},
                { key: 'd14', label: '14', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="14">'+value+'</a>'); }},
                { key: 'd15', label: '15', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="15">'+value+'</a>'); }},
                { key: 'd16', label: '16', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="16">'+value+'</a>'); }},
                { key: 'd17', label: '17', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="17">'+value+'</a>'); }},
                { key: 'd18', label: '18', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="18">'+value+'</a>'); }},
                { key: 'd19', label: '19', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="19">'+value+'</a>'); }},
                { key: 'd20', label: '20', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="20">'+value+'</a>'); }},
                { key: 'd21', label: '21', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="21">'+value+'</a>'); }},
                { key: 'd22', label: '22', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="22">'+value+'</a>'); }},
                { key: 'd23', label: '23', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="23">'+value+'</a>'); }},
                { key: 'd24', label: '24', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="24">'+value+'</a>'); }},
                { key: 'd25', label: '25', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="25">'+value+'</a>'); }},
                { key: 'd26', label: '26', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="26">'+value+'</a>'); }},
                { key: 'd27', label: '27', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="27">'+value+'</a>'); }},
                { key: 'd28', label: '28', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="28">'+value+'</a>'); }},
                { key: 'd29', label: '29', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="29">'+value+'</a>'); }},
                { key: 'd30', label: '30', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="30">'+value+'</a>'); }},
                { key: 'd31', label: '31', fn: function (value, object) { return new Spacebars.SafeString('<a href="#" class="timecardEditable" data-id="'+object._id+'" data-num="31">'+value+'</a>'); }},
                { key: 'hospitalDays', label: 'Бол.'},
                { key: 'workHoursAndMinuts', label: 'Раб. час:мин'},
                { key: 'workHours', label: 'Раб. часы'},
                { key: 'workHoursAndMinutsAtHolidays', label: 'Раб. час:мин, вых'},
                { key: 'workHoursAtHolidays', label: 'Раб. часы, вых'},
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
    addFormTitle: "Создать запись в табеле",
    updateFormTitle: "Редактирвоать запись табеля",
    baseFormTitle: "Табель",
    datepickerOptions: function () {
        return {format: "dd.mm.yyyy"}
    },
    datetimepickerOptions: function () {
        return {format: 'HH:mm', pickDate: false, useCurrent: false}
    }
});

function timecardGenerator () {
    //var company = UI._globalHelpers.userCompany();
    var params = [];
    //var companyId = company._id;
    var d = new Date();
    var currentYear = d.getFullYear();
    var currentMonthId = d.getMonth();

    Meteor.call('timecardGenerator', currentYear, currentMonthId, function(error, result) {
        if (error) {
            bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: "+error.reason);
        }
    });
    return 0;
}

Template.timecard.rendered = function () {
    timecardGenerator ();
    //'.d1 a, .d2 a, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12, .d13, .d14, .d15, .d16, .d17, .d18, .d19, .d20, .d21, .d22, .d23, .d24, .d25, .d26, .d27, .d28 a, .d29 a, .d30, .d31'
    $('.timecardEditable').editable({
        type: 'select',
        source: [
            {value: 1, text: '00:00'},
            {value: 2, text: '00:01'},
            {value: 2, text: 'Больничный день'},
        ],
        success: function(response, newValue) {
            console.log(response, newValue);
        }
    });
};

Template.addTimecardForm.inheritsHelpersFrom(baseTemplateName);
Template.updateTimecardForm.inheritsHelpersFrom(baseTemplateName);
Template.timecardTableActions.inheritsHelpersFrom(baseTemplateName);
Template.timecardFieldset.inheritsHelpersFrom(baseTemplateName);

//hack, but default widgetcode not work =((
Template.addTimecardForm.rendered = function () {
    $('[name=starWorkTime]').data("DateTimePicker").setDate('09:00');
    $('[name=endWorkTime]').data("DateTimePicker").setDate('18:00');
}
Template.updateTimecardForm.rendered = function () {
    $('[name=starWorkTime]').data("DateTimePicker").setDate(this.data.starWorkTime);
    $('[name=endWorkTime]').data("DateTimePicker").setDate(this.data.endWorkTime);
}

Router.map(function () {
    this.route(baseTemplateName, {
        path: '/' + baseTemplateName,
        waitOn: function () {
            Meteor.subscribe('company', Meteor.userId());
        }
    });
    this.route('add' + baseTemplateNameF + 'Form', {
        path: '/' + baseTemplateName + '/add'
    });
    this.route('update' + baseTemplateNameF + 'Form', {
        path: '/' + baseTemplateName + '/update/:_id',
        data: function () {
            return Timecard.findOne(this.params._id);
        }
    });
});

AutoForm.hooks({
    addTimecardForm: {
        onSuccess: function (operation, result, template) {
            Router.go(baseTemplateName);
        }
    },
    updateTimecardForm: {
        onSuccess: function (operation, result, template) {
            Router.go(baseTemplateName);
        }
    }
});
