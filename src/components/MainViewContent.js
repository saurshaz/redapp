var React = require('react-native')

var {
  SwitchIOS,
  SliderIOS,
  PickerIOS,
  PickerItemIOS,
  View,
  ScrollView,
  Text,
  Image,
} = React

var styles = require('./styles')
var Button = require('./Button')

var drawerTypes = ['overlay', 'displace', 'static']
var BlurView = require('react-native-blur').BlurView;
import SlidableCardWrapper from './SlidableCardWrapper';



module.exports = React.createClass({
  setParentState(args){
    this.props.setParentState(args)
  },

  render(){
    let uri = "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg";
    return (
      
            <View style={styles.container}>
              <SlidableCardWrapper />
            </View>
          
        
      
    )
  }
})
