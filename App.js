import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import Input from './input';
import List from './list';
import Title from './title';
import { reducer } from './todo-list.reducer';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  addTodo() {
    console.log("Add to-do");
  }

  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Title>To-do list</Title>
          <Input placeholder="Type your to-do..." />
          <List />
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
  }
});