'use strict';

let getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onSignUp = function (event) {
  event.preventDefault();

  let signUpData = getFormFields(event.target);
  api.signUp(signUpData)
    .done(function(data, textStatus, jqXHR) {
      // these variables are what the done function returns every time
      api.autoLogIn(data, textStatus, jqXHR, signUpData)
        .done(ui.signInSuccess)
        .fail(ui.signInFailure);
    })
    .fail(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.signOutFailure);
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
