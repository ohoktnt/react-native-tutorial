import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'; //for iOS/Android
import {Button} from 'react-native-elements'; //3rd party pkg allows display different comps

// to be able to use react-native-elements, you need to configure by npm installing then npx linking

// creating class
export default class App extends Component {
  // component converts our class into native iOS and Andriod code
  // export defaults - so that we can use it in various files
  render(){
    // this method can render components, data on our app
    return (
      <View> 
        {/* In the view component, it will hold all the UI data
        can also hold logic. basically container for cold */}
        <Text>Hello World</Text>
      </View>
    )
  }
}