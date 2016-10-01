'use strict'

const app = require('../app.js');

const showGameTemplate = require('../templates/display-categories.handlebars');
const showClueValues = require('../templates/display-question-values.handlebars');
const showQuestionTemplate = require('../templates/show-question.handlebars');
const showResponseTemplate = require('../templates/display-response.handlebars');

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
  $('.response-box').append(showResponseTemplate(data));
  // if (app.response.correct) {
  //   console.log("right answer");
  //
  // } else {
  //   console.log("Wrong answer.");
  // }
  // debugger;
};

const answerFailure = (data) => {
  console.log("Wrong answer");
  console.error(data);
};

const displayCategories = () => {
  $('.category-box').html(showGameTemplate(app.game));
};

const newGameSuccess = (data) => {
  app.game = data;
  console.log(app.game);
  displayCategories();
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
  app.game.current_clue = data;
  app.game.clue_id = app.game.current_clue.clue.id;
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
  displayValues, displayQuestion,
  answerSuccess, answerFailure,
  displayCategories, displayValues, valuesSuccess
};
