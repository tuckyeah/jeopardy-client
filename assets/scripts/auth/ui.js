'use strict';

let app = require('../app');

let displayScoreTemplate = require('../templates/display-score.handlebars');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const gameBoardView = function () {
  $('nav').css('visibility', 'visible');
  $('#sign-in-button').hide();
  $('#sign-up-button').hide();
  $('.intro-text-box').hide();
  $('img').fadeOut('slow');
};

const logOutView = function() {
  $('nav').css('visibility', 'hidden');
  $('.score-header').html('');
  $('.category-box').hide();
  $('.intro-text-box').show();
  $('#sign-in-button').show();
  $('#sign-up-button').show();
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signInModal').modal('hide');
  $('#signUpModal').modal('hide');
  gameBoardView();
  $('.score-header').append(displayScoreTemplate(data));
};

const signInFailure = (error) => {
  $('.alert#sign-in-fail')
    .append(`
      (Status Code
      ${error.status} : ${error.statusText})`)
    .show();
};

const signUpSuccess = () => {
  $('#signUpModal').modal('hide');
  $('#sign-up-button').hide();
};

const signUpFailure = () => {
  $('.alert#sign-up-fail').show();
};

const changePasswordSuccess = () => {
  $('#changePassModal').modal('hide');
  $('#change-password-button').css('opacity', '0.5');
};

const changePasswordFailure = (error) => {
  $('.alert#-change-pass-fail')
    .append(`
      (Status Code
      ${error.status} : ${error.statusText})`)
    .show();
};

const signOutSuccess = () => {
  app.user = null;
  logOutView();
};

const signOutFailure = function (error) {
  let alertText = `Status code ${error.status} : ${error.statusText}`;
  $('.alert#error-message')
    .append(alertText)
    .show();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
};
