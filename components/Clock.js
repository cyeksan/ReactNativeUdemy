import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  render() {
    return (
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', margin: 30}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{this.props.greetingByName}</Text>
        <Text style={{fontSize: 30}}>
          {this.state.date.toLocaleTimeString()}
        </Text>
      </View>
    );
  }

}

Clock.defaultProps = {
    greetingByName: 'Hi!'
}

Clock.propTypes = {
    greetingByName : PropTypes.string.isRequired
}

export default Clock;
