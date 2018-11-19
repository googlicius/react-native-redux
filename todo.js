import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import Input from './components/input';
import List from './components/list';
import { connect } from 'react-redux';
import * as fromAction from './action';

class Todo extends Component {
    state = {
        inputValue: null
    }
    onChangeText = (text) => {
        this.setState({ inputValue: text });
    }

    onAddTodo = () => {
        const { AddTodo } = this.props;
        if(this.state.inputValue !== null && this.state.inputValue.trim().length > 0) {
            AddTodo(this.state.inputValue);
            this.setState({ inputValue: null });
        }
    }

    handleRemoveTodo = (i) => {
        const { RemoveTodo, todos } = this.props;
        const todoToRemove = todos.find((todo, index) => index == i);
        if(!todoToRemove.completed) {
            Alert.alert("Chưa hoàn thành", "Task này chưa hoàn thành, bạn có chắc muốn xóa?", [
                { text: "OK", onPress: () => RemoveTodo(i) },
                { text: "Hủy", onPress: () => {}, style: 'cancel' }
            ])
        }
        else {
            RemoveTodo(i);
        }
    }

    render() {
        const { todos, ToggleCompleted } = this.props;
        return (
            <View>
                <Input
                    value={this.state.inputValue}
                    placeholder={'Học React Native...'} 
                    onChangeText={this.onChangeText} 
                    onSubmitEditing={this.onAddTodo} 
                />
                <List todos={todos} onToggleCompleted={ToggleCompleted} onRemove={this.handleRemoveTodo} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    AddTodo: fromAction.AddTodo,
    ToggleCompleted: fromAction.ToggleCompleted,
    RemoveTodo: fromAction.RemoveTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);