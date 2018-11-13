import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

class List extends Component {
    state = {}

    componentWillMount() {
        this.setState({ todos: [] })
    }

    renderItem(text, i) {
        const { onPressItem } = this.props;

        return (
            <TouchableOpacity style={styles.item} onPress={() => onPressItem(i)}>
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

}

export default connect(mapStateToProps, mapDispatchToProps)(List);