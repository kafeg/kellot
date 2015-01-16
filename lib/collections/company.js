Company = new Mongo.Collection('company');

Company.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Наименование",
    min: 3,
    max: 200
  },
  descriotion: {
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
    label: "Владелец"
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
  },
}));
