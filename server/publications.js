Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},
      {fields: {'other': 1, 'things': 1, 'services':1}});
});

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

Meteor.publish('timecard', function (userId, year, month) {
  check(userId, Match.Any);
  check(year, Match.Any);
  check(month, Match.Any);

  if (this.userId != null) {
    var company = Company.findOne({userId: this.userId}); //todo associated with company user!
    if (company != undefined) {
          var companyId = company._id;
          var staffs = Staff.find({companyId: companyId}, {fields: {_id: 1}}).fetch();
          var staffIds = staffs.map(function(doc) { return doc._id });

          var timecard = Timecard.find({companyId: companyId, staffId: {$in: staffIds}, year:year, month:month});
          //console.log(userId, year, month, timecard.count());

          return timecard;
    } else {
      return Timecard.find({companyId: '0'});
    }
  } else {
    return Timecard.find({companyId: '0'});
  }
});

Meteor.publish('invite', function (userId) {
  check(userId, Match.Any);

  if (this.userId != null) {
    var company = Company.findOne({userId: this.userId});
    if (company != undefined) {
      var companyId = company._id;
      return Invite.find({companyId: Company.findOne({userId: userId})._id});
    } else {
      return Invite.find({companyId: '0'});
    }
  } else {
    return Invite.find({companyId: '0'});
  }
});

Meteor.publish('inviteToken', function (tokenId) {
    check(tokenId, Match.Any);
    //console.log('publication', tokenId);
    return Invite.find({ token: tokenId });
});

Meteor.publish('companyToken', function (tokenId) {
    check(tokenId, Match.Any);
    var invite = Invite.findOne({ token: tokenId });
    //console.log('publication companyToken', tokenId, invite.companyId);
    return Company.find({ _id: invite.companyId });
});

Meteor.publish('userToken', function (tokenId) {
    check(tokenId, Match.Any);
    var invite = Invite.findOne({ token: tokenId });
    var company = Company.findOne({ _id: invite.companyId });
    console.log('publication userToken', tokenId, company.userId);
    return Meteor.users.find({ _id: company.userId },
        {fields: {'other': 0, 'things': 0, 'services':0, 'roles':0, createdAt:0}});
});
