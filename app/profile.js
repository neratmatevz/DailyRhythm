import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import HomeHeaderBtn from '../Components/Common/HeaderBtn/HeaderBtn';

import db from '../Assets/Database/db';
import TopRow from '../Components/Profile/TopRow/TopRow';
import Achievements from '../Components/Profile/Achievements/Achievements';

import styles from '../Components/Profile/TopRow/TopRow.style';
import { ScrollView } from 'react-native-gesture-handler';
import EditProfilePopUp from '../Components/Profile/EditProfilePopUp/EditProfilePopUp';



const Profile = () => {
    const [profile, setProfile] = useState(InitialProfile);
    const [levelName, setLevelName] = useState("");
    const [points, setPoints] = useState(0);
    const [ratio, setRatio] = useState(0);
    const [nextLevelPoints, setNextLevelPoints] = useState(0);
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM profil WHERE id = 1;',
                [],
                (_, result) => {
                    const profile = result.rows._array[0];

                    if (profile !== undefined && profile !== null) {
                        setProfile((prevProfile) => {
                            return { ...prevProfile, ...profile };
                        });
                        setPoints(profile.stTock);

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
                        console.log(JSON.stringify(levels));
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
            setLoading(false);

        });


    }, [points]);

    const getNameOfLevel = (profileLevel, levels) => {
        let levelName = levels.find((level) => profileLevel === level.level).naziv;
        return levelName;
    }

    const getPointsForNextLevel = (profileLevel, levels) => {
        return levels.find((level) => profileLevel === level.level).do;
    }

    const closePopup = () => {
        setPopUpVisible(false)
    }

    const onUpdateProfile = (updatedProfile) => {
        setProfile(updatedProfile);
    };

    return (
        <SafeAreaView>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Stack.Screen
                        options={{
                            headerLeft: () => {
                                <HomeHeaderBtn
                                    icon={require("../Assets/Icons/left.png")}
                                    handlePress={() => router.back()}
                                />
                            },
                            headerRight: () =>
                                <HomeHeaderBtn
                                    icon={require("../Assets/Icons/edit.png")}
                                    dimension={'70%'}
                                    handlePress={() => setPopUpVisible(true)}
                                />
                            ,
                            headerTitle: levelName + ' (Level ' + profile.level + ')',
                            headerTitleAlign: 'center',

                        }}
                    />
                    <ScrollView>
                        <TopRow profile={profile} levelName={levelName} ratio={ratio} nextLevelPoints={nextLevelPoints} />
                        <Achievements />
                    </ScrollView>


                    <EditProfilePopUp isPopUpVisible={popUpVisible} closePopup={closePopup} profile={profile} onUpdateProfile={onUpdateProfile} />
                </>
            )}
        </SafeAreaView>
    )
}

const InitialProfile = {
    id: 1,
    upIme: "InitialUpIme",
    email: "InitialEmail",
    stTock: 0,
    level: 0,
    slika: "../../../Assets/Icons/person1.png"
}


export default Profile;