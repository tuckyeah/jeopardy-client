'use strict';

let getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const makeNewGameModal = () => {
  $('#makeGameModal').modal('show');
};

const onNewGame = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  // debugger;
  $('#makeGameModal').modal('hide');
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

const onValueClick = (event) => {
  event.preventDefault();
  let clue_id = $(event.target).parent().attr('id');
  // console.log(clue_id);
  api.askQuestion(clue_id)
    .done(ui.displayQuestion)
    .fail(ui.failure);
};

const onAnswerSubmit = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.submitAnswer(data)
    .done(ui.answerSuccess)
    .fail(ui.answerFailure);
};

const onBackCategories = (event) => {
  event.preventDefault();
  ui.displayCategories();
};

const onBackValues = (event) => {
  event.preventDefault();
  ui.displayValues();
};

const onNextQuestion = (event) => {
  event.preventDefault();
  api.updateBoard()
    .done(ui.updateBoardSuccess)
    .fail(ui.failure);
};

const onAllGames = (event) => {
  event.preventDefault();
  api.getAllGames()
    .done(ui.allGamesSuccess)
    .fail(ui.failure);
};

const onResetScore = (event) => {
  event.preventDefault();
  api.resetUserScore()
    .done(ui.updateScoreSuccess)
    .fail(ui.failure);
};

const onPlayAgain = (event) => {
  event.preventDefault();
  makeNewGameModal();
};

const onCloseAllGames = () => {
  $('#allGamesModal').modal('hide');
  $('img').fadeOut('slow');
};

const addHandlers = () => {
  $('#makeGameModal').on('submit', onNewGame);
  // $('#makeNewGame').on('submit', onNewGame);
  // $('.category-box').on('click','.category-title', onCategoryClick);
  $('.category-box').on('click', '.clue .value', onValueClick);
  $('.category-box').on('submit', '#question-response', onAnswerSubmit);
  $('.category-box').on('click', '#backToCategories', onBackCategories);
  $('.category-box').on('click', '#backToValues', onBackValues);
  $('.category-box').on('click', '#nextQuestion', onNextQuestion);
  $('#showAllGames').on('click', onAllGames);
  $('#resetScore').on('click', onResetScore);
  $('#show-new-game-modal').on('click', makeNewGameModal);
  $('.play-again-btn').on('click', onPlayAgain);
  $('#show-all-games-modal').on('click', onAllGames);
  $('#close-all-games').on('click', onCloseAllGames);
};

module.exports = {
  addHandlers,
};
