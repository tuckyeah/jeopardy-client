'use strict'

const showGameTemplate = require('../templates/display-game.handlebars');

const newGameSuccess = (data) => {
  let game = data;
  console.log(game);
  $('.content').html(showGameTemplate(game));
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  newGameSuccess,
  failure
}
