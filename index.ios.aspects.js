/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SliderIOS
} = React;

var windowWidth = require('Dimensions').get('window').width;

var ReduxCounterUniversal = React.createClass({
  getInitialState: function () {
    return {
      value: 0.75
    };
  },

  render: function() {

    /*
     * The width of the parent view of the images
     * can be changes using the slider!
     */
    var viewWidth = this.state.value * windowWidth;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcome}>
         AspectRatioBox Demo
        </Text>
        <Text style={styles.instructions}>
          The image is wrapped inside a view. Its width is controlled using the slider below. There is no styling on the images.
        </Text>

        <SliderIOS
          style={styles.slider}
          value={this.state.value}
          onValueChange={(value) => this.setState({value: value})} />

        <View style={{width: viewWidth, backgroundColor: 'white'}}>
          <Image
            aspectRatio={{
              width: 612,
              height: 456,
            }}
            source={{
              uri: "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg",
            }}
          />

          {/* 1x1 Aspect Ratio - Square Box. */}
          <View aspectRatio={1}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Image
                style={{flex: 1}}
                source={{uri: "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg"}}
              />
              <Image
                style={{flex: 2}}
                source={{uri: "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg"}}
              />
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Image
                style={{flex: 3}}
                source={{uri: "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg"}}
              />
              <Image
                style={{flex: 2}}
                source={{uri: "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg"}}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  slider: {
    alignSelf: 'stretch',
    height: 10,
    margin: 10,
  },
});

AppRegistry.registerComponent('ReduxCounterUniversal', () => ReduxCounterUniversal);