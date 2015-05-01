Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
        {fields: {'other': 1, 'companyId': 1, 'services':1}});
});

function getCompany(userId) {
    //if user owner of company
    var company = Company.findOne({userId: userId});
    //if user not owner of company, but he is a memeber of company
    if (company == undefined) {
        if (userId != null) {
            var user = Meteor.users.findOne({_id: userId}, {fields: {'companyId': 1}});
            //console.log('getCompany', userId, user.companyId);
            company = Company.findOne({_id: user.companyId});
        }
    }
    return company;
}

//получаем объект компании по коду приглашения
function getCompanyByInviteToken(tokenId) {
    var invite = Invite.findOne({ token: tokenId });
    var company = Company.findOne({ _id: invite.companyId });
    //console.log('getCompanyByInviteToken', tokenId, invite.companyId, company._id);
    return company;
}

function getCompanyId(userId) {
    var company = getCompany(userId);
    if (company == undefined) {
        return '0';
    } else {
        return company._id;
    }
}

Meteor.publish('company', function (userId) {
    check(userId, Match.Any);

    return Company.find({_id: getCompanyId(userId)});
});

Meteor.publish('department', function (userId) {
    check(userId, Match.Any);

    return Department.find({companyId: getCompanyId(userId)});
});

Meteor.publish('holiday', function (userId) {
    check(userId, Match.Any);

    return Holiday.find({companyId: getCompanyId(userId)});
});

Meteor.publish('staff', function (userId) {
    check(userId, Match.Any);

    return Staff.find({companyId: getCompanyId(userId)});
});

Meteor.publish('timecard', function (userId, year, month) {
    check(userId, Match.Any);
    check(year, Match.Any);
    check(month, Match.Any);

    var companyId = getCompanyId(userId);

    var staffs = Staff.find({companyId: companyId}, {fields: {_id: 1}}).fetch();
    var staffIds = staffs.map(function(doc) { return doc._id });
    var timecard = Timecard.find({companyId: companyId, staffId: {$in: staffIds}, year:year, month:month});

    return timecard;
});

Meteor.publish('invite', function (userId) {
    check(userId, Match.Any);

    return Invite.find({companyId: getCompanyId(userId)});
});

Meteor.publish('inviteToken', function (tokenId) {
    check(tokenId, Match.Any);

    return Invite.find({ token: tokenId });
});

Meteor.publish('companyToken', function (tokenId) {
    check(tokenId, Match.Any);
    var company = getCompanyByInviteToken(tokenId);

    return Company.find({_id:company._id});
});

Meteor.publish('userToken', function (tokenId) {
    check(tokenId, Match.Any);

    var company = getCompanyByInviteToken(tokenId);

    return Meteor.users.find({ _id: company.userId },
        {fields: {'other': 0, 'things': 0, 'services':0, 'roles':0, createdAt:0}});
});
