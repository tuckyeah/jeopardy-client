'use strict'

const app = require('../app.js');

const showGameTemplate = require('../templates/display-categories.handlebars');
const showClueValues = require('../templates/display-question-values.handlebars');
const showQuestionTemplate = require('../templates/show-question.handlebars');

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

const displayValues = (data) => {
  app.game.category = data;
  $('.category-box').html(showClueValues(data));
};

const displayQuestion = (data) => {
  app.game.current_clue = data;
  $('.category-box').html(showQuestionTemplate(data));
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  newGameSuccess,
  failure,
  success,
  signInSuccess,
  displayValues, displayQuestion
};
