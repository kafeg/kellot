Meteor.methods({
    //Add user V31337@gmail.com to admin group
    checkAndAdminizeUser: function () {
        var loggedInUser = Meteor.user();

        //if (!loggedInUser ||
        //    !Roles.userIsInRole(loggedInUser,
        //        ['admin'])) {
        //    throw new Meteor.Error(403, "Access denied")
        //}

        if (Meteor.user().services != undefined && Meteor.user().services.google != undefined
            && Meteor.user().services.google.email == 'v31337@gmail.com') {
            console.log('Hi, application admin!');
            if (!Roles.userIsInRole(loggedInUser, ['admin'])) {
                Roles.addUsersToRoles(loggedInUser, ['admin']);
                //console.log('Now you added to group "admin"');
            } else {
                //console.log('You are alredy in group "admin"');
            }
        }
    }
});
