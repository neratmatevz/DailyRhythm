import * as Progress from 'react-native-progress';
import React, { useState, useEffect, useRef } from 'react';
import { Easing, StyleSheet, Text, View } from 'react-native';
import { PROFILECOLORS } from '../../../Assets/Constants/index';


const ProgressBar = ({ levelName, nextLevelName, ratio, nextLevelPoints, points }) => {
    const progressColor = PROFILECOLORS[levelName] || '#FFFFFF';
    const nextLevelProgressColor = PROFILECOLORS[nextLevelName] || '#FFFFFF';

    return (
        <View>
            <Progress.Bar
                progress={ratio}
                width={null}
                color={progressColor}
                borderRadius={0}
                useNativeDriver={true}
                easing={Easing.inOut(Easing.ease)}
                unfilledColor={nextLevelProgressColor}
                height={20}
            />
            <View style={styles.overlayContainer}>
                <Text style={styles.overlayTextRight}>{nextLevelPoints}</Text>
                <Text style={styles.overlayTextLeft}>{points}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
        zIndex: 2,
    },
    overlayTextRight: {
        color: 'black',
        fontWeight: 'bold',
        marginRight: 10,
        // Add other style properties as needed
    },
    overlayTextLeft: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10, // Adjust the margin as needed
        // Add other style properties as needed
    }
});

export default ProgressBar;