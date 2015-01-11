// Validators, helpers
//

// Trim Input
function trimInput(val) {
  return val.replace(/^\s*|\s*$/g, "");
}

// Validations
function isEmail(val, field) {
  if (val.indexOf('@') !== -1) {
    return true;
  } else {
    Alerts.add('Пожалуста введите корректный EMail', 'error');
    //Session.set('displayMessage', 'Error & Please enter a valid email address.');
    return false;
  }
}

function isValidPassword(val, field) {
  if (val.length >= 8) {
    return true;
  } else {
    Alerts.add('Пароль должен содержать 8 или более символов', 'error');
    //Session.set('displayMessage', 'Error & Your password should be 6 characters or longer.');
    return false;
  }
}

function isNotEmpty(val, field) {
  // if null or empty, return false
  if (!val || val === ''){
    Alerts.add('Пожалуйста заполните все обязательные поля', 'error');
    //Session.set('displayMessage', 'Error & Please fill in all required fields.');
    return false;
  }
  return true;
}

Template.alredyLoggedInForm.meteorUserName = function() {
  //return '123';
  var user = Meteor.user();
  if (user && user.emails)
    return user.emails[0].address;
  };

// Login Form Helpers
Template.loginForm.helpers({

    alredyLoggedIn: function() {
      var userId = Meteor.userId();
      //console.log('alredyLoggedIn', userId);
      if (userId) {
        //console.log('alredyLoggedIn', true);
        Session.set('alredyLoggedIn', true);
        return true;
      } else {
        console.log('alredyLoggedIn', false);
        Session.set('alredyLoggedIn', false);
        return false;
      }
    },

    loginForm: function() {
      //console.log(Session.get('formView'), Session.equals('formView', 'loginForm'), Session.equals('alredyLoggedIn', false))

      if ((!Session.get('formView') || Session.equals('formView', 'loginForm')) && Session.equals('alredyLoggedIn', false))
        return true;
    },

    createAccount: function() {
      return Session.equals('formView', 'createAccountForm');
    },

    passwordRecovery: function() {
      return Session.equals('formView', 'passwordRecoveryForm');
    }

  });

  function onLogin(err) {
    if (err) {
      Alerts.add('Ошибка входа: ' + err.reason, 'error');
      return;
    }
    Session.set('formView', 'alredyLoggedIn');
    Router.go('index');
    Alerts.add('Вход успешно выполнен!', 'success');
  }

  function createProject() {
    var videoObject = Session.get('createProjectFlow');

    var newProject = {
      user: Meteor.userId(),
      created: new Date(),
      type: videoObject.type,
      url : videoObject.url
    };

    if (videoObject.type === 'html') {
      newProject.name = videoObject.name;
    }

    // actually insert new object into database
    var newVideo = Videos.insert(newProject);
    Router.navigate('project/' + newVideo);

    delete Subtitler.videoNode;
    Session.set('currentVideo', newVideo);
    Session.set('loadingError', null);
    Session.set('currentView', 'app');
    Session.set('createProjectFlow', null);
  }

  // Login Form Events
  Template.loginForm.events({

    'submit #login-form' : function(e, t) {
      e.preventDefault();
      var email = trimInput(t.find('#login-email').value.toLowerCase())
      , password = t.find('#login-password').value;

      if (isNotEmpty(email, 'loginError')
        && isNotEmpty(password, 'loginError'))
      {
        Meteor.loginWithPassword(email, password, function(err) {
          onLogin(err);
        });
      }

      return false;
    },

    'click #forgot-password' : function(e, t) {
      Session.set('formView', 'passwordRecoveryForm');
    },

    'click #create-account' : function(e, t) {
      Session.set('formView', 'createAccountForm');
    },
  });

  // Reset our Session variables when the template
  // is destroyed.
  Template.loginForm.destroyed = function(){
    Session.set('formView', null);
  };

  // Create an account and login the user.
  Template.createAccountForm.events({

    'submit #register-form' : function(e, t) {
      var email = trimInput(t.find('#account-email').value.toLowerCase())
      , password = t.find('#account-password').value;
      //console.log(email, password);

      if (isNotEmpty(email, 'accountError')
        && isNotEmpty(password, 'accountError')
        && isEmail(email, 'accountError')
        && isValidPassword(password, 'accountError'))
      {
        //console.log('createUser');
        Session.set('loading', true);
        Accounts.createUser({email: email, password : password}, function(err){
          if (err && err.error === 403) {
            console.log('Account Creation Error &' + err.reason);
            Alerts.add('Ошибка создания аккаунта: ' + err.reason, 'error');

            //Session.set('displayMessage', 'Account Creation Error &' + err.reason);
            Session.set('loading', false);
          } else {
            Router.go('loginForm');
            Alerts.add("Аккаунт успешно создан!", 'success');
            //Session.set('formView', 'loginForm');
            //console.log('createProjectFlow');
            //if (Session.get('createProjectFlow')) createProject();
            //Session.set('overlay', null);
          }
          Session.set('loading', false);
        });
      }
      return false;
    }

  });

  Template.passwordRecoveryForm.helpers({

    resetToken: function(){
      return Session.get('resetPassword');
    }

  });

  Template.passwordRecoveryForm.events({

    'submit #recovery-form' : function(e, t) {
      var email = trimInput(t.find('#recovery-email').value);
      if (isNotEmpty(email, 'recoveryError') && isEmail(email, 'recoveryError')) {
        Session.set('loading', true);
        Accounts.forgotPassword({email: email}, function(err){
          if (err)
            Alerts.add('Ошибка сброса пароля: ' + err.reason, 'error');
            //Session.set('displayMessage', 'Password Reset Error & ' + err.reason);
            else {
              Alerts.add('Инструкции по восставнолению высланы на Ваш EMail ', 'error');
              //Session.set('displayMessage', 'Email Sent & Please check your email to reset your password.');
              Session.set('passwordView', null);
              Router.navigate('');
            }
            Session.set('loading', false);
          });
        }
        return false;
      },

      'submit #new-password' : function(e, t) {
        var pw = t.find('#new-password-password').value;
        if (isNotEmpty(pw) && isValidPassword(pw)) {
          Session.set('loading', true);
          Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
            if (err) {
              Alerts.add('Ошибка сброса пароля: ' + err.reason, 'error');
              //Session.set('displayMessage', 'Password Reset Error & '+ err.reason);
            } else {
                Session.set('currentView', 'library');
                Session.set('resetPassword', null);
                Router.navigate('library');
              }
              Session.set('loading', false);
            });
          }
          return false;
        }
      });
