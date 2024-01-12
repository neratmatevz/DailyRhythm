import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import HomeHeaderBtn from '../Components/Common/HeaderBtn/HeaderBtn';

import db from '../Assets/Database/db';
import TopRow from '../Components/Profile/TopRow/TopRow';


//TODO: Ime levela poveži z barvo backrounda


const Profile = () => {
    const [profile, setProfile] = useState(InitialProfile);
    const [levelName, setLevelName] = useState("");

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM profil WHERE id = 1;',
                [],
                (_, result) => {
                    const profile = result.rows._array[0];

                    if (profile !== undefined && profile !== null) {
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
                        setLevelName(levelName);
                    } else {
                        console.error("Levels undefined");
                    }
                },
                (_, error) => {
                    console.error('Error fetching data:', error);
                }
            );
        });


    }, []);

    const getNameOfLevel = (profileLevel, levels) => {
        return levels.find((level) => profileLevel === level.level).naziv;
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
            <TopRow profile={profile} levelName={levelName}/>
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