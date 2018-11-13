import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default Title = ({ children }) => (
    <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        padding: 15
    },
    title: {
        textAlign: 'center',
        color: 'white'
    }
})