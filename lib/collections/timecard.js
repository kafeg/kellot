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

            var docTemplate = {staffId:0, year:year, month:monthId, d1:'00:00', d2:'00:00', d3:'00:00', d4:'00:00', d5:'00:00', d6:'00:00', d7:'00:00', d8:'00:00', d9:'00:00', d10:'00:00', d11:'00:00',
                d12:'00:00', d13:'00:00', d14:'00:00', d15:'00:00', d16:'00:00', d17:'00:00', d18:'00:00', d19:'00:00', d20:'00:00',  d21:'00:00',  d22:'00:00',  d23:'00:00',  d24:'00:00',  d25:'00:00',
                d26:'00:00',  d27:'00:00',  d28:'00:00',  d29:'00:00',  d30:'00:00',  d31:'00:00', hospitalDays:0, workHoursAndMinuts:0, workHours:0, workHoursAndMinutsAtHolidays:0, workHoursAtHolidays:0
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

            //console.log(docs);

            //var post = _.extend(postAttributes, {
            //    userId: user._id,
            //    author: user.username,
            //    submitted: new Date()
            //});
            //
            //var postId = Posts.insert(post);
            //
            //return {
            //    _id: postId
            //};
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
    d1: {type: String, label: "1"},
    d2: {type: String, label: "2"},
    d3: {type: String, label: "3"},
    d4: {type: String, label: "4"},
    d5: {type: String, label: "5"},
    d6: {type: String, label: "6"},
    d7: {type: String, label: "7"},
    d8: {type: String, label: "8"},
    d9: {type: String, label: "9"},
    d10: {type: String, label: "10"},
    d11: {type: String, label: "11"},
    d12: {type: String, label: "12"},
    d13: {type: String, label: "13"},
    d14: {type: String, label: "14"},
    d15: {type: String, label: "15"},
    d16: {type: String, label: "16"},
    d17: {type: String, label: "17"},
    d18: {type: String, label: "18"},
    d19: {type: String, label: "19"},
    d20: {type: String, label: "20"},
    d21: {type: String, label: "21"},
    d22: {type: String, label: "22"},
    d23: {type: String, label: "23"},
    d24: {type: String, label: "24"},
    d25: {type: String, label: "25"},
    d26: {type: String, label: "26"},
    d27: {type: String, label: "27"},
    d28: {type: String, label: "28"},
    d29: {type: String, label: "29"},
    d30: {type: String, label: "30"},
    d31: {type: String, label: "31"},
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
