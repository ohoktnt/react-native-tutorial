import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'; //for iOS/Android
import {Button, withTheme} from 'react-native-elements'; //3rd party pkg allows display different comps

// to be able to use react-native-elements, you need to configure by npm installing then npx linking

// creating class
export default class App extends Component {
  // component converts our class into native iOS and Andriod code
  // export defaults - so that we can use it in various files
  render(){
    // this method can render components, data on our app
    return (
      <View style={styles.rootContainer}> 
        {/* In the view component, it will hold all the UI data
        can also hold logic. basically container for cold */}
        {/* <Text>Hello World</Text> - replace with another View container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tutorial App</Text>
        </View>
      </View>
    )
  }
}

// to create a stylesheet

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'grey', 
    flex: 1
  },
  titleContainer: {
    paddingLeft: 30,
    paddingTop: 100,
  },
  title: {
    fontSize: 30,
  }
})