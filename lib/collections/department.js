Department = new Mongo.Collection('department');

//SimpleSchema.debug = true;

Department.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Подразделение",
    min: 3,
    max: 200
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
  creator: {
    type: String,
    label: "Создатель",
    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      } else {
        this.unset();
      }
    }
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
  }
}));
