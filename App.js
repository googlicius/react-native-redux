import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './todo';
import { reducer } from './reducer';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Todo />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)'
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5
  }
});