import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';

import styles from './TopRow.style';
import ProgressBar from '../ProgressBar/ProgressBar';


const TopRow = ({ profile, levelName,  ratio, nextLevelPoints }) => {
    const [showEmail, setShowEmail] = useState(false);
    const backgroundImage = backgroundImages[levelName] || require('../../../Assets/LevelBkgColor/Bronze.jpg');
    const userPhoto = require('../../../Assets/Icons/person1.png');

    const toggleEmailVisibility = () => {
        setShowEmail(!showEmail);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                {/* Rest of the content */}
                <View style={styles.overlayContainer}>
                    <Image style={styles.avatar} source={userPhoto} />
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
                <ProgressBar
                    levelName={levelName}
                    ratio={ratio}
                    nextLevelPoints={nextLevelPoints}
                    points={profile.stTock}
                />
            </ImageBackground>
        </View>
    )
};

const backgroundImages = {
    Bronze: require('../../../Assets/LevelBkgColor/Bronze.jpg'),
    Silver: require('../../../Assets/LevelBkgColor/Silver.jpg'),
    Gold: require('../../../Assets/LevelBkgColor/Gold.jpg'),
    Platinum: require('../../../Assets/LevelBkgColor/Platinum.jpg'),
    Diamond: require('../../../Assets/LevelBkgColor/Diamond.jpg'),
    Emerald: require('../../../Assets/LevelBkgColor/Emerald.jpg'),
};

export default TopRow;