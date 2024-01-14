import
React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import LeaderboardItem from './LeaderboardItem';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchedData = [
            { id: '1', name: 'Alice', score: 1200, profilePicture: '../Assets/Icons/person.png' },
            { id: '2', name: 'Bob', score: 1100, profilePicture: '../Assets/Icons/person.png' },
            { id: '3', name: 'Alice', score: 1200, profilePicture: '../Assets/Icons/person.png' },
            { id: '4', name: 'Bob', score: 1100, profilePicture: '../Assets/Icons/person.png' },
            { id: '5', name: 'Alice', score: 1200, profilePicture: '../Assets/Icons/person.png' },
            { id: '6', name: 'Bob', score: 1100, profilePicture: '../Assets/Icons/person.png' },
        ];

        setTimeout(() => {
            setLeaderboardData(fetchedData);
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
                            score={item.score}
                        />
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Leaderboard;