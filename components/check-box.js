import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Checkbox = ({ isChecked, onToggle }) => (
    <TouchableOpacity onPress={onToggle}>
        <View style={styles.box}>
            {isChecked && <View style={styles.inner}/>}
        </View>
    </TouchableOpacity>
)

Checkbox.propTypes = {
    onToggle: PropTypes.func,
    isChecked: PropTypes.bool
}

export default Checkbox;

const styles = StyleSheet.create({
    box: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 10
    },
    inner: {
        flex: 1,
        margin: 2,
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
})