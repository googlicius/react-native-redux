import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, ScrollView, Text, StyleSheet } from 'react-native';
import Checkbox from './check-box';

const List = ({ todos, onToggleCompleted, onRemove }) => {
    renderItem = (todo, i) => {
        return (
            <View key={i} style={styles.item}>
                <Text style={styles.item_text}>{todo.text}</Text>
                <Checkbox isChecked={todo.completed} onToggle={() => onToggleCompleted(i)} />
                <TouchableOpacity style={styles.remove_btn} onPress={() => onRemove(i)}>
                    <Text>&times;</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView style={styles.list}>
            {todos.map(renderItem)}
        </ScrollView>
    )
}

List.propTypes = {
    todos: PropTypes.array,
    onToggleCompleted: PropTypes.func,
    onRemove: PropTypes.func
}

const styles = StyleSheet.create({
    list: {
        flexGrow: 1,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginBottom: 5,
        backgroundColor: 'whitesmoke'
    },
    item_text: {
        flexGrow: 1
    },
    remove_btn: {
        marginRight: 10,
        marginLeft: 10
    }
})

export default List;