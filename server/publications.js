Meteor.publish('company', function(userId) {
  check(userId, String);
  return Company.find({userId: userId});
});

Meteor.publish('department', function(userId) {
  check(userId, String);
  //console.log(Company.findOne({ userId: userId})._id);
  return Department.find({companyId: Company.findOne({ userId: userId})._id});
});

Meteor.publish('holiday', function(userId) {
  check(userId, String);
  //console.log(Company.findOne({ userId: userId})._id);
  return Holiday.find({companyId: Company.findOne({ userId: userId})._id});
});

Meteor.publish('staff', function(userId) {
  check(userId, String);
  //console.log(Company.findOne({ userId: userId})._id);
  return Staff.find({companyId: Company.findOne({ userId: userId})._id});
});

Meteor.publish('timecard', function(userId) {
  check(userId, String);

  var company = Company.findOne({userId: this.userId}); //todo associated with company user!
  //todo check if company object exists
  var companyId = company._id;

  var staffs = Staff.find({companyId: companyId}, {fields: {_id: 1}}).fetch();
  var staffIds = [];
  staffs.forEach(function outputItem(item, i, arr) {
        staffIds.push(item._id);
      }
  );

  return Timecard.find({companyId: companyId, staffId: {$in: staffIds}});
});
