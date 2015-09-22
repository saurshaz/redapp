var React = require('react-native')

var {
  SwitchIOS,
  View,
  ScrollView,
  Component,
  Text,
  Image,
} = React

var styles = require('./styles')
var Button = require('./Button')

export default class extends Component {

  setParentState(args){
    this.props.setParentState(args)
  }

  render(){
    return (

      <ScrollView
        pointerEvents="box-none"
        style={styles.scrollView}
        scrollEventThrottle={200}
        contentInset={{top: 0}}
        >
          <Text style={styles.welcome}>
            <Text style={styles.rowLabel} onPress={this.props.closeDrawer}>Welcome </Text>
          </Text>
          <Image source={{
              uri: "http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg",
            }} style={ styles.cellImage }
            />
          <Text style={styles.categoryLabel}>
            <Text style={styles.rowLabel}>My Matches</Text>
          </Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Profile</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>My Yep List</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>My Nope List</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Settings</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Logout</Text>
          </View>
      </ScrollView>
      
    )
  }
};
