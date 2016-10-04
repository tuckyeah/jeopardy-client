'use strict';

// MODAL HANDLERS

// SIGN IN
const signInView = () => {
  $('#introModal').modal('hide');
  $('#signInModal').modal('show');
};

// SIGN UP
const signUpView = () => {
  $('#introModal').modal('hide');
  $('#signUpModal').modal('show');
};

// CHANGE PASSWORD
const changePassView = () => {
  $('#changePassModal').modal('show');
};

const logInView = function () {
  $('nav').css('visibility', 'hidden');
  $('img').css('visibility', 'visible');
  // $('#change-password-button').hide();
  // $('#sign-out').hide();
};

const addHandlers = () => {
  $('#sign-in-button').on('click', signInView);
  $('#sign-up-button').on('click', signUpView);
  $('#change-pass-button').on('click', changePassView);
};

module.exports = {
  addHandlers,
  logInView
};
