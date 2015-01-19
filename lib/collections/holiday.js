Holiday = new Mongo.Collection('holiday');

//SimpleSchema.debug = true;

Holiday.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Праздник",
    min: 3,
    max: 30
  },
  holidayDate: {
    type: Date,
    label: "Дата праздника"
  },
  repeatPerYear: {
    type: Boolean,
    label: "Повторяется ежегодно"
  },
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
