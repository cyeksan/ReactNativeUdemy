import React from 'react';
import {View, Picker, Text, TouchableOpacity} from 'react-native';

class MyPicker extends React.Component {
  buttonClickListener() {

  }
  constructor(props) {
    super(props);
    this.state = {
      fruit: 'orange',
    };
  }
  render() {
    return (
      <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center', margin: 30}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Picker
            selectedValue={this.state.fruit}
            style={{height: 50, width: 150, flex: 0.5,}}
            onValueChange={itemValue => this.setState({fruit: itemValue})}>
            <Picker.Item label="Orange" value="orange" />
            <Picker.Item label="Apple" value="apple" />
            <Picker.Item label="Strawberry" value="strawberry" />
            <Picker.Item label="Banana" value="banana" />
          </Picker>
          <Text
            style={{flex: 0.25, alignSelf: 'center', justifyContent: 'center'}}>
            {this.state.fruit}
          </Text>
        </View>
      </View>
    );
  }
}

export default MyPicker;
