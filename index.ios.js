/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {Surface} from 'gl-react-native'
import ImageFilter from 'gl-react-imagefilters'
const {Image: GLImage} = require('gl-react-image');
import Dimensions from 'Dimensions';

height = Dimensions.get('window').height;
width = Dimensions.get('window').width;

var filter = [
  {
    name: 'origin',
    sepia : 0,
    hue : 0,
    blur: 0,
    sharpen:0,
    negative:0,
    contrast:1,
    saturation:1,
    brightness:1,
    temparature:6500
  },
  {
    name:'sample1',
    sepia : 0,
    hue : 0.00379752802194977,
    blur: 0,
    sharpen:0.14914415229748545,
    negative:0,
    contrast:1,
    saturation:1.7986548115091614,
    brightness:1,
    temparature:8725
  },
  {
    name:'sample2',
    sepia : 0,
    hue : 0,
    blur: 0,
    sharpen:1,
    negative:1,
    contrast:2,
    saturation:1,
    brightness:1,
    temparature:6500
  },
  {
    name:'sample3',
    sepia : 0,
    hue : 0,
    blur: 0,
    sharpen:0,
    negative:0,
    contrast:1,
    saturation:2,
    brightness:2,
    temparature:5500
  }
]

export default class reactNativeImageFilterApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      index:0,
      img : null
    }

    this.changeIndex = this.changeIndex.bind(this);
  }


  changeIndex(index){
    this.setState({
      index : index
    })
  }

  exportFile(){
    this.surface.captureFrame({
      type: 'png'}).then((data) => { this.setState({uploaded:data})})
    }

  render() {
    return (
      <View id="bodyImage">
          <Surface ref={(ref) => { this.surface = ref; }} width={width} height={width}>
            <ImageFilter sepia={filter[this.state.index].sepia} hue={filter[this.state.index].hue} blur={filter[this.state.index].blur} sharpen={filter[this.state.index].sharpen} negative={filter[this.state.index].negative} contrast={filter[this.state.index].contrast} saturation={filter[this.state.index].saturation} brightness={filter[this.state.index].brightness} temparature={filter[this.state.index].temparature}>
              <GLImage
                id="aaa"
                source={{
                  uri: this.state.img ? this.state.img :"http://placehold.it/600x400&text=Input+Your+Image",
                  width: width,
                  height: width
                }}
                resizeMode="contain"
              />
            </ImageFilter>
          </Surface>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('reactNativeImageFilterApp', () => reactNativeImageFilterApp);
