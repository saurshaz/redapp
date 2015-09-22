import React from 'react-native';

var {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

var styles = require('../styles');
import Drawer from 'react-native-drawer';
import MyControlPanel  from '../ControlPanel';
import MyMainView from '../MyMainView';

var deviceScreen = require('Dimensions').get('window')
var tweens = require('../tweens')

var counter = 0
var RNDrawerDemo = React.createClass({
  getInitialState(){
    return {
      drawerType: 'overlay',
      openDrawerOffset:0,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panStartCompensation: true,
      openDrawerThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: true,
      acceptTap: false,
      acceptPan: true,
      rightSide: false,
    }
  },

  setDrawerType(type){
    this.setState({
      drawerType: type
    })
  },

  tweenHandler(ratio){
    if(!this.state.tweenHandlerPreset){ return {} }
    return tweens[this.state.tweenHandlerPreset](ratio)
  },

  noopChange(){
    this.setState({
      changeVal: Math.random()
    })
  },

  openDrawer(){
    this.refs.drawer.open()
  },

  setStateFrag(frag){
    this.setState(frag)
  },

  render() {
    var controlPanel = <DrawerMenu closeDrawer={() => {this.refs.drawer.close()}} />
    return (
      <Drawer
        ref="drawer"
        type="overlay"
        openDrawerOffset={50} //50px gap on the right side of drawer
        panCloseMask={1} //can close with right to left swipe anywhere on screen
        styles={{
          drawer: {
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 0,
          }
        }}
        tweenHandler={(ratio) => {
          return {
            drawer: { shadowRadius: Math.min(ratio*5*5, 5) },
            main: { opacity:(2-ratio)/2 },
          }
        }}
        content={controlPanel} >
        <MyMainView
          drawerType={this.state.drawerType}
          setParentState={this.setStateFrag}
          openDrawer={this.openDrawer}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag= {this.state.relativeDrag}
          panStartCompensation= {this.state.panStartCompensation}
          tweenHandlerOn={this.state.tweenHandlerOn}
          disabled={this.state.disabled}
          openDrawerThreshold={this.state.openDrawerThreshold}
          tweenEasing={this.state.tweenEasing}
          tweenHandlerPreset={this.state.tweenHandlerPreset}
          animation={this.state.animation}
          noopChange={this.noopChange}
          acceptTap={this.state.acceptTap}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptPan={this.state.acceptPan}
          rightSide={this.state.rightSide}
          />
      </Drawer>
    );
  }
});

// AppRegistry.registerComponent('JobsHome', () => RNDrawerDemo);


// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   text: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

module.exports = RNDrawerDemo;



// 'use strict';

// import React, { TouchableHighlight, AppRegistry, StyleSheet, Text, View, Animated, Component, PanResponder, } from 'react-native';
// import clamp from 'clamp';

// const People = [
//   'red',
//   'green',
//   'blue',
//   'purple',
//   'orange',
// ]

// var SWIPE_THRESHOLD = 120;

// export class default extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       pan: new Animated.ValueXY(),
//       enter: new Animated.Value(0.5),
//       person: People[0],
//       yepStaticText: '',
//     }
//   }

//   _goToNextPerson() {
//     let currentPersonIdx = People.indexOf(this.state.person);
//     let newIdx = currentPersonIdx + 1;

//     this.setState({
//       person: People[newIdx > People.length - 1 ? 0 : newIdx]
//     });
//   }

//   componentDidMount() {
//     this._animateEntrance();
//   }

//   _animateEntrance() {
//     Animated.spring(
//       this.state.enter,
//       { toValue: 1, friction: 8 }
//     ).start();
//   }

//   componentWillMount() {
//     this._panResponder = PanResponder.create({
//       onMoveShouldSetResponderCapture: () => true,
//       onMoveShouldSetPanResponderCapture: () => true,

//       onPanResponderGrant: (e, gestureState) => {
//         this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
//         this.state.pan.setValue({x: 0, y: 0});
//       },

//       onPanResponderMove: Animated.event([
//         null, {dx: this.state.pan.x, dy: this.state.pan.y},
//       ]),

//       onPanResponderRelease: (e, {vx, vy}) => {
//         this.state.pan.flattenOffset();
//         var velocity;

//         if (vx > 0) {
//           velocity = clamp(vx, 3, 5);
//         } else if (vx < 0) {
//           velocity = clamp(vx * -1, 3, 5) * -1;
//         }

//         if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
//           Animated.decay(this.state.pan.x, {
//             velocity: velocity,
//             deceleration: 0.98,
//           }).start(this._resetState.bind(this))

//           Animated.decay(this.state.pan.y, {
//             velocity: vy,
//             deceleration: 0.985,
//           }).start();
//         } else {
//           Animated.spring(this.state.pan, {
//             toValue: {x: 0, y: 0},
//             friction: 4
//           }).start()
//         }
//       }
//     })
//   }

//   _resetState() {
//     this.state.pan.setValue({x: 0, y: 0});
//     this.state.enter.setValue(0);
//     this.state.yepStaticText='Changed Text';
//     this._goToNextPerson();
//     this._animateEntrance();
//   }

//   render() {
//     let { pan, enter, } = this.state;

//     let [translateX, translateY] = [pan.x, pan.y];

//     let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
//     let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]})
//     let scale = enter;

//     let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};

//     let yupOpacity = pan.x.interpolate({inputRange: [0, 150], outputRange: [0, 1]});
//     let yupScale = pan.x.interpolate({inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp'});
//     let animatedYupStyles = {transform: [{scale: yupScale}], opacity: yupOpacity}

//     let nopeOpacity = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0]});
//     let nopeScale = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp'});
//     let animatedNopeStyles = {transform: [{scale: nopeScale}], opacity: nopeOpacity}

//     return (
//       <View style={styles.container}>
//         <Animated.View style={[styles.card, animatedCardStyles, {backgroundColor: this.state.person}]} {...this._panResponder.panHandlers}>
//           <View style={styles.head}>
//           <Text style={styles.title}>
//             {this.props.post_title}
//           </Text>
//           <TouchableHighlight 
//             onPress={() => this.openPage()}
//             underlayColor='#F6F6EF'>
//           <Text style={styles.source}>
//             (Source)
//           </Text>
//           </TouchableHighlight>
//           <Text style={styles.text}>
//             {this.state.post_text}
//           </Text>
//           <Text style={styles.postDetailsLine}>
//             Posted by Username | 18 Points
//           </Text>
//           <View style={styles.separator}/>
//           <Text style={styles.commentTitle}>{this.props.post_comments_count} Comments:</Text>
//           <Text style={styles.loadingText}>Fetching Comments...</Text>
//           </View>
//         </Animated.View>

//         <Animated.View style={[styles.nope, animatedNopeStyles]}>
//           <Text style={styles.nopeText}>Nope!</Text>
//           <Text ref='yepStatic'>{this.state.yepStaticText}</Text>
//         </Animated.View>

//         <Animated.View style={[styles.yup, animatedYupStyles]}>
//           <Text style={styles.yupText}>Yup!</Text>
//           <Text ref='yepStatic'>{this.state.yepStaticText}</Text>
//         </Animated.View>
//       </View>
//     );
//   }
// }

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   card: {
//     width: 300,
//     height: 300,
//     backgroundColor: 'red',
//   },
//   yup: {
//     borderColor: 'green',
//     borderWidth: 2,
//     position: 'relative',
//     padding: 20,
//     bottom: 20,
//     borderRadius: 5,
//     right: 20,
//   },
//   yupText: {
//     fontSize: 16,
//     color: 'green',
//   },
//   nope: {
//     borderColor: 'red',
//     borderWidth: 2,
//     position: 'relative',
//     bottom: 20,
//     padding: 20,
//     borderRadius: 5,
//     left: 20,
//   },
//   nopeText: {
//     fontSize: 16,
//     color: 'red',
//   },
//   title:{
//     fontSize: 20,
//     textAlign: 'left',
//     marginTop: 10,
//     marginBottom: 10,
//     color: '#FF6600',
//   },
//   text:{
//     fontSize: 14,
//     marginBottom: 3,
// },
//   source:{
//     fontSize: 15,
//     textAlign: 'left',
//     color: '#0089FF',
//   },
//   separator: {
//     height: 0.5,
//     backgroundColor: '#CCCCCC',
//   },
//   loadingText:{
//     color: '#FF6600',
//     marginTop: 5,
//     fontSize: 15,
//   },
//   commentTitle: {
//     marginTop: 10,
//     color: 'gray',
//   },
//   commentsLoading: {
//     marginLeft: 10,
//     color: '#FF6600',
//   },
//   commentListView:{
//     color: '#000000',
//     margin: 0,
//     padding: 0,
//     backgroundColor: '#F6F6EF',
//   },
//   postDetailsLine: {
//     fontSize: 12,
//     marginBottom: 10,
//     color: 'gray',
//   },
// });

// AppRegistry.registerComponent('JobsHome', () => Flix);
