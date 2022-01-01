import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';



class Task extends React.Component {
  render(){
    return(
      <Text style={{textAlign:'center',fontSize:0.2}} >{this.props.text}</Text>
    )
  }
}

export default class basics extends React.Component {

  constructor(){
    super();

    this.state = {
      showSign : true
    }

    setInterval(() => {
      this.setState({showSign: !this.state.showSign})
    }, 1000);
  }
  
  render() {
    let mensaje = (this.state.showSign) ? 'Welcome VR' :'';


    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}/>
        <View style={{transform:[{translate:[0,0,-3]}], layoutOrigin: [0.5,0.5]  }}>
            <Text style={{fontSize:0.1,transform:[{translate:[-1,0,-2]}]}} >{mensaje}</Text>
            <Task text='First item'/>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('basics', () => basics);
