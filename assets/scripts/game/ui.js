'use strict'

const app = require('../app.js');

const showGameTemplate = require('../templates/display-categories.handlebars');
const showClueValues = require('../templates/display-question-values.handlebars');
const showQuestionTemplate = require('../templates/show-question.handlebars');
const showResponseTemplate = require('../templates/display-response.handlebars');
const showGameOverTemplate = require('../templates/game-over.handlebars');
const showScoreTemplate = require('../templates/display-score-categories.handlebars');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const answerSuccess = (data) => {
  console.log(data);
  app.response = data;
  $('.question-response-box').hide();
  $('.question').html(showResponseTemplate(data));
};

const answerFailure = (data) => {
  console.log("Wrong answer");
  console.error(data);
};

const displayCategories = () => {
  $('.response-box').html('');
  $('.category-box').html(showGameTemplate(app.game));
};

const newGameSuccess = (data) => {
  app.game = data;
  console.log(app.game);
  displayCategories();
  $('.score-header').html(showScoreTemplate(app.game.game.user));
  $('.content').attr('id', app.game.game.id); // add game id to content
};

const displayValues = () => {
  $('.category-box').html(showClueValues(app.game.category));
};

const valuesSuccess = (data) => {
  app.game.category = data.category;
  displayValues();
};

const displayQuestion = (data) => {
  app.game.category = data.clue.category;
  app.game.current_clue = data;
  app.game.clue_id = app.game.current_clue.clue.id;
  $('.category-box').html(showQuestionTemplate(data));
};

const updateBoardSuccess = (data) => {
  app.game = data;
  app.user.score = app.game.game.user.score;
  if (app.game.game.over) {
    $('.response-box').html('');
    $('.category-box').html(showGameOverTemplate());
  } else {
    displayCategories();
    $('.score-header').html(showScoreTemplate(app.user));
  }
};

const updateScoreSuccess = (data) => {
  app.user.score = data.user.score;
  app.game.user = data.user;
  $('.category-box').html('');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  newGameSuccess,
  failure,
  success,
  signInSuccess,
  displayValues, displayQuestion,
  answerSuccess, answerFailure,
  displayCategories, valuesSuccess,
  updateBoardSuccess, updateScoreSuccess
};
