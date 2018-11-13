import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { removeTodo } from './todo-list.action';

class List extends Component {
    state = {
        todos: []
    }

    componentWillMount() {
        const { todos } = this.props;
        this.setState({ todos });
    }

    componentWillReceiveProps(nextProps) {
        const { todos } = nextProps;
        this.setState({ todos });
    }

    renderItem = (text, i) => {
        const { removeTodo } = this.props;

        return (
            <TouchableOpacity style={styles.item} key={i} onPress={() => removeTodo(i)}>
                <Text>{text}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { todos } = this.state;
        return (
            <View>
                {todos.map(this.renderItem)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'whitesmoke',
        marginBottom: 5,
        padding: 15,
    },
});

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(List);