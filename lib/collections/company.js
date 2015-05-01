Company = new Mongo.Collection('company');

if (Meteor.isServer) {
    Meteor.methods({
        //после создания компании. пользователь создавший её автоматически должен стать администратором
        registerAdminUser: function(companyId, userId) {
            check(companyId, String);
            check(userId, String);
            Roles.addUsersToRoles(Meteor.userId(), ["CompanyAdmin"]);
        }
    });
}

//SimpleSchema.debug = true;

//схема
Company.attachSchema(new SimpleSchema({
    //наименование компании
  title: {
    type: String,
    label: "Наименование",
    min: 3,
    max: 200
  },
    //описание компании
  description: {
    type: String,
    label: "Краткое описание",
    min: 20,
    max: 1000,
    autoform: {
      rows: 5
    }
  },
    //id пользователя создавшего компанию. В будущем он же будет её владельцем и админом.
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
    //дата создания. Заполняется автоматически
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
    denyUpdate: true,
    optional: true
  },
  // дата обновления. Заполняется автоматически
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
