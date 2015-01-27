Meteor.publish('company', function (userId) {
  check(userId, Match.Any);

  if (this.userId != null) {
    var company = Company.findOne({userId: this.userId});
    if (company != undefined) {
      var companyId = company._id;
      return Company.find({userId: userId});
    } else {
      return Company.find({_id: '0'});
    }
  }  else {
    return Company.find({_id: '0'});
  }
});

Meteor.publish('department', function (userId) {
  check(userId, Match.Any);

  if (this.userId != null) {
    var company = Company.findOne({userId: this.userId});
    if (company != undefined) {
      var companyId = company._id;
      return Department.find({companyId: Company.findOne({userId: userId})._id});
    } else {
      return Department.find({companyId: '0'});
    }
  } else {
    return Department.find({companyId: '0'});
  }
});

Meteor.publish('holiday', function (userId) {
  check(userId, Match.Any);

  if (this.userId != null) {
    var company = Company.findOne({userId: this.userId});
    if (company != undefined) {
      var companyId = company._id;
      return Holiday.find({companyId: Company.findOne({userId: userId})._id});
    } else {
      return Holiday.find({companyId: '0'});
    }
  } else {
    return Holiday.find({companyId: '0'});
  }
});

Meteor.publish('staff', function (userId) {
  check(userId, Match.Any);

  var staffCollection;

  if (this.userId != null) {
    var company = Company.findOne({userId: this.userId});
    if (company != undefined) {
      var companyId = company._id;
      staffCollection = Staff.find({companyId: Company.findOne({userId: userId})._id});
    } else {
      staffCollection = Staff.find({companyId: '0'});
    }
  } else {
    staffCollection = Staff.find({companyId: '0'});
  }

  return staffCollection;
});

Meteor.publish('timecard', function (userId) {
  check(userId, Match.Any);

  if (this.userId != null) {
    var company = Company.findOne({userId: this.userId}); //todo associated with company user!
    if (company != undefined) {
          var companyId = company._id;
          var staffs = Staff.find({companyId: companyId}, {fields: {_id: 1}}).fetch();
          var staffIds = staffs.map(function(doc) { return doc._id });
          return Timecard.find({companyId: companyId, staffId: {$in: staffIds}});
    } else {
      return Timecard.find({companyId: '0'});
    }
  } else {
    return Timecard.find({companyId: '0'});
  }
});
