import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LeaderboardItem = ({ rank, user, score }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.rank}>{rank}</Text>
            <Image source={{ uri: user.profilePicture }} style={styles.profilePic} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.score}>{score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rank: {
        
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25, 
    },
    name: {
        
    },
    score: {
    },
});

export default LeaderboardItem;
