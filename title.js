import { View, StyleSheet, Text } from 'react-native';

export const Title = ({ children }) => (
    <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blueskue',
        padding: 15
    },
    title: {
        textAlign: 'center',
        color: 'white'
    }
})