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

};


const signInSuccess = (data) => {
  app.user = data.user;
  $('#signInModal').modal('hide');
  gameBoardView();
  $('.score-header').append(displayScoreTemplate(data));
};

const signUpSuccess = () => {
  $('#signUpModal').modal('hide');
  $('#sign-up-button').hide();
};


module.exports = {
  success,
  failure,
  signInSuccess,
  signUpSuccess
};
