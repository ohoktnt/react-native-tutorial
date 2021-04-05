import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'; //for iOS/Android
import {Button, withTheme} from 'react-native-elements'; //3rd party pkg allows display different comps
import { SafeAreaProvider } from 'react-native-safe-area-context';

// to be able to use react-native-elements, you need to configure by npm installing then npx linking

// creating class
export default class App extends Component {
  // component converts our class into native iOS and Andriod code
  // export defaults - so that we can use it in various files

  // piece of code that runs when you first launch app or this class
  constructor(props) {
    super(props); // this gives us access to the parent class

    // create a state variable - a variable that updates within the app
    // this.state is creating a dictionary that will hold all of our state variables 
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    const { count } = this.state;
    this.setState({count: count + 1})
  }

  handleClick = () => {
    alert('button click')
  }

  render(){
    const {count} = this.state;

    // this method can render components, data on our app
    return (
      <View style={styles.rootContainer}> 
        {/* In the view component, it will hold all the UI data
        can also hold logic. basically container for cold */}
        {/* <Text>Hello World</Text> - replace with another View container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tutorial App</Text>
        </View>
        <View style={styles.outputContainer}>
          <Text style={styles.output}>{count}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Press Me" 
            buttonStyle={styles.button} 
            onPress={this.incrementCount.bind(this)} ></Button>
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
  },
  button: {
    width: 200, 
    height: 57,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  outputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  output: {
    fontSize: 30,
  }
})