import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.checkBoxClickHandler = this.checkBoxClickHandler.bind(this)
  }

  checkBoxClickHandler() {

    this.setState({checked: !this.state.checked})
    console.log('' + !this.state.checked)

  }
  render() {
    return (
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 30,
        }}>
        <CheckBox 
        title="Will you come to the party?"
        checked={this.state.checked} 
        onPress={this.checkBoxClickHandler} />
      </View>
    );
  }
}
