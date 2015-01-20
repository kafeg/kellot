Meteor.publish('company', function(userId) {
  return Company.find({userId: userId});
});

Meteor.publish('department', function(userId) {
  //console.log(Company.findOne({ userId: userId})._id);
  return Department.find({companyId: Company.findOne({ userId: userId})._id});
});

Meteor.publish('holiday', function(userId) {
  //console.log(Company.findOne({ userId: userId})._id);
  return Holiday.find({companyId: Company.findOne({ userId: userId})._id});
});

Meteor.publish('staff', function(userId) {
  //console.log(Company.findOne({ userId: userId})._id);
  return Staff.find({companyId: Company.findOne({ userId: userId})._id});
});
