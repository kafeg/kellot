Company = new Mongo.Collection('company');

//SimpleSchema.debug = true;
//console.log('123');
Company.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Наименование",
    min: 3,
    max: 200
  },
  description: {
    type: String,
    label: "Краткое описание",
    min: 20,
    max: 1000,
    autoform: {
      rows: 5
    }
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
