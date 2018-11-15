import React, { Component } from 'react';
import { View } from 'react-native';
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
        AddTodo(this.state.inputValue);
        this.setState({ inputValue: null });
    }

    render() {
        const { todos, ToggleCompleted, RemoveTodo } = this.props;
        return (
            <View>
                <Input
                    value={this.state.inputValue}
                    placeholder={'Học React Native...'} 
                    onChangeText={this.onChangeText} 
                    onSubmitEditing={this.onAddTodo} 
                />
                <List todos={todos} onToggleCompleted={ToggleCompleted} onRemove={RemoveTodo} />
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