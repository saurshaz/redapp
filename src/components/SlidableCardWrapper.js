
var React = require('react-native');
// var api = require('../Utils/api');
// var Thumb = require('./Thumb');


var {
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  TouchableHighlight,
  ActivityIndicatorIOS,
} = React;

var apPath = 'https://alpine-property.com/content';
var JobsHome = require('./JobsHome');



class Thumb extends React.Component{
  
  render() {
    return (
      <View style={styles.thumbView}>
        <Image style={styles.thumb} source={{uri:this.props.uri}} />
      </View>
    );
  }
};

Thumb.propTypes = {
  uri: React.PropTypes.string.isRequired
}

export default class extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      error: ''
    }

    // setTimeout(()=>{
      this.property = {brief:'Lorem Ipsum Ipsed ... Lorem Ipsum Ipsed Lorem Ipsum Ipsed Lorem Ipsum Ipsed',price:'10000'};
      this.images = ['http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg','http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg','http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg'];
      this.mainImage = `http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg`;
      this.agentImage =  `http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg`;

      // this.setState({
      //   isLoading: false
      // });
    // },1000));

    // api.getProperty(this.props.rowData.id)
    // .then((jsonRes) => this.handleResponse(jsonRes))
    // .catch((err) => {
    //   this.setState({
    //     error: `There was an error: ${err}`
    //   })
    // })
  }

  handleResponse(res){
    // this.property = {brief:'Lorem Ipsum Ipsed ... Lorem Ipsum Ipsed Lorem Ipsum Ipsed Lorem Ipsum Ipsed',price:'10000'};
    // this.images = ['http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg','http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg','http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg'];
    // this.mainImage = `http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg`;
    // this.agentImage =  `http://edibleapple.com/wp-content/uploads/2009/11/steve-jobs-bill-gates-1991.jpg`;

    // this.setState({
    //   isLoading: false
    // });
  }

  renderProperty(){
    if(!this.state.isLoading){
      return (
        <View style={styles.mainContainer}>
          
          <Image style={styles.image} 
              source={{uri: this.mainImage}} />
              
          <Image style={styles.agent} 
              source={{uri: this.agentImage}} 
              />

          <JobsHome brief={this.property.brief} />

          <Text style={styles.brief}></Text>
        </View>
        );
    }
    else return (      
      <View  style = {styles.centering}>
      <ActivityIndicatorIOS
            animating={this.state.isLoading}
            color="#C23452"
            size="large"> 
        </ActivityIndicatorIOS>
        </View>);
  }

  render(){
          return (
            <ScrollView>
            {this.renderProperty()}
            </ScrollView>
    )
    }
};


function createThumbRow(uri, i){
  var path = `${apPath}/thumbs/${uri}`;
  return <Thumb key={i} uri={path} />;
};

//red normal  = #C23452, red dark = #A82D47, red darker = #7A2133 , web page bg = #F8F7F2
var styles = StyleSheet.create({

  thumb:{
    height:113,
    width:150,
  },

  thumbView:{
    paddingRight:2
  },

    mainContainer: {
    flex: 1,
    padding: 0,
    //marginTop: 44,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F8F7F2'
  },
    image: {
      //width: 335,
      height: 223,
      alignSelf: 'stretch'
    },
  agent: {
    width: 100,
    height: 100,
    marginTop: -50,
    alignSelf: 'center',
    borderRadius: 50
  },

  brief: {
    margin:10
  },

  horizontalScrollView: {
    height: 140,
   // backgroundColor: '#ccc'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10

  },

});