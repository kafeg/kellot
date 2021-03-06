Staff = new Mongo.Collection('staff');

Staff.helpers({
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
});

//SimpleSchema.extendOptions({
//  unique: Match.Optional(Match.Where(function (v) {
//    console.log(this);
//    console.log(v);
//    console.log(arguments);
//    return true;
//  }))
//});

Staff.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "Имя",
    min: 2,
    max: 20
  },
  lastName: {
    type: String,
    label: "Фамилия",
    min: 2,
    max: 20
  },
  personnelNumber: {
    type: Number,
    label: "Табельный номер",
    min: 1
    //unique: true //TODO - ensure Index and increment (BUT IT DROP TABLE!!!) http://stackoverflow.com/questions/13190370/how-to-remove-duplicates-based-on-a-key-in-mongodb
  },
  departments: {
    type: [String],
    optional: true,
    label: "Подразделения",
    autoform: {
      type: "select-checkbox",
      options: function () {
        //make reactive select2
        var res = Tracker.autorun(function () {
          if (Department.find().count()) {
            var departments = Department.find();
            departmentsArr = [];
            departments.forEach(function (department) {
              departmentsArr.push({label: department.title, value: department._id});
            });
          }
          Session.set('reactiveDepartmentList', departmentsArr);
        });
        return Session.get('reactiveDepartmentList');
      }
    }
  },
  employmentDate: {
    type: Date,
    label: "Дата принятия на работу"
  },
  dismissalDate: {
    type: Date,
    label: "Дата увольнения",
    optional: true
  },
  starWorkTime: {
    type: Date,
    label: "Время начала работы",
    //defaultValue: Date('09:00')
  },
  endWorkTime: {
    type: Date,
    label: "Время окончания работы",
    //defaultValue: Date('18:00')
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
