var { bindActionCreators } = require('redux');
var { connect } = require('react-redux/native');
var JobsHome = require('../components/JobsHome');
var JobsHomeActions = require('../actions/JobsHomeActions');

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(JobsHomeActions, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(JobsHome);
