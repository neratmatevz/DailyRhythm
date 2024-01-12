import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './TopRow.style';

const TopRow = ({ profile, levelName }) => {
    const [showEmail, setShowEmail] = useState(false);

    const toggleEmailVisibility = () => {
      setShowEmail(!showEmail);
    };

    return (
        <View style={styles.container}>
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
                    <Text style={styles.label}>Točke: {profile.stTock}</Text>
                </View>
            </View>
        </View>
    )
};

export default TopRow;