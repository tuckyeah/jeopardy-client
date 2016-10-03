'use strict';

const app = require('../app.js');



const newGame = function(data) {
  return $.ajax({
    url: app.host + "/games",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      'game': {
        'user_id': app.user.id,
        'num_categories': data.game.num_categories
      }
    }
  });
};

const pickCategory = function(cat_id) {
  return $.ajax({
    url: app.host + '/categories/' + cat_id,
    method: 'GET'
  });
};

const askQuestion = function(clue_id) {
  return $.ajax({
    url: app.host + '/clues/' + clue_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const submitAnswer = function(data) {
  return $.ajax({
    url: app.host + '/answer/'+ app.game.clue_id +'/'+ app.game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

const updateBoard = function() {
  return $.ajax({
    url: app.host + '/games/' + app.game.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const getAllGames = function() {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const resetUserScore = function() {
  return $.ajax({
    url: app.host + '/reset-score/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

module.exports = {
  newGame,
  pickCategory,
  askQuestion,
  submitAnswer,
  updateBoard,
  getAllGames,
  resetUserScore
};
