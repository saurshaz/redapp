

/**
 * rn-drawer example app
 * https://github.com/facebook/react-native
 */
var React = require('react-native');
var {
  AppRegistry,
  Text,
  Component,
  View,
} = React;

var styles = require('./styles')
var drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}



var { Provider } = require('react-redux/native');
var Drawer = require('react-native-drawer')
// var App = require('./src/containers/App');
var configureStore = require('../../src/store/configureStore');

var MyMainView = require('./MainViewContent')
var MyControlPanel = require('./ControlPanel')

var deviceScreen = require('Dimensions').get('window')
var tweens = require('./tweens')

var counter = 0
var store = configureStore();

export default class extends Component {
  


  
  openDrawer(){
    this.refs.drawer.open()
  }

  
  render() {
    var controlPanel = <MyControlPanel closeDrawer={() => {this.refs.drawer.close()}}
     openDrawer={() => {this.refs.drawer.open()}} />
    return (
      <Drawer
        ref="drawer"
        type="overlay"
        openDrawerOffset={80} //50px gap on the right side of drawer
        panCloseMask={1} //can close with right to left swipe anywhere on screen
        styles={{
          drawer: {
            shadowColor: "#000000",
            shadowOpacity: 0.4,
            shadowRadius: 0,
          }
        }}
        tweenHandler={(ratio) => {
          return {
            drawer: { shadowRadius: Math.min(ratio*5*5, 5) },
            main: { opacity:(2-ratio)/2 },
          }
        }}
        content={controlPanel}
        
        >
        <MyMainView />
      </Drawer>
    );
  }
};