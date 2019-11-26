import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class MyInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  textChangeHandler = (inputText) => {

    this.setState({
        text: inputText
    })
  }

  render() {
    return (
      <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center', margin: 30}}>
        <TextInput
          {...this.props}
          placeholder="Please enter some text"
          editable
          maxLength={40}
          onChangeText={this.textChangeHandler}></TextInput>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default MyInput;
