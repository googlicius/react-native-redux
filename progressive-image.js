import React, { Component } from 'react';
import { StyleSheet, Image, View, Animated } from 'react-native';

export default class ProgressiveImage extends Component {
    thumbnailAnimated = new Animated.Value(0);
    imageAnimated = new Animated.Value(0);

    render() {
        const { thumbnailSource, source, style, ...props } = this.props;
        return (
            <View style={styles.container}>
                <Animated.Image {...props} source={thumbnailSource} style={style} blurRadius={2} />
                <Animated.Image {...props} source={source} style={[style, styles.imageOverlay]} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    },
    container: {
        backgroundColor: '#e1e4e8'
    }
})