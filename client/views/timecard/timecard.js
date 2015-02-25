var baseTemplateName = "timecard";
var baseTemplateNameF = "Timecard";

function getTdBgColor(objNum, object) {
    return object['du'+objNum] ? 'timecardEdited' : 'timecardNotEdited';
}

Template.timecard.helpers({
    settings: function () {
        return {
            collection: Timecard.find(),
            rowsPerPage: 30,
            showNavigation: 'always',
            showFilter: false,
            id: 'timcardTable',
            //useFontAwesome: true,
            fields: [
                {
                    key: 'staffId', label: 'Сотрудник', fn: function (value, object) {
                    var staff = Staff.findOne({_id: value});
                    return new Spacebars.SafeString(staff.firstName + ' ' + staff.lastName);
                }
                },
                {
                    key: 'd1', label: '1', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('1', object)+'" data-id="' + object._id + '" data-num="1" data-val="' + value + '" data-valtype="' + object.dt1 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd2', label: '2', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('2', object)+'" data-id="' + object._id + '" data-num="2" data-val="' + value + '" data-valtype="' + object.dt2 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd3', label: '3', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('3', object)+'" data-id="' + object._id + '" data-num="3" data-val="' + value + '" data-valtype="' + object.dt3 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd4', label: '4', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('4', object)+'" data-id="' + object._id + '" data-num="4" data-val="' + value + '" data-valtype="' + object.dt4 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd5', label: '5', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('5', object)+'" data-id="' + object._id + '" data-num="5" data-val="' + value + '" data-valtype="' + object.dt5 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd6', label: '6', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('6', object)+'" data-id="' + object._id + '" data-num="6" data-val="' + value + '" data-valtype="' + object.dt6 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd7', label: '7', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('7', object)+'" data-id="' + object._id + '" data-num="7" data-val="' + value + '" data-valtype="' + object.dt7 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd8', label: '8', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('8', object)+'" data-id="' + object._id + '" data-num="8" data-val="' + value + '" data-valtype="' + object.dt8 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd9', label: '9', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('9', object)+'" data-id="' + object._id + '" data-num="9" data-val="' + value + '" data-valtype="' + object.dt9 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd10', label: '10', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('10', object)+'" data-id="' + object._id + '" data-num="10" data-val="' + value + '" data-valtype="' + object.dt10 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd11', label: '11', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('11', object)+'" data-id="' + object._id + '" data-num="11" data-val="' + value + '" data-valtype="' + object.dt11 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd12', label: '12', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('12', object)+'" data-id="' + object._id + '" data-num="12" data-val="' + value + '" data-valtype="' + object.dt12 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd13', label: '13', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('13', object)+'" data-id="' + object._id + '" data-num="13" data-val="' + value + '" data-valtype="' + object.dt13 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd14', label: '14', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('14', object)+'" data-id="' + object._id + '" data-num="14" data-val="' + value + '" data-valtype="' + object.dt14 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd15', label: '15', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('15', object)+'" data-id="' + object._id + '" data-num="15" data-val="' + value + '" data-valtype="' + object.dt15 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd16', label: '16', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('16', object)+'" data-id="' + object._id + '" data-num="16" data-val="' + value + '" data-valtype="' + object.dt16 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd17', label: '17', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('17', object)+'" data-id="' + object._id + '" data-num="17" data-val="' + value + '" data-valtype="' + object.dt17 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd18', label: '18', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('18', object)+'" data-id="' + object._id + '" data-num="18" data-val="' + value + '" data-valtype="' + object.dt18 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd19', label: '19', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('19', object)+'" data-id="' + object._id + '" data-num="19" data-val="' + value + '" data-valtype="' + object.dt19 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd20', label: '20', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('20', object)+'" data-id="' + object._id + '" data-num="20" data-val="' + value + '" data-valtype="' + object.dt20 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd21', label: '21', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('21', object)+'" data-id="' + object._id + '" data-num="21" data-val="' + value + '" data-valtype="' + object.dt21 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd22', label: '22', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('22', object)+'" data-id="' + object._id + '" data-num="22" data-val="' + value + '" data-valtype="' + object.dt22 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd23', label: '23', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('23', object)+'" data-id="' + object._id + '" data-num="23" data-val="' + value + '" data-valtype="' + object.dt23 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd24', label: '24', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('24', object)+'" data-id="' + object._id + '" data-num="24" data-val="' + value + '" data-valtype="' + object.dt24 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd25', label: '25', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('25', object)+'" data-id="' + object._id + '" data-num="25" data-val="' + value + '" data-valtype="' + object.dt25 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd26', label: '26', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('26', object)+'" data-id="' + object._id + '" data-num="26" data-val="' + value + '" data-valtype="' + object.dt26 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd27', label: '27', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('27', object)+'" data-id="' + object._id + '" data-num="27" data-val="' + value + '" data-valtype="' + object.dt27 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd28', label: '28', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('28', object)+'" data-id="' + object._id + '" data-num="28" data-val="' + value + '" data-valtype="' + object.dt28 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd29', label: '29', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('29', object)+'" data-id="' + object._id + '" data-num="29" data-val="' + value + '" data-valtype="' + object.dt29 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd30', label: '30', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('30', object)+'" data-id="' + object._id + '" data-num="30" data-val="' + value + '" data-valtype="' + object.dt30 + '">' + value + '</a>');
                }
                },
                {
                    key: 'd31', label: '31', fn: function (value, object) {
                    return new Spacebars.SafeString('<a href="#" class="timecardEditable '+getTdBgColor('31', object)+'" data-id="' + object._id + '" data-num="31" data-val="' + value + '" data-valtype="' + object.dt31 + '">' + value + '</a>');
                }
                },
                {key: 'workDaysCount', label: 'Дни'},
                {key: 'monthHours', label: 'Часы'},
                {key: 'monthOvertimeHours', label: 'Сврх'},
                {key: 'monthNightHours', label: 'Ночь'},
                //{key: 'hospitalDays', label: 'Бол.'},
                //{key: 'workHoursAndMinuts', label: 'Раб. час:мин'},
                //{key: 'workHours', label: 'Раб. часы'},
                //{key: 'workHoursAndMinutsAtHolidays', label: 'Раб. час:мин, вых'},
                //{key: 'workHoursAtHolidays', label: 'Раб. часы, вых'},
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

Template.timecard.created = function () {

    //$('#timcardTable').arrive(".timecardNotEdited", function() {
        // 'this' refers to the newly created element
        //var $newElem = $(this);
        //$(this).parent().addClass('timecardNotEditedTd');
    //});

    registerNewEditableTypes();
    Tracker.autorun(function () {
        console.log('staffUpdated');
        if (Staff.find().count()) {
            timecardGenerator();
            //Meteor.call('exportT12', 2015, 0, function (error, result) {
            //    if (error) {
            //        bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: " + error.reason);
            //    }
            //});
        }
    });

    $('body').editable({
        selector: '.timecardEditable',
        type:'timecard',
        sourceTime: timecardSource,
        sourceType: UI._globalHelpers.timecardSpecCodesSource(),
        success: function(response, newValue) {
            var element = this;
            var num = $(element).attr('data-num');
            var id = $(element).attr('data-id');
            var val = newValue.tTime;
            var valtype = newValue.tType;

            Meteor.call('timecardUpdater', id, num, val, valtype, function (error, result) {
                if (error) {
                    bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: " + error.reason);
                } else {
                    //console.log(element);
                    $(element).parent().removeClass('timecardNotEditedTd');
                    //$('.timecardEditable').parent().removeAttr( 'style' );
                    //$('.timecardNotEdited').parent().css('background-color', 'lightgray');
                }
            });
        }
    });
};

//function getBackgroundColor( index, currentvalue, element ) {
//    var num = $(element).attr('data-num');
//    var id = $(element).attr('data-id');
//    var val = $(element).attr('data-val');
//    var valtype = $(element).attr('data-valtype');
//    console.log(num,  id, val, valtype);
//    return 'blue';
//}

Template.timecard.rendered = function () {
    //$('.timecardNotEdited').parent().addClass('timecardNotEditedTd');
    //generate values for timecardSource DO NOT DELETE
    //for (var i = 7; i >= 0; i--) {
    //    for (var j = 59; j >= 0; j--) {
    //        var h = '"0' + i;
    //        var m = ((j+"").length == 1 ? '0' + j + '"' : j + '"');
    //        console.log('{ value:' + h + ':' + m +', text:' + h + ':' + m + '},');
    //    }
    //}
};

Template.timecardTableActions.inheritsHelpersFrom(baseTemplateName);

Router.map(function () {
    this.route(baseTemplateName, {
        path: '/' + baseTemplateName,
        waitOn: function () {
            Meteor.subscribe('company', Meteor.userId());
            Meteor.subscribe('timecard', Meteor.userId());
            Meteor.subscribe('staff', Meteor.userId());
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

function timecardGenerator() {
    //var company = UI._globalHelpers.userCompany();
    var params = [];
    //var companyId = company._id;
    var d = new Date();
    var currentYear = d.getFullYear();
    var currentMonthId = d.getMonth();

    Meteor.call('timecardGenerator', currentYear, currentMonthId, function (error, result) {
        if (error) {
            bootbox.alert("Ошибка доступа к данным. Пожалуйста обратитесь в службу поддержки! Подробности: " + error.reason);
        } else {
            Meteor.subscribe('timecard', Meteor.userId());
        }
    });
    return 0;
}

function registerNewEditableTypes() {
    /**
     Timecard editable input.
     Internally value stored as {city: "Moscow", street: "Lenina", building: "15"}

     @class timecard
     @extends abstractinput
     @final
     @example
     <a href="#" id="timecard" data-type="timecard" data-pk="1">awesome</a>
     <script>
     $('.timecardEditable').editable({
        type: 'timecard',
        showbuttons: 'bottom',
            value: {
                time: "Napier",
                type: "nz"
            },
            sourceTimecard: [
                {value: "af", text: "Afghanistan"},
                ...
                {value: "zw", text: "Zimbabwe"}
            ]
     });
     </script>
     **/
    (function ($) {
        "use strict";

        var Timecard = function (options) {
            this.sourceTypeData = options.sourceType;
            this.sourceTimeData = options.sourceTime;
            this.init('timecard', options, Timecard.defaults);
        };

        //inherit from Abstract input
        $.fn.editableutils.inherit(Timecard, $.fn.editabletypes.abstractinput);

        $.extend(Timecard.prototype, {

            render: function () {
                this.$timeList = this.$tpl.find('select[name="time"]');
                this.$typeList = this.$tpl.find('select[name="type"]');

                this.$timeList.empty();
                this.$typeList.empty();

                var fillItems = function ($el, data, fillType) {
                    if ($.isArray(data)) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].children) {
                                $el.append(fillItems($('<optgroup>', {
                                    label: data[i].text
                                }), data[i].children));
                            } else {
                                $el.append($('<option>', {
                                    value: data[i].value
                                }).text( fillType == 'type' ? data[i].codeNum + ' ' + data[i].code : data[i].text));
                            }
                        }
                    }
                    return $el;
                };
                fillItems(this.$timeList, this.sourceTimeData, 'time');
                fillItems(this.$typeList, this.sourceTypeData, 'type');
            },

            value2html: function (value, element) {
                //console.log('value2html', value, element);
                if (!value) {
                    $(element).empty();
                    return;
                }
                var timeText = value.tTime;
                var typeText = value.tType;
                $.each(this.sourceTimeData, function (i, v) {
                    if (v.value == timeText) {
                        timeText = v.text.toUpperCase();
                    }
                });
                $.each(this.sourceTypeData, function (i, v) {
                    if (v.value == typeText) {
                        typeText = v.text.toUpperCase();
                    }
                });
                //var html = $('<div>').text(timeText).html() + ' / ' + $('<div>').text(typeText).html();
                var html = $('<div>').text(timeText).html();
                $(element).html(html);
                //console.log('value2html2');
            },

            html2value: function (html) {
                var element = this.options.scope;
                var num = $(element).attr('data-num');
                var id = $(element).attr('data-id');
                var val = $(element).attr('data-val');
                var valtype = $(element).attr('data-valtype');
                //console.log('html2value', html, id, num, val);
                //this.$timeList.val(value.tTime);
                //this.$typeList.val(value.tType);
                return {tTime:val, tType:valtype};
            },

            value2str: function (value) {
                //console.log('value2str', value);
                var str = '';
                if (value) {
                    for (var k in value) {
                        str = str + k + ':' + value[k] + ';';
                    }
                }
                return str;
            },

            str2value: function (str) {
                //console.log('str2value', str);
                return str;
            },

            value2input: function (value) {
                //console.log('value2input', value, this.$timeList, this.$typeList);
                if (!value) {
                    return;
                }

                this.$timeList.val(value.tTime);
                this.$typeList.val(value.tType);
            },

            input2value: function () {
                //console.log('input2value');
                return {
                    tTime: this.$timeList.val(),
                    tType: this.$typeList.val()
                };
            },

            activate: function () {
                //console.log('activate');
                this.$timeList.filter('[name="time"]').focus();
            },

            autosubmit: function () {
                return false;
            }
        });

        Timecard.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
            tpl: '<form id="updateStaffForm" novalidate="novalidate">\
             <div class="form-group">\
             <label class="control-label">Время</label><br/>\
             <select name="time" class="form-control" style="width: 100px;"></select></div>\
             <div class="form-group">\
             <label class="control-label">Код</label><br/>\
             <select name="type" class="form-control" style="width: 100px;"></select></div><br/></form>',
            inputclass: '',
            showbuttons: 'bottom', //WHY ISN'T THIS WORKING!!!
            sourceType: [],
            sourceTime: []
        });

        $.fn.editabletypes.timecard = Timecard;

    }(window.jQuery));
}

var timecardSource = [
    //overtimes
    { value:"12:00", text:"12:00"},
    { value:"11:30", text:"11:30"},
    { value:"11:00", text:"11:00"},
    { value:"10:30", text:"10:30"},
    { value:"10:00", text:"10:00"},
    { value:"09:30", text:"09:30"},
    { value:"09:00", text:"09:00"},
    { value:"08:30", text:"08:30"},
    //quick hours
    { value:"08:00", text:"08:00"},
    { value:"07:30", text:"07:30"},
    { value:"07:00", text:"07:00"},
    { value:"06:30", text:"06:30"},
    { value:"06:00", text:"06:00"},
    { value:"05:30", text:"05:30"},
    { value:"05:00", text:"05:00"},
    { value:"04:30", text:"04:30"},
    { value:"04:00", text:"04:00"},
    { value:"03:30", text:"03:30"},
    { value:"03:00", text:"03:00"},
    { value:"02:30", text:"02:30"},
    { value:"02:00", text:"02:00"},
    { value:"01:30", text:"01:30"},
    { value:"01:00", text:"01:00"},
    { value:"00:30", text:"00:30"},
    { value:"00:00", text:"00:00"},
    //other times
    { value:"07:59", text:"07:59"},
    { value:"07:58", text:"07:58"},
    { value:"07:57", text:"07:57"},
    { value:"07:56", text:"07:56"},
    { value:"07:55", text:"07:55"},
    { value:"07:54", text:"07:54"},
    { value:"07:53", text:"07:53"},
    { value:"07:52", text:"07:52"},
    { value:"07:51", text:"07:51"},
    { value:"07:50", text:"07:50"},
    { value:"07:49", text:"07:49"},
    { value:"07:48", text:"07:48"},
    { value:"07:47", text:"07:47"},
    { value:"07:46", text:"07:46"},
    { value:"07:45", text:"07:45"},
    { value:"07:44", text:"07:44"},
    { value:"07:43", text:"07:43"},
    { value:"07:42", text:"07:42"},
    { value:"07:41", text:"07:41"},
    { value:"07:40", text:"07:40"},
    { value:"07:39", text:"07:39"},
    { value:"07:38", text:"07:38"},
    { value:"07:37", text:"07:37"},
    { value:"07:36", text:"07:36"},
    { value:"07:35", text:"07:35"},
    { value:"07:34", text:"07:34"},
    { value:"07:33", text:"07:33"},
    { value:"07:32", text:"07:32"},
    { value:"07:31", text:"07:31"},
    { value:"07:30", text:"07:30"},
    { value:"07:29", text:"07:29"},
    { value:"07:28", text:"07:28"},
    { value:"07:27", text:"07:27"},
    { value:"07:26", text:"07:26"},
    { value:"07:25", text:"07:25"},
    { value:"07:24", text:"07:24"},
    { value:"07:23", text:"07:23"},
    { value:"07:22", text:"07:22"},
    { value:"07:21", text:"07:21"},
    { value:"07:20", text:"07:20"},
    { value:"07:19", text:"07:19"},
    { value:"07:18", text:"07:18"},
    { value:"07:17", text:"07:17"},
    { value:"07:16", text:"07:16"},
    { value:"07:15", text:"07:15"},
    { value:"07:14", text:"07:14"},
    { value:"07:13", text:"07:13"},
    { value:"07:12", text:"07:12"},
    { value:"07:11", text:"07:11"},
    { value:"07:10", text:"07:10"},
    { value:"07:09", text:"07:09"},
    { value:"07:08", text:"07:08"},
    { value:"07:07", text:"07:07"},
    { value:"07:06", text:"07:06"},
    { value:"07:05", text:"07:05"},
    { value:"07:04", text:"07:04"},
    { value:"07:03", text:"07:03"},
    { value:"07:02", text:"07:02"},
    { value:"07:01", text:"07:01"},
    { value:"07:00", text:"07:00"},
    { value:"06:59", text:"06:59"},
    { value:"06:58", text:"06:58"},
    { value:"06:57", text:"06:57"},
    { value:"06:56", text:"06:56"},
    { value:"06:55", text:"06:55"},
    { value:"06:54", text:"06:54"},
    { value:"06:53", text:"06:53"},
    { value:"06:52", text:"06:52"},
    { value:"06:51", text:"06:51"},
    { value:"06:50", text:"06:50"},
    { value:"06:49", text:"06:49"},
    { value:"06:48", text:"06:48"},
    { value:"06:47", text:"06:47"},
    { value:"06:46", text:"06:46"},
    { value:"06:45", text:"06:45"},
    { value:"06:44", text:"06:44"},
    { value:"06:43", text:"06:43"},
    { value:"06:42", text:"06:42"},
    { value:"06:41", text:"06:41"},
    { value:"06:40", text:"06:40"},
    { value:"06:39", text:"06:39"},
    { value:"06:38", text:"06:38"},
    { value:"06:37", text:"06:37"},
    { value:"06:36", text:"06:36"},
    { value:"06:35", text:"06:35"},
    { value:"06:34", text:"06:34"},
    { value:"06:33", text:"06:33"},
    { value:"06:32", text:"06:32"},
    { value:"06:31", text:"06:31"},
    { value:"06:30", text:"06:30"},
    { value:"06:29", text:"06:29"},
    { value:"06:28", text:"06:28"},
    { value:"06:27", text:"06:27"},
    { value:"06:26", text:"06:26"},
    { value:"06:25", text:"06:25"},
    { value:"06:24", text:"06:24"},
    { value:"06:23", text:"06:23"},
    { value:"06:22", text:"06:22"},
    { value:"06:21", text:"06:21"},
    { value:"06:20", text:"06:20"},
    { value:"06:19", text:"06:19"},
    { value:"06:18", text:"06:18"},
    { value:"06:17", text:"06:17"},
    { value:"06:16", text:"06:16"},
    { value:"06:15", text:"06:15"},
    { value:"06:14", text:"06:14"},
    { value:"06:13", text:"06:13"},
    { value:"06:12", text:"06:12"},
    { value:"06:11", text:"06:11"},
    { value:"06:10", text:"06:10"},
    { value:"06:09", text:"06:09"},
    { value:"06:08", text:"06:08"},
    { value:"06:07", text:"06:07"},
    { value:"06:06", text:"06:06"},
    { value:"06:05", text:"06:05"},
    { value:"06:04", text:"06:04"},
    { value:"06:03", text:"06:03"},
    { value:"06:02", text:"06:02"},
    { value:"06:01", text:"06:01"},
    { value:"06:00", text:"06:00"},
    { value:"05:59", text:"05:59"},
    { value:"05:58", text:"05:58"},
    { value:"05:57", text:"05:57"},
    { value:"05:56", text:"05:56"},
    { value:"05:55", text:"05:55"},
    { value:"05:54", text:"05:54"},
    { value:"05:53", text:"05:53"},
    { value:"05:52", text:"05:52"},
    { value:"05:51", text:"05:51"},
    { value:"05:50", text:"05:50"},
    { value:"05:49", text:"05:49"},
    { value:"05:48", text:"05:48"},
    { value:"05:47", text:"05:47"},
    { value:"05:46", text:"05:46"},
    { value:"05:45", text:"05:45"},
    { value:"05:44", text:"05:44"},
    { value:"05:43", text:"05:43"},
    { value:"05:42", text:"05:42"},
    { value:"05:41", text:"05:41"},
    { value:"05:40", text:"05:40"},
    { value:"05:39", text:"05:39"},
    { value:"05:38", text:"05:38"},
    { value:"05:37", text:"05:37"},
    { value:"05:36", text:"05:36"},
    { value:"05:35", text:"05:35"},
    { value:"05:34", text:"05:34"},
    { value:"05:33", text:"05:33"},
    { value:"05:32", text:"05:32"},
    { value:"05:31", text:"05:31"},
    { value:"05:30", text:"05:30"},
    { value:"05:29", text:"05:29"},
    { value:"05:28", text:"05:28"},
    { value:"05:27", text:"05:27"},
    { value:"05:26", text:"05:26"},
    { value:"05:25", text:"05:25"},
    { value:"05:24", text:"05:24"},
    { value:"05:23", text:"05:23"},
    { value:"05:22", text:"05:22"},
    { value:"05:21", text:"05:21"},
    { value:"05:20", text:"05:20"},
    { value:"05:19", text:"05:19"},
    { value:"05:18", text:"05:18"},
    { value:"05:17", text:"05:17"},
    { value:"05:16", text:"05:16"},
    { value:"05:15", text:"05:15"},
    { value:"05:14", text:"05:14"},
    { value:"05:13", text:"05:13"},
    { value:"05:12", text:"05:12"},
    { value:"05:11", text:"05:11"},
    { value:"05:10", text:"05:10"},
    { value:"05:09", text:"05:09"},
    { value:"05:08", text:"05:08"},
    { value:"05:07", text:"05:07"},
    { value:"05:06", text:"05:06"},
    { value:"05:05", text:"05:05"},
    { value:"05:04", text:"05:04"},
    { value:"05:03", text:"05:03"},
    { value:"05:02", text:"05:02"},
    { value:"05:01", text:"05:01"},
    { value:"05:00", text:"05:00"},
    { value:"04:59", text:"04:59"},
    { value:"04:58", text:"04:58"},
    { value:"04:57", text:"04:57"},
    { value:"04:56", text:"04:56"},
    { value:"04:55", text:"04:55"},
    { value:"04:54", text:"04:54"},
    { value:"04:53", text:"04:53"},
    { value:"04:52", text:"04:52"},
    { value:"04:51", text:"04:51"},
    { value:"04:50", text:"04:50"},
    { value:"04:49", text:"04:49"},
    { value:"04:48", text:"04:48"},
    { value:"04:47", text:"04:47"},
    { value:"04:46", text:"04:46"},
    { value:"04:45", text:"04:45"},
    { value:"04:44", text:"04:44"},
    { value:"04:43", text:"04:43"},
    { value:"04:42", text:"04:42"},
    { value:"04:41", text:"04:41"},
    { value:"04:40", text:"04:40"},
    { value:"04:39", text:"04:39"},
    { value:"04:38", text:"04:38"},
    { value:"04:37", text:"04:37"},
    { value:"04:36", text:"04:36"},
    { value:"04:35", text:"04:35"},
    { value:"04:34", text:"04:34"},
    { value:"04:33", text:"04:33"},
    { value:"04:32", text:"04:32"},
    { value:"04:31", text:"04:31"},
    { value:"04:30", text:"04:30"},
    { value:"04:29", text:"04:29"},
    { value:"04:28", text:"04:28"},
    { value:"04:27", text:"04:27"},
    { value:"04:26", text:"04:26"},
    { value:"04:25", text:"04:25"},
    { value:"04:24", text:"04:24"},
    { value:"04:23", text:"04:23"},
    { value:"04:22", text:"04:22"},
    { value:"04:21", text:"04:21"},
    { value:"04:20", text:"04:20"},
    { value:"04:19", text:"04:19"},
    { value:"04:18", text:"04:18"},
    { value:"04:17", text:"04:17"},
    { value:"04:16", text:"04:16"},
    { value:"04:15", text:"04:15"},
    { value:"04:14", text:"04:14"},
    { value:"04:13", text:"04:13"},
    { value:"04:12", text:"04:12"},
    { value:"04:11", text:"04:11"},
    { value:"04:10", text:"04:10"},
    { value:"04:09", text:"04:09"},
    { value:"04:08", text:"04:08"},
    { value:"04:07", text:"04:07"},
    { value:"04:06", text:"04:06"},
    { value:"04:05", text:"04:05"},
    { value:"04:04", text:"04:04"},
    { value:"04:03", text:"04:03"},
    { value:"04:02", text:"04:02"},
    { value:"04:01", text:"04:01"},
    { value:"04:00", text:"04:00"},
    { value:"03:59", text:"03:59"},
    { value:"03:58", text:"03:58"},
    { value:"03:57", text:"03:57"},
    { value:"03:56", text:"03:56"},
    { value:"03:55", text:"03:55"},
    { value:"03:54", text:"03:54"},
    { value:"03:53", text:"03:53"},
    { value:"03:52", text:"03:52"},
    { value:"03:51", text:"03:51"},
    { value:"03:50", text:"03:50"},
    { value:"03:49", text:"03:49"},
    { value:"03:48", text:"03:48"},
    { value:"03:47", text:"03:47"},
    { value:"03:46", text:"03:46"},
    { value:"03:45", text:"03:45"},
    { value:"03:44", text:"03:44"},
    { value:"03:43", text:"03:43"},
    { value:"03:42", text:"03:42"},
    { value:"03:41", text:"03:41"},
    { value:"03:40", text:"03:40"},
    { value:"03:39", text:"03:39"},
    { value:"03:38", text:"03:38"},
    { value:"03:37", text:"03:37"},
    { value:"03:36", text:"03:36"},
    { value:"03:35", text:"03:35"},
    { value:"03:34", text:"03:34"},
    { value:"03:33", text:"03:33"},
    { value:"03:32", text:"03:32"},
    { value:"03:31", text:"03:31"},
    { value:"03:30", text:"03:30"},
    { value:"03:29", text:"03:29"},
    { value:"03:28", text:"03:28"},
    { value:"03:27", text:"03:27"},
    { value:"03:26", text:"03:26"},
    { value:"03:25", text:"03:25"},
    { value:"03:24", text:"03:24"},
    { value:"03:23", text:"03:23"},
    { value:"03:22", text:"03:22"},
    { value:"03:21", text:"03:21"},
    { value:"03:20", text:"03:20"},
    { value:"03:19", text:"03:19"},
    { value:"03:18", text:"03:18"},
    { value:"03:17", text:"03:17"},
    { value:"03:16", text:"03:16"},
    { value:"03:15", text:"03:15"},
    { value:"03:14", text:"03:14"},
    { value:"03:13", text:"03:13"},
    { value:"03:12", text:"03:12"},
    { value:"03:11", text:"03:11"},
    { value:"03:10", text:"03:10"},
    { value:"03:09", text:"03:09"},
    { value:"03:08", text:"03:08"},
    { value:"03:07", text:"03:07"},
    { value:"03:06", text:"03:06"},
    { value:"03:05", text:"03:05"},
    { value:"03:04", text:"03:04"},
    { value:"03:03", text:"03:03"},
    { value:"03:02", text:"03:02"},
    { value:"03:01", text:"03:01"},
    { value:"03:00", text:"03:00"},
    { value:"02:59", text:"02:59"},
    { value:"02:58", text:"02:58"},
    { value:"02:57", text:"02:57"},
    { value:"02:56", text:"02:56"},
    { value:"02:55", text:"02:55"},
    { value:"02:54", text:"02:54"},
    { value:"02:53", text:"02:53"},
    { value:"02:52", text:"02:52"},
    { value:"02:51", text:"02:51"},
    { value:"02:50", text:"02:50"},
    { value:"02:49", text:"02:49"},
    { value:"02:48", text:"02:48"},
    { value:"02:47", text:"02:47"},
    { value:"02:46", text:"02:46"},
    { value:"02:45", text:"02:45"},
    { value:"02:44", text:"02:44"},
    { value:"02:43", text:"02:43"},
    { value:"02:42", text:"02:42"},
    { value:"02:41", text:"02:41"},
    { value:"02:40", text:"02:40"},
    { value:"02:39", text:"02:39"},
    { value:"02:38", text:"02:38"},
    { value:"02:37", text:"02:37"},
    { value:"02:36", text:"02:36"},
    { value:"02:35", text:"02:35"},
    { value:"02:34", text:"02:34"},
    { value:"02:33", text:"02:33"},
    { value:"02:32", text:"02:32"},
    { value:"02:31", text:"02:31"},
    { value:"02:30", text:"02:30"},
    { value:"02:29", text:"02:29"},
    { value:"02:28", text:"02:28"},
    { value:"02:27", text:"02:27"},
    { value:"02:26", text:"02:26"},
    { value:"02:25", text:"02:25"},
    { value:"02:24", text:"02:24"},
    { value:"02:23", text:"02:23"},
    { value:"02:22", text:"02:22"},
    { value:"02:21", text:"02:21"},
    { value:"02:20", text:"02:20"},
    { value:"02:19", text:"02:19"},
    { value:"02:18", text:"02:18"},
    { value:"02:17", text:"02:17"},
    { value:"02:16", text:"02:16"},
    { value:"02:15", text:"02:15"},
    { value:"02:14", text:"02:14"},
    { value:"02:13", text:"02:13"},
    { value:"02:12", text:"02:12"},
    { value:"02:11", text:"02:11"},
    { value:"02:10", text:"02:10"},
    { value:"02:09", text:"02:09"},
    { value:"02:08", text:"02:08"},
    { value:"02:07", text:"02:07"},
    { value:"02:06", text:"02:06"},
    { value:"02:05", text:"02:05"},
    { value:"02:04", text:"02:04"},
    { value:"02:03", text:"02:03"},
    { value:"02:02", text:"02:02"},
    { value:"02:01", text:"02:01"},
    { value:"02:00", text:"02:00"},
    { value:"01:59", text:"01:59"},
    { value:"01:58", text:"01:58"},
    { value:"01:57", text:"01:57"},
    { value:"01:56", text:"01:56"},
    { value:"01:55", text:"01:55"},
    { value:"01:54", text:"01:54"},
    { value:"01:53", text:"01:53"},
    { value:"01:52", text:"01:52"},
    { value:"01:51", text:"01:51"},
    { value:"01:50", text:"01:50"},
    { value:"01:49", text:"01:49"},
    { value:"01:48", text:"01:48"},
    { value:"01:47", text:"01:47"},
    { value:"01:46", text:"01:46"},
    { value:"01:45", text:"01:45"},
    { value:"01:44", text:"01:44"},
    { value:"01:43", text:"01:43"},
    { value:"01:42", text:"01:42"},
    { value:"01:41", text:"01:41"},
    { value:"01:40", text:"01:40"},
    { value:"01:39", text:"01:39"},
    { value:"01:38", text:"01:38"},
    { value:"01:37", text:"01:37"},
    { value:"01:36", text:"01:36"},
    { value:"01:35", text:"01:35"},
    { value:"01:34", text:"01:34"},
    { value:"01:33", text:"01:33"},
    { value:"01:32", text:"01:32"},
    { value:"01:31", text:"01:31"},
    { value:"01:30", text:"01:30"},
    { value:"01:29", text:"01:29"},
    { value:"01:28", text:"01:28"},
    { value:"01:27", text:"01:27"},
    { value:"01:26", text:"01:26"},
    { value:"01:25", text:"01:25"},
    { value:"01:24", text:"01:24"},
    { value:"01:23", text:"01:23"},
    { value:"01:22", text:"01:22"},
    { value:"01:21", text:"01:21"},
    { value:"01:20", text:"01:20"},
    { value:"01:19", text:"01:19"},
    { value:"01:18", text:"01:18"},
    { value:"01:17", text:"01:17"},
    { value:"01:16", text:"01:16"},
    { value:"01:15", text:"01:15"},
    { value:"01:14", text:"01:14"},
    { value:"01:13", text:"01:13"},
    { value:"01:12", text:"01:12"},
    { value:"01:11", text:"01:11"},
    { value:"01:10", text:"01:10"},
    { value:"01:09", text:"01:09"},
    { value:"01:08", text:"01:08"},
    { value:"01:07", text:"01:07"},
    { value:"01:06", text:"01:06"},
    { value:"01:05", text:"01:05"},
    { value:"01:04", text:"01:04"},
    { value:"01:03", text:"01:03"},
    { value:"01:02", text:"01:02"},
    { value:"01:01", text:"01:01"},
    { value:"01:00", text:"01:00"},
    { value:"00:59", text:"00:59"},
    { value:"00:58", text:"00:58"},
    { value:"00:57", text:"00:57"},
    { value:"00:56", text:"00:56"},
    { value:"00:55", text:"00:55"},
    { value:"00:54", text:"00:54"},
    { value:"00:53", text:"00:53"},
    { value:"00:52", text:"00:52"},
    { value:"00:51", text:"00:51"},
    { value:"00:50", text:"00:50"},
    { value:"00:49", text:"00:49"},
    { value:"00:48", text:"00:48"},
    { value:"00:47", text:"00:47"},
    { value:"00:46", text:"00:46"},
    { value:"00:45", text:"00:45"},
    { value:"00:44", text:"00:44"},
    { value:"00:43", text:"00:43"},
    { value:"00:42", text:"00:42"},
    { value:"00:41", text:"00:41"},
    { value:"00:40", text:"00:40"},
    { value:"00:39", text:"00:39"},
    { value:"00:38", text:"00:38"},
    { value:"00:37", text:"00:37"},
    { value:"00:36", text:"00:36"},
    { value:"00:35", text:"00:35"},
    { value:"00:34", text:"00:34"},
    { value:"00:33", text:"00:33"},
    { value:"00:32", text:"00:32"},
    { value:"00:31", text:"00:31"},
    { value:"00:30", text:"00:30"},
    { value:"00:29", text:"00:29"},
    { value:"00:28", text:"00:28"},
    { value:"00:27", text:"00:27"},
    { value:"00:26", text:"00:26"},
    { value:"00:25", text:"00:25"},
    { value:"00:24", text:"00:24"},
    { value:"00:23", text:"00:23"},
    { value:"00:22", text:"00:22"},
    { value:"00:21", text:"00:21"},
    { value:"00:20", text:"00:20"},
    { value:"00:19", text:"00:19"},
    { value:"00:18", text:"00:18"},
    { value:"00:17", text:"00:17"},
    { value:"00:16", text:"00:16"},
    { value:"00:15", text:"00:15"},
    { value:"00:14", text:"00:14"},
    { value:"00:13", text:"00:13"},
    { value:"00:12", text:"00:12"},
    { value:"00:11", text:"00:11"},
    { value:"00:10", text:"00:10"},
    { value:"00:09", text:"00:09"},
    { value:"00:08", text:"00:08"},
    { value:"00:07", text:"00:07"},
    { value:"00:06", text:"00:06"},
    { value:"00:05", text:"00:05"},
    { value:"00:04", text:"00:04"},
    { value:"00:03", text:"00:03"},
    { value:"00:02", text:"00:02"},
    { value:"00:01", text:"00:01"},
    //overtimes
    { value:"12:00", text:"12:00"},
    { value:"11:30", text:"11:30"},
    { value:"11:00", text:"11:00"},
    { value:"10:30", text:"10:30"},
    { value:"10:00", text:"10:00"},
    { value:"09:30", text:"09:30"},
    { value:"09:00", text:"09:00"},
    { value:"08:30", text:"08:30"},
    //quick hours two
    { value:"08:00", text:"08:00"},
    { value:"07:30", text:"07:30"},
    { value:"07:00", text:"07:00"},
    { value:"06:30", text:"06:30"},
    { value:"06:00", text:"06:00"},
    { value:"05:30", text:"05:30"},
    { value:"05:00", text:"05:00"},
    { value:"04:30", text:"04:30"},
    { value:"04:00", text:"04:00"},
    { value:"03:30", text:"03:30"},
    { value:"03:00", text:"03:00"},
    { value:"02:30", text:"02:30"},
    { value:"02:00", text:"02:00"},
    { value:"01:30", text:"01:30"},
    { value:"01:00", text:"01:00"},
    { value:"00:30", text:"00:30"},
    { value:"00:00", text:"00:00"}
];