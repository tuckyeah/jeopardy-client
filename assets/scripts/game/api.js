'use strict';

const app = require('../app.js');

const signUp = (data) => {
  // console.log(data);
  // debugger;

  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const newGame = function() {
  return $.ajax({
    url: app.host + "/games/new",
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // }
  });
};

const pickCategory = function(cat_id) {
  return $.ajax({
    url: app.host + '/categories/' + cat_id,
    method: 'GET'
  });
};

module.exports = {
  newGame,
  signUp,
  signIn,
  changePassword,
  signOut,
  pickCategory
};
