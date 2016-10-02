'use strict';

let app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#sign-out').show();
};

module.exports = {
  success,
  failure,
  signInSuccess
};
