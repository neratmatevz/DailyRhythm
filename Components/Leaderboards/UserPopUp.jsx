// UserPopup.js
import React from 'react';
import { View, Text, Image, StyleSheet, Modal, Button, FlatList  } from 'react-native';
import AchievementCard from '../Profile/AchievementsCard/AchievementCard';

const UserPopUp = ({ user, visible, onClose }) => {
    const achievements = [
        { id: 1, naziv: 'Achievement 1', opis: "Opis dosezka", datum: "2021-05-05" },
        { id: 2, naziv: 'Achievement 2', opis: "Opis dosezka", datum: "2021-05-05" },
        { id: 3, naziv: 'Achievement 1', opis: "Opis dosezka", datum: "2021-05-05" },
        { id: 4, naziv: 'Achievement 2', opis: "Opis dosezka", datum: "2021-05-05" },
        { id: 5, naziv: 'Achievement 3', opis: "Opis dosezka", datum: "2021-05-05" },
    ];

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{user.name}</Text>
                    <Image source={user.profilePicture} style={styles.modalProfilePic} />
                    <Text>Score: {user.score}</Text>
                    <FlatList 
                    data={achievements}
                    renderItem={({item}) => (
                        <AchievementCard
                            item={item}
                        />
                        
                    )}
                    keyExtractor={item => item?.id}
                    horizontal
                />
                    <Button title="Close" onPress={onClose} />

                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '100%',
        height: '1fr',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalProfilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
});

export default UserPopUp;
