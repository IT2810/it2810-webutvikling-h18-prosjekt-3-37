import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Body, Text, ListItem, CheckBox } from 'native-base';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: (this.props.name === null) ? "Default name" : this.props.name,
    };
  }

  render() {
    return (
      <ListItem>
        <CheckBox onPress={() => this.props.onClick()} checked={ this.props.checked } />
        <Body><Text> { this.state.name } </Text></Body>
      </ListItem>
    )
  }
}
