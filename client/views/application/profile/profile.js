/**
 * Created by kafeg on 21.04.2015.
 */

Template.linkTemplate.events({
    'click #linkWithFacebook': function () {
        Meteor.linkWithFacebook();
    },
    'click #linkWithGoogle': function () {
        Meteor.linkWithGoogle();
    },
    'click #linkWithMailru': function () {
        Meteor.linkWithMailru();
    },
    'click #linkWithTwitter': function () {
        Meteor.linkWithTwitter();
    },
    'click #linkWithVk': function () {
        Meteor.linkWithVk();
    }
});

Template.linkTemplate.helpers({
    services: function () {
        var user = Meteor.user();
        if (user) {
            return _.keys(user.services);
        } else {
            return;
        }
    },
    isLinkedGoogle: function () {
        var user = Meteor.user();
        //console.log(user.services);
        if (user) {
            //console.log('Google', user.services.google, typeof user.services.google !== 'undefined');
            return typeof user.services.google !== 'undefined';
        } else {
            return false;
        }
    },
    isLinkedFacebook: function () {
        var user = Meteor.user();
        if (user) {
            //console.log('FB', user.services.facebook, typeof user.services.facebook !== 'undefined');
            return typeof user.services.facebook !== 'undefined';
        } else {
            return false;
        }
    },
    isLinkedVk: function () {
        var user = Meteor.user();
        if (user) {
            //console.log('VK', user.services.facebook, typeof user.services.facebook !== 'undefined');
            return typeof user.services.vk !== 'undefined';
        } else {
            return false;
        }
    },
    isLinkedMailru: function () {
        var user = Meteor.user();
        if (user) {
            //console.log('VK', user.services.facebook, typeof user.services.facebook !== 'undefined');
            return typeof user.services.mailru !== 'undefined';
        } else {
            return false;
        }
    },
    isLinkedTwitter: function () {
        var user = Meteor.user();
        if (user) {
            //console.log('VK', user.services.facebook, typeof user.services.facebook !== 'undefined');
            return typeof user.services.twitter !== 'undefined';
        } else {
            return false;
        }
    }
});

//Template.profileInfo.rendered= function(){
//    $('#bashQuote').append('<script type="text/javascript" src="http://bash.im/forweb/"/>');
//}

Template.profileInfo.helpers({
    //bashim: function () {
    //    return '<script type="text/javascript" src="http://bash.im/forweb/" charset="utf-8"></script>';
    //}
});
