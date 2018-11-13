import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from './todo-list.action';

class Input extends Component {
    state = {
        text: ''
    }

    onChangeText = (text) => {
        this.setState({ text })
    }

    onSubmitEditing = () => {
        const { addTodo } = this.props;
        const { text } = this.state;

        if (!text) return false;

        addTodo(text);
        this.setState({ text: '' })
    }

    render() {
        const { placeholder } = this.props;
        const { text } = this.state;
        return (
            <TextInput
                style={styles.input}
                value={text}
                placeholder={placeholder}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        height: 50,
    }
});

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(Input);