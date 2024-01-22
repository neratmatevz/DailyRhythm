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
    const [levelsState, setLevelsState] = useState([]);

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
                        const levelName = getNameOfLevel(profile.level, levels);
                        const nextLevelPoints = getPointsForNextLevel(profile.level, levels);
                        const previousLevelPoints = getPointsForPreviousLevel(profile.level,levels);
                        setNextLevelPoints(nextLevelPoints);
                        setLevelName(levelName);
                        const totalRange = parseFloat(nextLevelPoints) - parseFloat(previousLevelPoints);
                        const pointsWithinRange = parseFloat(points) - parseFloat(previousLevelPoints);
                        let ratioC = pointsWithinRange / totalRange;
                        setRatio(ratioC);
                        setLevelsState(levels);
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

    useEffect(() => {
        if (loading === false && levelsState.length > 0 && profile !== undefined) {
            // Check if the profile level corresponds to the amount of points
            const nextLevelPoints = getPointsForNextLevel(profile.level, levelsState);
            const previousLevelPoints = getPointsForPreviousLevel(profile.level, levelsState);
    
            if (profile.stTock >= nextLevelPoints || profile.stTock <= previousLevelPoints) {
                // Update the profile's level if points are greater than or equal to nextLevelPoints
                const newLevel = getNewLevel(profile.stTock, levelsState);
                const levelName = getNameOfLevel(newLevel, levelsState);
                const nextLevelPoints = getPointsForNextLevel(newLevel, levelsState);
                updateProfileLevel(newLevel, levelName, nextLevelPoints);
                console.log(newLevel);
            }
        }
    }, [loading, levelsState]);

    const getNameOfLevel = (profileLevel, levels) => {
        let levelName = levels.find((level) => profileLevel === level.level).naziv;
        return levelName;
    }

    const getPointsForNextLevel = (profileLevel, levels) => {
        return levels.find((level) => profileLevel === level.level).do;
    }

    const getPointsForPreviousLevel = (profileLevel, levels) => {
        return levels.find((level) => profileLevel === level.level).od;
    }

    const closePopup = () => {
        setPopUpVisible(false)
    }

    const onUpdateProfile = (updatedProfile) => {
        setProfile(updatedProfile);
    };

    // Function to update the profile level in the database
    const updateProfileLevel = (newLevel, levelName, nextLevelPoints) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE profil SET level = ? WHERE id = 1;',
                [newLevel],
                (_, updateResult) => {
                    console.log('Profile level updated successfully:', updateResult);
                    setProfile((prevProfile) => ({ ...prevProfile, level: newLevel }));
                    setLevelName(levelName);
                    setNextLevelPoints(nextLevelPoints);
                },
                (_, updateError) => {
                    console.error('Error updating profile level:', updateError);
                }
            );
        });
    };

    // Function to get the new level based on the amount of points
    const getNewLevel = (points, levels) => {
        for (const level of levels) {
            if (points <= level.do && points >= level.od) {
                return level.level;
            }
        }
        // If points are greater than the highest level, return the highest level
        return levels[levels.length - 1].level;
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