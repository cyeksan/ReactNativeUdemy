import React from 'react';
import {View, ScrollView} from 'react-native';
import Clock from './components/Clock';
import ClickCounter from './components/ClickCounter';
import RandomNumberCreator from './components/RandomNumberCreator';
import MyInput from './components/MyInput';
import MyInputClick from './components/MyInputClick';
import MyPicker from './components/MyPicker';
import Reservation from './components/Reservation';


class App extends React.Component {
  
  render() {
    return (
      <ScrollView style={{flex: 1, }}>
        <Clock greetingByName="Hi Cansu!"></Clock>
        <MyInput style={{width: 300, backgroundColor: 'purple', color: 'white'}}></MyInput>
        <MyInputClick style={{width: 300, backgroundColor: 'red', color: 'white'}}></MyInputClick>
        <ClickCounter></ClickCounter>
        <RandomNumberCreator></RandomNumberCreator>
        <MyPicker></MyPicker>
        <Reservation></Reservation>
      </ScrollView>
    );
  }
}

export default App;
