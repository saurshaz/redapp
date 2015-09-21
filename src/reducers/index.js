var { combineReducers } = require('redux');
// var counter = require('./counter');
var counter = require('./JobsHomeReducer');

var rootReducer = combineReducers({
  counter
});

module.exports = rootReducer;
