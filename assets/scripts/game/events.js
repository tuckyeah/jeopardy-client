'use strict';

let getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onSignUp = function (event) {
  event.preventDefault();

  // can also call getFormFields(this)
  // 'this' is whatever fired the function (same as passing 'event.target')
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};


const onNewGame = (event) => {
  event.preventDefault();
  api.newGame()
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

const onCategoryClick = (event) => {
  event.preventDefault();
  let cat_id = event.target.id;
  api.pickCategory(cat_id)
    .done(ui.displayClues)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#makeNewGame').on('click', onNewGame);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('.category-box').on('click','.category-title', onCategoryClick);
};

module.exports = {
  addHandlers,
};
