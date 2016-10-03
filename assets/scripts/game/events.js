'use strict';

let getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const makeNewGameModal = () => {
  $('#makeGameModal').modal('show');
};

const onTestGame = (event) => {
  event.preventDefault();
  let data = (getFormFields(event.target));
  debugger;
};

const onNewGame = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  // debugger;
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

// const onCategoryClick = (event) => {
//   event.preventDefault();
//   let cat_id = event.target.id;
//   api.pickCategory(cat_id)
//     .done(ui.valuesSuccess)
//     .fail(ui.failure);
// };

const onValueClick = (event) => {
  event.preventDefault();
  let clue_id = $(event.target).parent().attr('id');
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
    .done(ui.success)
    .fail(ui.failure);
};

const onResetScore = (event) => {
  event.preventDefault();
  api.resetUserScore()
    .done(ui.updateScoreSuccess)
    .fail(ui.failure);
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
};

module.exports = {
  addHandlers,
};
