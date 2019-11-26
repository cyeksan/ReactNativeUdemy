import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class MyInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      displayedText: '',
    };
  }

  textChangeHandler = inputText => {
    this.setState({
      text: inputText,
    });
  };

  buttonClickListener = () => {
    let {text} = this.state;
    this.setState({
      displayedText: text,
      text: ''
    });

  };


  render() {
    return (
      <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center', margin: 30}}>
        <TextInput
          {...this.props}
          placeholder="Please enter some text"
          editable
          maxLength={40}
          onChangeText={this.textChangeHandler}
          value={this.state.text}        
          ></TextInput>
        <Text>{this.state.displayedText}</Text>
        <TouchableOpacity onPress={this.buttonClickListener}>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: 'blue',
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

export default MyInput;
