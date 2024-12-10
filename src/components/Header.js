import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Memo Notes</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#F06292', // Pink
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default Header;
