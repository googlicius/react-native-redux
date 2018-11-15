import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default ({ value, placeholder, onChangeText, onSubmitEditing }) => {
    return (
        <TextInput
            style={styles.input}
            value={value || null}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 5
    }
})