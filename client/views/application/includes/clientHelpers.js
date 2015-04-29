Template.registerHelper('validateEmail', function (email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
});