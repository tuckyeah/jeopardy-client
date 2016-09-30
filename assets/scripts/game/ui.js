'use strict'

const app = require('../app.js');

const showGameTemplate = require('../templates/display-categories.handlebars');
const displayQuestionsTemplate = require('../templates/display-questions.handlebars');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const newGameSuccess = (data) => {
  app.game = data;
  console.log(app.game);
  $('.category-box').html(showGameTemplate(app.game));
  $('.content').attr('id', app.game.game.id); // add game id to content
};

const displayClues = (data) => {
  $('.category-box').html(displayQuestionsTemplate(data));
};
const failure = (error) => {
  console.error(error);
};

module.exports = {
  newGameSuccess,
  failure,
  success,
  signInSuccess,
  displayClues
};
