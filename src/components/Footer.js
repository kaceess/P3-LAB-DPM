import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Footer = () => {
    const handleAddNote = () => {
        alert('Tambah catatan baru!');
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        backgroundColor: '#F8BBD0', // Light pink
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        width: 60,
        height: 60,
        backgroundColor: '#F06292',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    addButtonText: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default Footer;
