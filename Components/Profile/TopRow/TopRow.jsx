import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';

import styles from './TopRow.style';
import ProgressBar from '../ProgressBar/ProgressBar';


const TopRow = ({ profile, levelName, nextLevelName, ratio, nextLevelPoints }) => {
    const [showEmail, setShowEmail] = useState(false);
    const backgroundImage = backgroundImages[levelName] || require('../../../Assets/LevelBkgColor/Bronze.gif');

    const toggleEmailVisibility = () => {
        setShowEmail(!showEmail);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                {/* Progress Bar at the top */}
                <ProgressBar
                    levelName={levelName}
                    ratio={ratio}
                    nextLevelPoints={nextLevelPoints}
                    points={profile.stTock}
                />

                {/* Rest of the content */}
                <View style={styles.overlayContainer}>
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
            </ImageBackground>
        </View>
    )
};

const backgroundImages = {
    Bronze: require('../../../Assets/LevelBkgColor/Bronze.gif'),
    Silver: require('../../../Assets/LevelBkgColor/Silver.gif'),
    Gold: require('../../../Assets/LevelBkgColor/Gold.gif'),
    Platinum: require('../../../Assets/LevelBkgColor/Platinum.gif'),
    Diamond: require('../../../Assets/LevelBkgColor/Diamond.gif'),
    Emerald: require('../../../Assets/LevelBkgColor/Emerald.gif'),
};

export default TopRow;