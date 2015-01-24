Timecard = new Mongo.Collection('timecard');

//SimpleSchema.debug = true;

if (Meteor.isServer) {
    Meteor.methods({
        timecardGenerator: function (year, monthId) {
            check(this.userId, String);
            check(year, Number);
            check(monthId, Number);
            console.log('timecardGenerator called', year, monthId);
            var company = Company.findOne({userId: this.userId}); //todo associated with company user!
            //todo check if company object exists
            var companyId = company._id;

            var staffs = Staff.find({companyId: companyId}, {fields: {_id: 1}}).fetch();

            //console.log(staffs);
            var staffIds = [];

            var docTemplate = {staffId:0, year:year, month:monthId, 
                d1:'00:00', d2:'00:00', d3:'00:00', d4:'00:00', d5:'00:00', d6:'00:00', d7:'00:00', d8:'00:00', d9:'00:00', d10:'00:00', d11:'00:00',
                d12:'00:00', d13:'00:00', d14:'00:00', d15:'00:00', d16:'00:00', d17:'00:00', d18:'00:00', d19:'00:00', d20:'00:00',  d21:'00:00',  d22:'00:00',  d23:'00:00',  d24:'00:00',  d25:'00:00',
                d26:'00:00',  d27:'00:00',  d28:'00:00',  d29:'00:00',  d30:'00:00',  d31:'00:00',
                dt1:'spec01', dt2:'spec01', dt3:'spec01', dt4:'spec01', dt5:'spec01', dt6:'spec01', dt7:'spec01', dt8:'spec01', dt9:'spec01', dt10:'spec01', dt11:'spec01',
                dt12:'spec01', dt13:'spec01', dt14:'spec01', dt15:'spec01', dt16:'spec01', dt17:'spec01', dt18:'spec01', dt19:'spec01', dt20:'spec01',  dt21:'spec01',  dt22:'spec01',  dt23:'spec01',  dt24:'spec01',  dt25:'spec01',
                dt26:'spec01',  dt27:'spec01',  dt28:'spec01',  dt29:'spec01',  dt30:'spec01',  dt31:'spec01',
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
        },
        timecardUpdater: function (id, dayNum, timeValue, typeValue) {
            check(this.userId, String);
            check(id, String);
            check(dayNum, String);
            check(timeValue, String);
            check(typeValue, String);
            var modiferNameTime = 'd'+dayNum;
            var modiferNameType = 'dt'+dayNum;
            console.log('timecardUpdater called', id, dayNum, timeValue, typeValue);

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
            console.log(updater);

            Timecard.update({_id:id}, {$set: updater}, {}, function(error, count) {
                console.log(error, count);
            });
        }
    });
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
    },
}));
