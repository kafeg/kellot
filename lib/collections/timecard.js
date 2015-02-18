Timecard = new Mongo.Collection('timecard');

//SimpleSchema.debug = true;

if (Meteor.isServer) {
    Meteor.methods({
        timecardGenerator: function (year, monthId) {
            check(this.userId, String);
            check(year, Number);
            check(monthId, Number);
            var company = Company.findOne({userId: this.userId}); //todo associated with company user!
            //todo check if company object exists
            var companyId = company._id;

            var staffs = Staff.find({companyId: companyId}, {fields: {_id: 1}}).fetch();

            var staffIds = [];

            var docTemplate = {staffId:0, year:year, month:monthId, 
                d1:'00:00', d2:'00:00', d3:'00:00', d4:'00:00', d5:'00:00', d6:'00:00', d7:'00:00', d8:'00:00', d9:'00:00', d10:'00:00', d11:'00:00',
                d12:'00:00', d13:'00:00', d14:'00:00', d15:'00:00', d16:'00:00', d17:'00:00', d18:'00:00', d19:'00:00', d20:'00:00',  d21:'00:00',  d22:'00:00',  d23:'00:00',  d24:'00:00',  d25:'00:00',
                d26:'00:00',  d27:'00:00',  d28:'00:00',  d29:'00:00',  d30:'00:00',  d31:'00:00',
                dt1:'0', dt2:'0', dt3:'0', dt4:'0', dt5:'0', dt6:'0', dt7:'0', dt8:'0', dt9:'0', dt10:'0', dt11:'0',
                dt12:'0', dt13:'0', dt14:'0', dt15:'0', dt16:'0', dt17:'0', dt18:'0', dt19:'0', dt20:'0',  dt21:'0',  dt22:'0',  dt23:'0',  dt24:'0',  dt25:'0',
                dt26:'0',  dt27:'0',  dt28:'0',  dt29:'0',  dt30:'0',  dt31:'0',
                du1:false, du2:false, du3:false, du4:false, du5:false, du6:false, du7:false, du8:false, du9:false, du10:false, du11:false,
                du12:false, du13:false, du14:false, du15:false, du16:false, du17:false, du18:false, du19:false, du20:false,  du21:false,  du22:false,  du23:false,  du24:false,  du25:false,
                du26:false,  du27:false,  du28:false,  du29:false,  du30:false,  du31:false,
                hospitalDays:0, workHoursAndMinuts:0, workHours:0, workHoursAndMinutsAtHolidays:0, workHoursAtHolidays:0
            };
            var docs = [];

            staffs.forEach(function outputItem(item, i, arr) {
                    var timecardDoc = Timecard.findOne({staffId:item._id}, {fields: {_id: 1}});
                    if (timecardDoc == undefined) {
                        var newDoc = _.clone(docTemplate);
                        newDoc.staffId = item._id;
                        docs.push(newDoc);
                        //console.log('create new timecard document', item._id);
                    }
                    //staffIds.push(item._id);
                }
            );

            _.each(docs, function(doc) {
                Timecard.insert(doc);
            });
            return true;
        },
        timecardUpdater: function (id, dayNum, timeValue, typeValue) {
            check(this.userId, String);
            check(id, String);
            check(dayNum, String);
            check(timeValue, String);
            check(typeValue, String);
            var modiferNameTime = 'd'+dayNum;
            var modiferNameType = 'dt'+dayNum;
            //console.log('timecardUpdater called', id, dayNum, timeValue, typeValue);

            var updater = {};

            switch (parseInt(dayNum)) {
                case 1: updater = {d1:timeValue, dt1:typeValue, du1: true}; break;
                case 2: updater = {d2:timeValue, dt2:typeValue, du2: true}; break;
                case 3: updater = {d3:timeValue, dt3:typeValue, du3: true}; break;
                case 4: updater = {d4:timeValue, dt4:typeValue, du4: true}; break;
                case 5: updater = {d5:timeValue, dt5:typeValue, du5: true}; break;
                case 6: updater = {d6:timeValue, dt6:typeValue, du6: true}; break;
                case 7: updater = {d7:timeValue, dt7:typeValue, du7: true}; break;
                case 8: updater = {d8:timeValue, dt8:typeValue, du8: true}; break;
                case 9: updater = {d9:timeValue, dt9:typeValue, du9: true}; break;
                case 10: updater = {d10:timeValue, dt10:typeValue, du10: true}; break;
                case 11: updater = {d11:timeValue, dt11:typeValue, du11: true}; break;
                case 12: updater = {d12:timeValue, dt12:typeValue, du12: true}; break;
                case 13: updater = {d13:timeValue, dt13:typeValue, du13: true}; break;
                case 14: updater = {d14:timeValue, dt14:typeValue, du14: true}; break;
                case 15: updater = {d15:timeValue, dt15:typeValue, du15: true}; break;
                case 16: updater = {d16:timeValue, dt16:typeValue, du16: true}; break;
                case 17: updater = {d17:timeValue, dt17:typeValue, du17: true}; break;
                case 18: updater = {d18:timeValue, dt18:typeValue, du18: true}; break;
                case 19: updater = {d19:timeValue, dt19:typeValue, du19: true}; break;
                case 20: updater = {d20:timeValue, dt20:typeValue, du20: true}; break;
                case 21: updater = {d21:timeValue, dt21:typeValue, du21: true}; break;
                case 22: updater = {d22:timeValue, dt22:typeValue, du22: true}; break;
                case 23: updater = {d23:timeValue, dt23:typeValue, du23: true}; break;
                case 24: updater = {d24:timeValue, dt24:typeValue, du24: true}; break;
                case 25: updater = {d25:timeValue, dt25:typeValue, du25: true}; break;
                case 26: updater = {d26:timeValue, dt26:typeValue, du26: true}; break;
                case 27: updater = {d27:timeValue, dt27:typeValue, du27: true}; break;
                case 28: updater = {d28:timeValue, dt28:typeValue, du28: true}; break;
                case 29: updater = {d29:timeValue, dt29:typeValue, du29: true}; break;
                case 30: updater = {d30:timeValue, dt30:typeValue, du30: true}; break;
                case 31: updater = {d31:timeValue, dt31:typeValue, du31: true}; break;
                default:
                    break;
            }
            //console.log('updater', updater);

            Timecard.update({_id:id}, {$set: updater}, {}, function(error, count) {
                //console.log('update error', error, count);
            });
        }
    });
}

Timecard.helpers({
    staff: function() {
        return Staff.findOne(this.staffId);
    }
});

function timestrToSec(timestr) {
    //console.log(timestr);
    var parts = timestr.split(":");
    return (parts[0] * 3600) +
        (parts[1] * 60);// seconds not need + (+parts[2]);
}

function pad(num) {
    if(num < 10) {
        return "0" + num;
    } else {
        return "" + num;
    }
}

function formatTime(seconds) {

    //var date = new Date(seconds*1000);
    //console.log(date.getHours(), date.getMinutes());

    //todo check alghoritm!
    var formattedTime = [pad(Math.floor(seconds/3600)),
        pad(Math.floor(seconds/60)%60)// seconds not need, pad(seconds%60),
    ].join(":");

    //console.log(formattedTime, seconds, seconds/3600, Math.round(seconds/3600), Math.round(seconds/3600)%60, pad(Math.round(seconds/3600)%60), pad(Math.round(seconds/60)%60));

    return formattedTime;
}
//find spec symbol on server in 'timecardSpecCodesSource' variable
function fSWT(value) {
    if (value == '0') {
        return '-';
    } else {
        return findSpecSymbolSrv(value).workType;
    }
}

const MONTH_HALF_FULL = 0;
const MONTH_HALF_FIRST = 1;
const MONTH_HALF_SECOND = 2;
const MONTH_HALF_FULL_OVERTME = 3;

function getMonthHalfCount(newDoc, thisDoc, halfNum) {
    var doc = Timecard.findOne({_id:thisDoc.docId});
    var newObjSet = newDoc['$set'];
    var firstKey = Object.keys(newObjSet)[1];
    var firstKeyNum = firstKey.replace(/\D/g,'');
    var secondKey = Object.keys(newObjSet)[1];
    var secondKeyNum = secondKey.replace(/\D/g,'');
    var newObjVal = newObjSet[secondKey];
    var newObjType = fSWT(newObjVal);

    if ((halfNum == MONTH_HALF_FIRST) && (secondKeyNum > 15)) {
        newObjType = '0';
    }
    if ((halfNum == MONTH_HALF_SECOND) && (secondKeyNum < 16)) {
        newObjType = '0';
    }

    var counter = 0;
    if (newObjType == 'work') {
        counter++;
    }

    var iStart = 1, iEnd = 15;
    if (halfNum == MONTH_HALF_SECOND) {
        iStart = 16;
        iEnd = 31;
    }

    if ((halfNum == MONTH_HALF_FULL) || (halfNum == MONTH_HALF_FULL_OVERTME)) {
        iStart = 1;
        iEnd = 31;
    }

    for (var i = iStart; i <= iEnd; i++) {
        if (doc['dt' + i] != '0') {
            if (i != secondKeyNum) {
                var objType = fSWT(doc['dt' + i]);
                if (objType == 'work') {
                    counter++;
                }
            }
        }
    }
    return counter.toString();
}

function getMonthHalf(newDoc, thisDoc, halfNum) {
    var doc = Timecard.findOne({_id:thisDoc.docId});
    var newObjSet = newDoc['$set'];
    var firstKey = Object.keys(newObjSet)[0];
    var firstKeyNum = firstKey.replace(/\D/g,'');
    var secondKey = Object.keys(newObjSet)[1];
    var secondKeyNum = secondKey.replace(/\D/g,'');
    var newObjVal = newObjSet[firstKey];
    var newObjSpecVal = newObjSet[secondKey];

    if ((halfNum == MONTH_HALF_FIRST) && (firstKeyNum > 15)) {
        newObjVal = '00:00';
    }
    if ((halfNum == MONTH_HALF_SECOND) && (firstKeyNum < 16)) {
        newObjVal = '00:00';
    }

    var newObjType = fSWT(newObjSpecVal);

    if ((halfNum == MONTH_HALF_FIRST) && (secondKeyNum > 15)) {
        newObjType = '0';
    }
    if ((halfNum == MONTH_HALF_SECOND) && (secondKeyNum < 16)) {
        newObjType = '0';
    }

    var allTime = 0;
    if (newObjType == 'work') {
        allTime += timestrToSec(newObjVal);
    }

    var iStart = 1, iEnd = 15;
    if (halfNum == MONTH_HALF_SECOND) {
        iStart = 16;
        iEnd = 31;
    }

    if ((halfNum == MONTH_HALF_FULL) || (halfNum == MONTH_HALF_FULL_OVERTME)) {
        iStart = 1;
        iEnd = 31;
    }

    for (var i = iStart; i <= iEnd; i++) {
        if (doc['d' + i] != '0') {
            if (i != secondKeyNum) {
                var objType = fSWT(doc['dt' + i]);
                //console.log(objType, doc['d' + i], iStart, iEnd);
                if (objType == 'work') {
                    allTime += timestrToSec(doc['d' + i]);
                }
            }
        }
    }
    var res =  formatTime(allTime);
    //console.log(res, allTime);
    return res;
}

Timecard.attachSchema(new SimpleSchema({
    staffId: {
        type: String,
        label: "Сотрудник",
        denyUpdate: true,
        optional: true
    },
    year: {
        type: Number,
        label: "Год",
        min: 2000,
        max: 2100,
        denyUpdate: true,
        optional: true
    },
    month: {
        type: Number,
        label: "Месяц",
        min: 0,
        max: 11,
        denyUpdate: true,
        optional: true
    },
    d1: {type: String, label: "Время 1"},
    d2: {type: String, label: "Время 2"},
    d3: {type: String, label: "Время 3"},
    d4: {type: String, label: "Время 4"},
    d5: {type: String, label: "Время 5"},
    d6: {type: String, label: "Время 6"},
    d7: {type: String, label: "Время 7"},
    d8: {type: String, label: "Время 8"},
    d9: {type: String, label: "Время 9"},
    d10: {type: String, label: "Время 10"},
    d11: {type: String, label: "Время 11"},
    d12: {type: String, label: "Время 12"},
    d13: {type: String, label: "Время 13"},
    d14: {type: String, label: "Время 14"},
    d15: {type: String, label: "Время 15"},
    d16: {type: String, label: "Время 16"},
    d17: {type: String, label: "Время 17"},
    d18: {type: String, label: "Время 18"},
    d19: {type: String, label: "Время 19"},
    d20: {type: String, label: "Время 20"},
    d21: {type: String, label: "Время 21"},
    d22: {type: String, label: "Время 22"},
    d23: {type: String, label: "Время 23"},
    d24: {type: String, label: "Время 24"},
    d25: {type: String, label: "Время 25"},
    d26: {type: String, label: "Время 26"},
    d27: {type: String, label: "Время 27"},
    d28: {type: String, label: "Время 28"},
    d29: {type: String, label: "Время 29"},
    d30: {type: String, label: "Время 30"},
    d31: {type: String, label: "Время 31"},
    dt1: {type: String, label: "Тип 1"},
    dt2: {type: String, label: "Тип 2"},
    dt3: {type: String, label: "Тип 3"},
    dt4: {type: String, label: "Тип 4"},
    dt5: {type: String, label: "Тип 5"},
    dt6: {type: String, label: "Тип 6"},
    dt7: {type: String, label: "Тип 7"},
    dt8: {type: String, label: "Тип 8"},
    dt9: {type: String, label: "Тип 9"},
    dt10: {type: String, label: "Тип 10"},
    dt11: {type: String, label: "Тип 11"},
    dt12: {type: String, label: "Тип 12"},
    dt13: {type: String, label: "Тип 13"},
    dt14: {type: String, label: "Тип 14"},
    dt15: {type: String, label: "Тип 15"},
    dt16: {type: String, label: "Тип 16"},
    dt17: {type: String, label: "Тип 17"},
    dt18: {type: String, label: "Тип 18"},
    dt19: {type: String, label: "Тип 19"},
    dt20: {type: String, label: "Тип 20"},
    dt21: {type: String, label: "Тип 21"},
    dt22: {type: String, label: "Тип 22"},
    dt23: {type: String, label: "Тип 23"},
    dt24: {type: String, label: "Тип 24"},
    dt25: {type: String, label: "Тип 25"},
    dt26: {type: String, label: "Тип 26"},
    dt27: {type: String, label: "Тип 27"},
    dt28: {type: String, label: "Тип 28"},
    dt29: {type: String, label: "Тип 29"},
    dt30: {type: String, label: "Тип 30"},
    dt31: {type: String, label: "Тип 31"},
    du1: {type: Boolean, label: "Обновлено 1"},
    du2: {type: Boolean, label: "Обновлено 2"},
    du3: {type: Boolean, label: "Обновлено 3"},
    du4: {type: Boolean, label: "Обновлено 4"},
    du5: {type: Boolean, label: "Обновлено 5"},
    du6: {type: Boolean, label: "Обновлено 6"},
    du7: {type: Boolean, label: "Обновлено 7"},
    du8: {type: Boolean, label: "Обновлено 8"},
    du9: {type: Boolean, label: "Обновлено 9"},
    du10: {type: Boolean, label: "Обновлено 10"},
    du11: {type: Boolean, label: "Обновлено 11"},
    du12: {type: Boolean, label: "Обновлено 12"},
    du13: {type: Boolean, label: "Обновлено 13"},
    du14: {type: Boolean, label: "Обновлено 14"},
    du15: {type: Boolean, label: "Обновлено 15"},
    du16: {type: Boolean, label: "Обновлено 16"},
    du17: {type: Boolean, label: "Обновлено 17"},
    du18: {type: Boolean, label: "Обновлено 18"},
    du19: {type: Boolean, label: "Обновлено 19"},
    du20: {type: Boolean, label: "Обновлено 20"},
    du21: {type: Boolean, label: "Обновлено 21"},
    du22: {type: Boolean, label: "Обновлено 22"},
    du23: {type: Boolean, label: "Обновлено 23"},
    du24: {type: Boolean, label: "Обновлено 24"},
    du25: {type: Boolean, label: "Обновлено 25"},
    du26: {type: Boolean, label: "Обновлено 26"},
    du27: {type: Boolean, label: "Обновлено 27"},
    du28: {type: Boolean, label: "Обновлено 28"},
    du29: {type: Boolean, label: "Обновлено 29"},
    du30: {type: Boolean, label: "Обновлено 30"},
    du31: {type: Boolean, label: "Обновлено 31"},
    monthHalf1count: {
        type: String, label: "За первую половину месяца, кол-во",
        autoValue: function (newDoc) {
            if (this.isUpdate) {
                return getMonthHalfCount(newDoc, this, MONTH_HALF_FIRST);
            }
            if (this.isInsert) {
                return '0';
            }
        }
    },
    monthHalf1: {
        type: String, label: "За первую половину месяца",
        autoValue: function (newDoc) {
            if (this.isUpdate) {
                return getMonthHalf(newDoc, this, MONTH_HALF_FIRST);
            }
            if (this.isInsert) {
                return '00:00';
            }
        }
    },
    monthHalf2count: {
        type: String, label: "За  половину месяца, кол-во",
        autoValue: function (newDoc) {
            if (this.isUpdate) {
                return getMonthHalfCount(newDoc, this, MONTH_HALF_SECOND);
            }
            if (this.isInsert) {
                return '0';
            }
        }
    },
    monthHalf2: {
        type: String, label: "За вторую половину месяца",
        autoValue: function (newDoc) {
            if (this.isUpdate) {
                return getMonthHalf(newDoc, this, MONTH_HALF_SECOND);
            }
            if (this.isInsert) {
                return '00:00';
            }
        }
    },
    workDaysCount: {
        type: String, label: "Дней за месяц, кол-во",
        autoValue: function (newDoc) {
            if (this.isUpdate) {
                return getMonthHalfCount(newDoc, this, MONTH_HALF_FULL);
            }
            if (this.isInsert) {
                return '0';
            }
        }
    },
    monthHours: {
        type: String, label: "Часов за месяц",
        autoValue: function (newDoc) {
            if (this.isUpdate) {
                return getMonthHalf(newDoc, this, MONTH_HALF_FULL);
            }
            if (this.isInsert) {
                return '00:00';
            }
        }
    },
    monthOvertimeHours: {
        type: String, label: "Часов за месяц, сверхурочные",
        autoValue: function (newDoc) {
            if (this.isUpdate) {
                return getMonthHalf(newDoc, this, MONTH_HALF_FULL_OVERTME);
            }
            if (this.isInsert) {
                return '00:00';
            }
        }
    },
    hospitalDays: {type: String, label: "Больничные дни"},
    workHoursAndMinuts: {type: String, label: "Рабочие часы и минуты"},
    workHours: {type: String, label: "Рабочие часы (десятичные минуты)"},
    workHoursAndMinutsAtHolidays: {type: String, label: "Рабочие часы и минуты в выходные"},
    workHoursAtHolidays: {type: String, label: "Рабочие часы в выходные (десятичные минуты)"},
    companyId: {
        type: String,
        autoValue: function () {
            if (this.isInsert) {
                return Company.findOne({userId: Meteor.userId()})._id;
            } else {
                this.unset();
            }
        },
        label: "Компания",
        denyUpdate: true,
        optional: true
    },
    userId: {
        type: String,
        autoValue: function () {
            if (this.isInsert) {
                return Meteor.userId();
            } else {
                this.unset();
            }
        },
        label: "Владелец",
        //denyInsert: true,
        denyUpdate: true,
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        },
        //denyInsert: true,
        denyUpdate: true,
        optional: true
    },
    // Force value to be current date (on server) upon update
    // and don't allow it to be set upon insert.
    updatedAt: {
        type: Date,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
}));

var timecardSpecCodesSource = [
    //spec codes
    //Продолжительность работы в дневное время        Я 01
    //Продолжительность работы в ночное время        	Н 02
    //Продолжительность работы в выходные и нерабочие праздничные дни        	РП 03
    //Продолжительность сверхурочной работы        	С 04
    //Продолжительность работы вахтовым методом        	ВМ 05
    //Служебная командировка        	К 06
    //Повышение квалификации с отрывом от работы        	ПК 07
    //Повышение квалификации с отрывом от работы в другой местности        	ПМ 08
    //Ежегодный основной оплачиваемый отпуск        	ОТ 09
    //Ежегодный дополнительный оплачиваемый отпуск        	ОД 10
    //Дополнительный отпуск в связи с обучением с сохранением среднего заработка работникам, совмещающим работу с обучением        	У 11
    //Сокращенная продолжительность рабочего времени для обучающихся без отрыва от производства с частичным сохранением заработной платы        	УВ 12
    //Дополнительный отпуск в связи с обучением без сохранения заработной платы        	УД 13
    //Отпуск по беременности и родам (отпуск в связи с усыновлением новорожденного ребенка)        	Р 14
    //Отпуск по уходу за ребенком до достижения им возраста трех лет        	ОЖ 15
    //Отпуск без сохранения заработной платы, предоставленный работнику по разрешению работодателя        	ДО 16
    //Отпуск без сохранения заработной платы в случаях, предусмотренных законодательством        	ОЗ 17
    //Ежегодный дополнительный отпуск без сохранения заработной платы        	ДБ 18
    //Временная нетрудоспособность (кроме случаев, предусмотренных кодом "Т") с назначением пособия согласно законодательству         	Б 	19
    //Временная нетрудоспособность без назначения пособия в случаях, предусмотренных законодательством         	Т 	20
    //Сокращенная продолжительность рабочего времени против нормальной продолжительности рабочего дня в случаях, предусмотренных законодательством         	ЛЧ 	21
    //Время вынужденного прогула в случае признания увольнения, перевода на другую работу или отстранения от работы незаконными с восстановлением на прежней работе         	ПВ 	22
    //Невыходы на время исполнения государственных или общественных обязанностей согласно законодательству         	Г 	23
    //Прогулы (отсутствие на рабочем месте без уважительных причин в течение времени, установленного законодательством)         	ПР 	24
    //Продолжительность работы в режиме неполного рабочего времени по инициативе работодателя в случаях, предусмотренных законодательством         	НС 	25
    //Выходные дни (еженедельный отпуск) и нерабочие праздничные дни         	В 	26
    //Дополнительные выходные дни (оплачиваемые)         	ОВ 	27
    //Дополнительные выходные дни (без сохранения заработной платы)         	НВ 	28
    //Забастовка (при условиях и в порядке, предусмотренных законом)         	ЗБ 	29
    //Неявки по невыясненным причинам (до выяснения обстоятельств)         	НН 	30
    //Время простоя по вине работодателя         	РП 	31
    //Время простоя по причинам, не зависящим от работодателя и работника         	НП 	32
    //Время простоя по вине работника         	ВП 	33
    //Отстранение от работы (недопущение к работе) с оплатой (пособием) в соответствии с законодательством         	НО 	34
    //Отстранение от работы (недопущение к работе) по причинам, предусмотренным законодательством, без начисления заработной платы         	НБ 	35
    //Время приостановки работы в случае задержки выплаты заработной платы         	НЗ 	36
    { value:"spec01", codeNum:"01", code: 'Я', workType: 'work', text:"Я (Продолжительность работы в дневное время)"},
    { value:"spec02", codeNum:"02", code: 'Н', workType: 'work', text:"Н (Продолжительность работы в ночное время)"},
    { value:"spec03", codeNum:"03", code: 'РП', workType: 'work', text:"РП (Продолжительность работы в выходные и нерабочие праздничные дни)"},
    { value:"spec04", codeNum:"04", code: 'С', workType: 'work', text:"С (Продолжительность сверхурочной работы)"},
    { value:"spec05", codeNum:"05", code: 'ВМ', workType: 'work', text:"ВМ (Продолжительность работы вахтовым методом)"},
    { value:"spec06", codeNum:"06", code: 'К', workType: 'work', text:"К (Служебная командировка)"},
    { value:"spec07", codeNum:"07", code: 'ПК', workType: 'relax', text:"ПК (Повышение квалификации с отрывом от работы)"},//?
    { value:"spec08", codeNum:"08", code: 'ПМ', workType: 'relax', text:"ПМ (Повышение квалификации с отрывом от работы в другой местности)"},//?
    { value:"spec09", codeNum:"09", code: 'ОТ', workType: 'relax', text:"ОТ (Ежегодный основной оплачиваемый отпуск)"},
    { value:"spec10", codeNum:"10", code: 'ОД', workType: 'relax', text:"ОД (Ежегодный дополнительный оплачиваемый отпуск)"},
    { value:"spec11", codeNum:"11", code: 'У', workType: 'relax', text:"У (Доп. отп. в связи с обуч. с сохр. сред. зараб. работ., совм. работу с обуч.)"},
    { value:"spec12", codeNum:"12", code: 'УВ', workType: 'work', text:"УВ (Сокр. прод. раб. врем. для обуч. без отрыва от произв. с част. сохр. зараб. платы)"},
    { value:"spec13", codeNum:"13", code: 'УД', workType: 'relax', text:"УД (Дополнительный отпуск в связи с обучением без сохранения заработной платы)"},
    { value:"spec14", codeNum:"14", code: 'Р', workType: 'relax', text:"Р (Отпуск по беременности и родам (отпуск в связи с усыновлением новорожденного ребенка))"},
    { value:"spec15", codeNum:"15", code: 'ОЖ', workType: 'relax', text:"ОЖ (Отпуск по уходу за ребенком до достижения им возраста трех лет)"},
    { value:"spec16", codeNum:"16", code: 'ДО', workType: 'relax', text:"ДО (Отпуск без сохр. зараб. платы, предостав. работнику по разрешению работодателя)"},
    { value:"spec17", codeNum:"17", code: 'ОЗ', workType: 'relax', text:"ОЗ (Отпуск без сохранения заработной платы в случаях, предусмотренных законодательством)"},
    { value:"spec18", codeNum:"18", code: 'ДБ', workType: 'relax', text:"ДБ (Ежегодный дополнительный отпуск без сохранения заработной платы)"},
    { value:"spec19", codeNum:"19", code: 'Б', workType: 'relax', text:"Б (Врем. нетрудоспособ. (кроме случаев, предусм. кодом \"Т\") с назнач. пособия согл. законодат.)"},
    { value:"spec20", codeNum:"20", code: 'Т', workType: 'relax', text:"Т (Врем. нетрудоспособ. без назн. пособия в случаях, предусм. законодат. )"},
    { value:"spec21", codeNum:"21", code: 'ЛЧ', workType: 'work', text:"ЛЧ (Сокр. прод. рабоч. врем. против норм. продолжит. рабоч. дня в случаях, предусм. законодат.)"},
    { value:"spec22", codeNum:"22", code: 'ПВ', workType: 'relax', text:"ПВ (Вр. вын. прог. в случ. призн. ув., пер. на др. раб. или отстр. от раб. незак. с восст. на преж. раб.)"},
    { value:"spec23", codeNum:"23", code: 'Г', workType: 'relax', text:"Г (Невых. на время исп. госуд. или обществ. обяз. согл. законодат.)"},
    { value:"spec24", codeNum:"24", code: 'ПР', workType: 'relax', text:"ПР (Прогулы (отсут. на раб. месте без уваж. причин в течение врем., устан. законодат.))"},
    { value:"spec25", codeNum:"25", code: 'НС', workType: 'work', text:"НС (Прод. раб. в реж. неполн. раб. врем. по иниц. работодат. в случ., предусм. законодат.)"},
    { value:"spec26", codeNum:"26", code: 'В', workType: 'relax', text:"В (Выходные дни (еженед. отпуск) и нерабоч. праздн. дни)"},
    { value:"spec27", codeNum:"27", code: 'ОВ', workType: 'relax', text:"ОВ (Дополнительные выходные дни (оплачиваемые))"},
    { value:"spec28", codeNum:"28", code: 'НВ', workType: 'relax', text:"НВ (Дополнительные выходные дни (без сохранения заработной платы))"},
    { value:"spec29", codeNum:"29", code: 'ЗБ', workType: 'relax', text:"ЗБ (Забастовка (при условиях и в порядке, предусмотренных законом))"},
    { value:"spec30", codeNum:"30", code: 'НН', workType: 'relax', text:"НН (Неявки по невыясненным причинам (до выяснения обстоятельств))"},
    { value:"spec31", codeNum:"31", code: 'РП', workType: 'relax', text:"РП (Время простоя по вине работодателя)"},
    { value:"spec32", codeNum:"32", code: 'НП', workType: 'relax', text:"НП (Время простоя по причинам, не зависящим от работодателя и работника)"},
    { value:"spec33", codeNum:"33", code: 'ВП', workType: 'relax', text:"ВП (Время простоя по вине работника)"},
    { value:"spec34", codeNum:"34", code: 'НО', workType: 'relax', text:"НО (Отстранение от работы (недопущение к работе) с оплатой (пособием) в соответствии с законодательством )"},
    { value:"spec35", codeNum:"35", code: 'НБ', workType: 'relax', text:"НБ (Отстранение от работы (недопущение к работе) по причинам, предусмотренным законодательством, без начисления заработной платы)"},
    { value:"spec36", codeNum:"36", code: 'НЗ', workType: 'relax', text:"НЗ (Время приостановки работы в случае задержки выплаты заработной платы)"},
];

function findSpecSymbolSrv(value) {
    var source = timecardSpecCodesSource;
    for (var i = 0; i < source.length; i++) {
        if (source[i].value === value) {
            return source[i];
        }
    }
    throw "Couldn't find object with value: " + value;
}

//access for timecardSpecCodesSource variable from client
if (Meteor.isClient) {
    Template.registerHelper('timecardSpecCodesSource', function () {
        return timecardSpecCodesSource;
    });

    Template.registerHelper('findSpecSymbol', function (value) {
        return findSpecSymbolSrv(value);
    });
}
