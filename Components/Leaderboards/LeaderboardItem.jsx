import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import UserPopUp from './UserPopUp';

const LeaderboardItem = ({ rank, user }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (rank <= 3) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(animatedValue, {
                        toValue: 1,
                        duration: 1500,
                        useNativeDriver: false,
                    }),
                    Animated.timing(animatedValue, {
                        toValue: 0,
                        duration: 1500,
                        useNativeDriver: false,
                    }),
                ])
            ).start();
        }
    }, [animatedValue, rank]);


    const getGradientColors = (rank) => {
        switch (rank) {
            case 1:
                return animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['gold', 'orange', 'gold'],
                });
            case 2:
                return animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['silver', 'gray', 'silver'],
                });
            case 3:
                return animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['#cd7f32', '#8B4513', '#cd7f32'],
                });
            default:
                return animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['gold', 'orange', 'gold'],
                });
        }
    };
    
    const gradientColors = getGradientColors(rank);
    

    const handlePress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
            <Animated.View style={[styles.container, getRankStyle(rank, gradientColors)]}>
                <Text style={styles.rank}>#{rank}</Text>
                <Image source={user.profilePicture} style={styles.profilePic} />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.score}>{user.score}</Text>

                <UserPopUp user={user} visible={modalVisible} onClose={closeModal} />
            </Animated.View>
        </TouchableOpacity>
    );
};

const getRankStyle = (rank, gradientColors) => {
    switch (rank) {
        case 1:
            return { ...styles.gold, backgroundColor: gradientColors };
        case 2:
            return { ...styles.silver, backgroundColor: gradientColors };
        case 3:
            return { ...styles.bronze, backgroundColor: gradientColors };
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
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'black',
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
});

export default LeaderboardItem;
