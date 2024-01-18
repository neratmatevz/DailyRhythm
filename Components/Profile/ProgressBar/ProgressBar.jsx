import * as Progress from 'react-native-progress';
import React, { useState, useEffect, useRef } from 'react';
import { Easing, StyleSheet, Text, View } from 'react-native';
import { PROFILECOLORS } from '../../../Assets/Constants/index';


const ProgressBar = ({ levelName, nextLevelName, ratio, nextLevelPoints, points }) => {
    const progressColor = PROFILECOLORS[levelName] || '#FFFFFF';

    return (
        <View style={{marginTop: 10, marginLeft:10,marginRight:10}}>
            <Progress.Bar
                progress={ratio}
                width={null}
                color={progressColor}
                borderRadius={10}
                useNativeDriver={true}
                easing={Easing.inOut(Easing.ease)}
                unfilledColor="#FFFFFF"
                height={25}
                borderColor="black"
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
        marginBottom: 4
        // Add other style properties as needed
    },
    overlayTextLeft: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 4 // Adjust the margin as needed
        // Add other style properties as needed
    }
});

export default ProgressBar;