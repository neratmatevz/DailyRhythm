import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';


import styles from './TopRow.style';
import ProgressBar from '../ProgressBar/ProgressBar';

const TopRow = ({ profile, levelName, nextLevelName, ratio, nextLevelPoints }) => {
    const [showEmail, setShowEmail] = useState(false);

    const toggleEmailVisibility = () => {
        setShowEmail(!showEmail);
    };

    return (
        <View style={styles.container}>
            <ProgressBar levelName={levelName} nextLevelName={nextLevelName} ratio={ratio} nextLevelPoints={nextLevelPoints} points={profile.stTock}/>
            <View style={styles.header(levelName)}>
                <Image style={styles.avatar} source={require("../../../Assets/Icons/person.png")} />
                <View style={styles.informationContainer}>
                    <Text style={styles.name}>{profile.upIme}</Text>
                    <TouchableOpacity onPress={toggleEmailVisibility}>
                        <Text style={styles.label}>
                            {showEmail ? profile.email : '*****************'}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.label}>Level: {profile.level}</Text>
                    <Text style={styles.label}>Points: {profile.stTock}</Text>
                </View>
            </View>
        </View>
    )
};

export default TopRow;