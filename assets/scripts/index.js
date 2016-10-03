'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');
const viewStates = require('./login-viewstates.js')

$(() => {
    gameEvents.addHandlers();
    authEvents.addHandlers();
    viewStates.addHandlers();
    viewStates.logInView();
});
