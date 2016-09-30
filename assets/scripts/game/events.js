'use strict';

let getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onNewGame = (event) => {
  event.preventDefault();
  api.newGame()
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#makeNewGame').on('click', onNewGame);
};

module.exports = {
  addHandlers,
};
