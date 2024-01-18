import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import HomeHeaderBtn from '../Components/Common/HeaderBtn/HeaderBtn';

import db from '../Assets/Database/db';
import TopRow from '../Components/Profile/TopRow/TopRow';
import Achievements from '../Components/Profile/Achievements/Achievements';

import styles from '../Components/Profile/TopRow/TopRow.style';
import { ScrollView } from 'react-native-gesture-handler';



const Profile = () => {
    const [profile, setProfile] = useState(InitialProfile);
    const [levelName, setLevelName] = useState("");
    const [points, setPoints] = useState(0);
    const [ratio, setRatio] = useState(0);
    const [nextLevelPoints, setNextLevelPoints] = useState(0);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM profil WHERE id = 1;',
                [],
                (_, result) => {
                    const profile = result.rows._array[0];

                    if (profile !== undefined && profile !== null) {
                        setPoints(profile.stTock);
                        setProfile(profile);
                        
                    } else {
                        console.error('Profile undefined or null');
                    }
                },
                (_, error) => {
                    console.error('Error fetching data:', error);
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM level',
                [],
                (_, result) => {
                    const levels = result.rows._array;

                    if (levels !== undefined) {
                        const levelName = getNameOfLevel(profile.level, levels);
                        const nextLevelPoints = getPointsForNextLevel(profile.level, levels);
                        setNextLevelPoints(nextLevelPoints);
                        setLevelName(levelName);
                        let ratioC = parseFloat(points) / parseFloat(nextLevelPoints);
                        setRatio(ratioC);
                    } else {
                        console.error("Levels undefined");
                    }
                },
                (_, error) => {
                    console.error('Error fetching data:', error);
                }
            );
        });


    }, [points]);

    const getNameOfLevel = (profileLevel, levels) => {
        return levels.find((level) => profileLevel === level.level).naziv;
    }

    const getPointsForNextLevel = (profileLevel, levels) => {
        return levels.find((level) => profileLevel === level.level).do;
    }


    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerTitle: levelName + ' (Level ' + profile.level + ')',
                    headerTitleAlign: 'center',
                    headerLeft: () => {
                        <HomeHeaderBtn
                            icon={require("../Assets/Icons/left.png")}
                            handlePress={() => router.back()}
                        />
                    }
                }}
            />
            <ScrollView>
                <TopRow profile={profile} levelName={levelName} ratio={ratio} nextLevelPoints={nextLevelPoints}/>
                <Achievements />
            </ScrollView>

        </SafeAreaView>
    )
}

const InitialProfile = {
    id: 1,
    upIme: "InitialUpIme",
    email: "InitialEmail",
    stTock: 0,
    level: 1
}


export default Profile;