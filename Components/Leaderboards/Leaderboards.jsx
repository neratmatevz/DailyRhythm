// Leaderboard.jsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import LeaderboardItem from './LeaderboardItem';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchedData = [
            { id: '1', name: 'Alice', score: 1200, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '2', name: 'Bob', score: 1100, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '3', name: 'Mark', score: 4201, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '4', name: 'Amanda', score: 1500, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '5', name: 'John', score: 1700, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '7', name: 'Lily', score: 1200, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '8', name: 'Kali', score: 1100, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '9', name: 'Grant', score: 4200, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '10', name: 'Steve', score: 1500, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '11', name: 'Johny', score: 1700, profilePicture: require('../../Assets/Icons/person.png') },
            { id: '12', name: 'Marko', score: 1643, profilePicture: require('../../Assets/Icons/person.png') },
        ];


        const sortedData = fetchedData.sort((a, b) => b.score - a.score);

        setTimeout(() => {
            setLeaderboardData(sortedData);
            setLoading(false);
        }, 1500);
    }, []);

    return (

        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <FlatList
                    data={leaderboardData}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => (
                        <LeaderboardItem
                            rank={index + 1}
                            user={item}
                        />
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%', 
        backgroundColor: "#f5f5f5",
        
    },
});


export default Leaderboard;
