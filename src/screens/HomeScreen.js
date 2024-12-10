import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
    Modal,
    TextInput,
    Button,
} from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
    const [notes, setNotes] = useState([
        { id: '1', title: 'Tugas 3 Pratikum', description: 'Pelajari hooks dan lifecycle.', date: '2024-12-10' },
        { id: '2', title: 'Belajar React Native', description: 'Diskusi dengan tim pukul 14:00.', date: '2024-12-11' },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [newNoteDescription, setNewNoteDescription] = useState('');

    const addNote = () => {
        if (newNoteTitle.trim() && newNoteDescription.trim()) {
            const newNote = {
                id: (notes.length + 1).toString(),
                title: newNoteTitle,
                description: newNoteDescription,
                date: new Date().toISOString().split('T')[0],
            };
            setNotes([...notes, newNote]);
            setNewNoteTitle('');
            setNewNoteDescription('');
            setModalVisible(false);
        } else {
            alert('Judul dan deskripsi tidak boleh kosong!');
        }
    };

    const renderNoteItem = ({ item }) => (
        <TouchableOpacity style={styles.noteItem} onPress={() => alert(`Detail: ${item.title}\n${item.description}`)}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteDescription}>{item.description}</Text>
            <Text style={styles.noteDate}>{item.date}</Text>
        </TouchableOpacity>
    );

    useEffect(() => {
        console.log('HomeScreen Mounted');
        return () => {
            console.log('HomeScreen Unmounted');
        };
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={renderNoteItem}
                contentContainerStyle={styles.notesList}
            />
            <View style={styles.footer}>
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.input}
                            placeholder="Judul Catatan"
                            value={newNoteTitle}
                            onChangeText={setNewNoteTitle}
                        />
                        <TextInput
                            style={[styles.input, { height: 100 }]}
                            placeholder="Deskripsi Catatan"
                            value={newNoteDescription}
                            onChangeText={setNewNoteDescription}
                            multiline={true}
                        />
                        <Button title="Tambah Catatan" onPress={addNote} />
                        <Button title="Batal" onPress={() => setModalVisible(false)} color="red" />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCE4EC',
    },
    notesList: {
        padding: 10,
    },
    noteItem: {
        backgroundColor: '#FFF',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    noteTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    noteDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    noteDate: {
        fontSize: 12,
        color: '#999',
        marginTop: 10,
        textAlign: 'right',
    },
    footer: {
        padding: 10,
        alignItems: 'center',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
});

export default HomeScreen;
