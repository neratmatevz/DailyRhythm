// Leaderboard.jsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import LeaderboardItem from './LeaderboardItem';
import db from '../../Assets/Database/db';


const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [points, setPoints] = useState(0);

    const fetchedData = [
        { id: '14', name: 'Alice', score: 1200, profilePicture: require('../../Assets/Icons/person.png') },
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


    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM profil WHERE id = 1;',
                [],
                (_, result) => {
                    const profile = result.rows._array[0];
                    console.log(profile);

                    if (profile !== undefined && profile !== null) {
                        setProfile((prevProfile) => {
                            const updatedProfile = { ...prevProfile, ...profile };
                            setPoints(updatedProfile.stTock);

                            const user = {
                                id: updatedProfile.id,
                                name: updatedProfile.upIme,
                                score: updatedProfile.stTock,
                                profilePicture: require('../../Assets/Icons/person.png'),
                            };

                            const updatedData = [...fetchedData, user];
                            const sortedData = updatedData.sort((a, b) => b.score - a.score);

                            console.log("Data sorted");
                            setTimeout(() => {
                                setLeaderboardData(sortedData);
                                setLoading(false);
                            }, 1500);

                            return updatedProfile;
                        });
                    } else {
                        console.error('Profile undefined or null');
                    }
                },
                (_, error) => {
                    console.error('Error fetching data:', error);
                }
            );
        });
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
