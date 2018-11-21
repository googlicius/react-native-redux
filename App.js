import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Game from './game';

var playground = [
  0, 0, 2, 2, 2, 0, 0,
  0, 0, 2, 2, 2, 0, 0,
  2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 1, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2,
  0, 0, 2, 2, 2, 0, 0,
  0, 0, 2, 2, 2, 0, 0,
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Game playground={playground} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 24
  },
  dlkfj: {
    textAlign: 'center'
  }
});