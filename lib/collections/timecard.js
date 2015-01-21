Timecard = new Mongo.Collection('timecard');

//SimpleSchema.debug = true;

Timecard.attachSchema(new SimpleSchema({
  staffId: {
    type: String,
    // autoValue: function() {
    //   if (this.isInsert) {
    //     return Company.findOne({userId:Meteor.userId()})._id;
    //   } else {
    //     this.unset();
    //   }
    // },
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
    min: 1,
    max: 12,
    denyUpdate: true,
    optional: true
  },
  d1: { type: String, label: "1" },
  d2: { type: String, label: "2" },
  d3: { type: String, label: "3" },
  d4: { type: String, label: "4" },
  d5: { type: String, label: "5" },
  d6: { type: String, label: "6" },
  d7: { type: String, label: "7" },
  d8: { type: String, label: "8" },
  d9: { type: String, label: "9" },
  d10: { type: String, label: "10" },
  d11: { type: String, label: "11" },
  d12: { type: String, label: "12" },
  d13: { type: String, label: "13" },
  d14: { type: String, label: "14" },
  d15: { type: String, label: "15" },
  d16: { type: String, label: "16" },
  d17: { type: String, label: "17" },
  d18: { type: String, label: "18" },
  d19: { type: String, label: "19" },
  d20: { type: String, label: "20" },
  d21: { type: String, label: "21" },
  d22: { type: String, label: "22" },
  d23: { type: String, label: "23" },
  d24: { type: String, label: "24" },
  d25: { type: String, label: "25" },
  d26: { type: String, label: "26" },
  d27: { type: String, label: "27" },
  d28: { type: String, label: "28" },
  d29: { type: String, label: "29" },
  d30: { type: String, label: "30" },
  d31: { type: String, label: "31" },
  companyId: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        return Company.findOne({userId:Meteor.userId()})._id;
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
    autoValue: function() {
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
    autoValue: function() {
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
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
}));
