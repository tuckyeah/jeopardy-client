'use strict'

const app = require('../app.js');

const showGameTemplate = require('../templates/display-categories.handlebars');
const showClueValues = require('../templates/display-question-values.handlebars');
const showQuestionTemplate = require('../templates/show-question.handlebars');
const showResponseTemplate = require('../templates/display-response.handlebars');
const showGameOverTemplate = require('../templates/game-over.handlebars');
const showScoreTemplate = require('../templates/display-score-categories.handlebars');
const showAllGamesTemplate = require('../templates/all-games-template.handlebars');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  // console.log(data);
};

const answerSuccess = (data) => {
  // console.log(data);
  app.response = data;
  $('.question-response-box').hide();
  $('.question').html(showResponseTemplate(data));
};

const answerFailure = (data) => {
  // console.log("Wrong answer");
  console.error(data);
};

const displayCategories = () => {
  $('.response-box').html('');
  $('.category-box').html(showGameTemplate(app.game));
};

const filter_categories = (data) => {
  let categories = [];
  let ids = [];

  data.forEach(function(element){
    if (ids.indexOf(element.category.id) === -1) {
      element.category.clues = [];
      categories.push(element.category);
      ids.push(element.category.id);
    }
  });
  return categories;
};

const build_categories = (data) => {
  data.forEach(function(element) {
    app.game.categories.forEach(function(category){
      if (category.id === element.category.id) {
        category.clues.unshift(element);
      }
    });
  });
};

const newGameSuccess = (data) => {
  app.game = data;
  // console.log(app.game);
  app.game.categories = filter_categories(app.game.game.clues);
  build_categories(app.game.game.clues);
  console.log(app.game.categories);
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
  app.game.categories = filter_categories(app.game.game.clues);
  build_categories(app.game.game.clues);

  // console.log(app.game);
  if (app.game.game.over) {
    $('img').fadeIn('slow');
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
  $('.score-header').html(showScoreTemplate(app.user));
};

const allGamesSuccess = (data) => {
  app.user.all_games = data;
  $('img').fadeIn('slow');
  $('#allGamesModal').modal('show');
  $('.all-games-body').html(showAllGamesTemplate(app.user.all_games));
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
  updateBoardSuccess, updateScoreSuccess,
  allGamesSuccess
};
