// var { INCREMENT_COUNTER, DECREMENT_COUNTER } = require('../actions/counter');
var { INCREMENT_COUNTER, DECREMENT_COUNTER } = require('../actions/JobsHomeActions');

module.exports = function(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
};
