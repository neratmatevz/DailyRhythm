import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import UserPopUp from './UserPopUp';


const LeaderboardItem = ({ rank, user }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
            <View style={[styles.container, getRankStyle(rank)]}>
                <Text style={styles.rank}>{rank}</Text>
                <Image source={user.profilePicture} style={styles.profilePic} />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.score}>{user.score}</Text>

                <UserPopUp
                    user={user}
                    visible={modalVisible}
                    onClose={closeModal} />
            </View>
        </TouchableOpacity>
    );
};

const getRankStyle = (rank) => {
    switch (rank) {
        case 1:
            return styles.gold;
        case 2:
            return styles.silver;
        case 3:
            return styles.bronze;
        default:
            return styles.defaultRank;
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff', 
        borderRadius: 8,
        marginVertical: 5,
    },
    rank: {
        marginRight: 10,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    gold: {
        backgroundColor: 'gold',
    },
    silver: {
        backgroundColor: 'silver',
    },
    bronze: {
        backgroundColor: '#cd7f32',
    },
    defaultRank: {},
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    name: {
        flex: 1,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    score: {
        marginLeft: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
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

export default LeaderboardItem;
