//Accounts.onCreateUser(function(options, user) {
//    console.log('onCreateUser');
//    if (options.profile) {
//        user.profile = options.profile;
//    }
//    //user.firstLogin = true;
//    var activationToken = UserSession.get('activationToken');
//    console.log(activationToken);
//    var invite = Invite.findOne({ token: activationToken });
//    var company = Company.find({ _id: invite.companyId });
//    console.log(company.title);
//    Roles.addUsersToRoles(user._id, ["CompanyMember"]);
//    user.companyId = company._id;
//    return user;
//});
