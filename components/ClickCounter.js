import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickNumber: 0,
    };

    this.updateClickNumberHandler = this.updateClickNumberHandler.bind(this)
  }

  componentDidMount() {
    console.log('Component did mount.');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Get derived state from props: ' + JSON.stringify(props) + JSON.stringify(state));
    return true
  }

  shouldComponentUpdate(newProps, nextState) {
    console.log(
      'Should component update: ' +
        JSON.stringify(newProps) +
        ' ' +
        JSON.stringify(nextState),
    );
    return true;
  }

  componentDidUpdate(newProps, nextState) {
    console.log(
      'Component did update: ' +
        JSON.stringify(newProps) +
        ' ' +
        JSON.stringify(nextState),
    );
  }

  componentWillUnmount() {
    console.log('Component will unmount.');
  }

  updateClickNumberHandler() {
    this.setState({
      clickNumber: this.state.clickNumber + 1,
    });
  }
  render() {
    return (
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center', margin: 30}}>
        <Text style={{fontSize: 24}}>Click number: {this.state.clickNumber}</Text>
        <TouchableOpacity onPress={this.updateClickNumberHandler}>
          <View style={{borderRadius:8, backgroundColor: 'green', height: 30, width: 100, justifyContent: 'center'}}>
            <Text style={{alignSelf: 'center', color: 'white'}}>Click Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ClickCounter;
