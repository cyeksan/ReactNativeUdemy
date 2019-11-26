import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


class RandomNumberCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        randomNumber: 0,
    };

    this.createRandomNumberHandler = this.createRandomNumberHandler.bind(this);
  }
  createRandomNumberHandler() {
      this.setState({
          randomNumber: Math.random().toPrecision(2)*100
      })
  }
  render() {
    return (
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center', margin: 30}}>
        <Text style={{fontSize: 24}}>Random number: {this.state.randomNumber}</Text>
        <TouchableOpacity onPress={this.createRandomNumberHandler}>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: 'orange',
              height: 30,
              width: 100,
              justifyContent: 'center',
            }}>
            <Text style={{alignSelf: 'center', color: 'white'}}>Click Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RandomNumberCreator;
