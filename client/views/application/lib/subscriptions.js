Meteor.subscribe('company', Meteor.userId());

Deps.autorun(function(){
    if(Meteor.userId()){
        Meteor.subscribe('company', Meteor.userId());
        Meteor.subscribe('department', Meteor.userId());
        Meteor.subscribe('holiday', Meteor.userId());
        Meteor.subscribe('staff', Meteor.userId());
        Meteor.subscribe('timecard', Meteor.userId());
        Meteor.subscribe('invite', Meteor.userId());
    }
});

//Meteor.subscribe('timecard', Meteor.userId());
