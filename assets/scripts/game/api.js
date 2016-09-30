'use strict';

const app = require('../app.js');

const newGame = function() {
  return $.ajax({
    url: app.host + "/games/new",
    method: 'GET'
  });
};

module.exports = {
  newGame,
};
