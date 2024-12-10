import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Content = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Enjoy the soothing pink theme!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#880E4F',
    },
});

export default Content;
