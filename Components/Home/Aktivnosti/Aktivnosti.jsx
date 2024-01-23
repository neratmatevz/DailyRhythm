import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';
import db from '../../../Assets/Database/db';
import styles from './Aktivnosti.style';
import moment from 'moment';
import PopupAktivnost from './PopupAktivnost';
import AddAktivnost from './AddAktivnost';
import EditAktivnost from './EditAktivnost';
import { LinearGradient } from 'expo-linear-gradient';
import { checkAchievementComplete } from '../../../Assets/JS/AchievementCheck';
import ConqueredAchPopUp from './ConqueredAchPopUp';

function Aktivnosti({ selectedDate, selectedweekday }) {

    const [formattedSelectedDate, setFormattedSelectedDate] = useState("");
    const [activities, setActivities] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [addPopupVisible, setAddPopupVisible] = useState(false);
    const [editPopupVisible, setEditPopupVisible] = useState(false);
    const [conqueredAchievement, setConqueredAchievement] = useState(false);
    

    //Dodaj aktivnosti v bazo

    const onAddActivity = (newActivity) => {

        newActivity.datum = moment(newActivity.datum).format('YYYY-MM-DD');
        newActivity.datumUraOpomnika = moment(newActivity.datumUraOpomnika).format('YYYY-MM-DD');

        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO aktivnost (datum, uraZacetka, uraZakljucka, ime, opis, stTock, datumUraOpomnika, opravljena) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                [newActivity.datum, newActivity.uraZacetka, newActivity.uraZakljucka, newActivity.ime, newActivity.opis, newActivity.stTock, newActivity.datumUraOpomnika, newActivity.opravljena], (_, result) => {
                    // Add the new activity to the existing activities array
                    setActivities(currentActivities => [...currentActivities, { ...newActivity, id: result.insertId }]);
                    console.log("vstavljena");
                    console.log(newActivity);
                },

                (txObj, error) => console.log('Error', error)
            );
        });
    };

    //Urejaj aktivnosti v bazi
    const onEditActivity = (updatedActivity) => {
        updatedActivity.datum = moment(updatedActivity.datum).format('YYYY-MM-DD');
        updatedActivity.datumUraOpomnika = moment(updatedActivity.datumUraOpomnika).format('YYYY-MM-DD');

        db.transaction((tx) => {
            tx.executeSql(
                `UPDATE aktivnost SET datum = ?, uraZacetka = ?, uraZakljucka = ?, ime = ?, opis = ?, stTock = ?, datumUraOpomnika = ?, opravljena = ? WHERE id = ?;`,
                [updatedActivity.datum, updatedActivity.uraZacetka, updatedActivity.uraZakljucka, updatedActivity.ime, updatedActivity.opis, updatedActivity.stTock, updatedActivity.datumUraOpomnika, updatedActivity.opravljena, updatedActivity.id],
                () => {
                    setActivities(currentActivities => currentActivities.map(activity => {
                        if (activity.id === updatedActivity.id) {
                            return updatedActivity;
                        }
                        return activity;
                    }));
                    console.log("Updated");
                    console.log(updatedActivity);
                },
                (txObj, error) => console.log('Error', error)
            );
        });
        setEditPopupVisible(false);
    };

    //izbriši aktivnost
    const onDeleteActivity = (activityId) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM aktivnost WHERE id = ?;',
                [activityId],
                () => {
                    console.log("Activity deleted");
                    // Remove the activity from the state
                    setActivities(currentActivities => currentActivities.filter(activity => activity.id !== activityId));
                },
                (txObj, error) => console.log('Error deleting activity', error)
            );
        });
    };

    useEffect(() => {

        const date = moment(selectedDate, 'MMMM DD, YYYY').format('YYYY-MM-DD');
        setFormattedSelectedDate(date);

    }, [selectedDate]);

    // Prikaži aktivnosti iz baze
    useEffect(() => {

        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM aktivnost WHERE datum = (?);`,
                [formattedSelectedDate],
                (_, result) => {

                    const rows = result.rows._array;

                    setActivities(rows);
                },
                (_, error) => {
                    // Error callback
                    console.error('Error fetching activities:', error);
                }
            );
        });
    }, [formattedSelectedDate, selectedActivity]);


    const handleActivityClick = (activity) => {
        setSelectedActivity(activity);
        setPopupVisible(true);
        console.log(activity.ime);
    };

    const handleAddActivityClick = (activity) => {
        setAddPopupVisible(true);
    };

    const handleEditClick = (activity) => {
        setSelectedActivity(activity);
        setEditPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);

    };

    const handleMarkAsDone = (activity) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE aktivnost SET opravljena = 1 WHERE id = ?;',
                [activity.id],
                () => {
                    // Dodaj točke k profilu
                    db.transaction((tx) => {
                        tx.executeSql(
                            'UPDATE profil SET stTock = stTock + ? WHERE id = 1;',
                            [activity.stTock],
                            () => {
                                console.log('Aktivnost je bila označena kot opravljena in dodane so bile točke.');
                                //Check if any new achievement completed
                                checkAchievementComplete()
                                    .then((result) => {
                                        console.log(result);
                                        setConqueredAchievement(result);
                                    }).catch((error) => {
                                        console.error('Error:', error);
                                    });

                            },
                            (txObj, error) => console.log('Napaka pri dodajanju točk:', error)
                        );
                    });
                },
                (txObj, error) => console.log('Napaka pri označevanju aktivnosti kot opravljene:', error)
            );
        });
    };

    const handleMarkAsUndone = (activity) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE aktivnost SET opravljena = 0 WHERE id = ?;',
                [activity.id],
                () => {
                    // Odstrani točke iz profila
                    db.transaction((tx) => {
                        tx.executeSql(
                            'UPDATE profil SET stTock = stTock - ? WHERE id = 1;',
                            [activity.stTock],
                            () => {
                                console.log('Aktivnost je bila označena kot neopravljena in odstranjene so bile točke.');
                            },
                            (txObj, error) => console.log('Napaka pri odstranjevanju točk:', error)
                        );
                    });
                },
                (txObj, error) => console.log('Napaka pri označevanju aktivnosti kot neopravljene:', error)
            );
        });
    };


    return (
        <View>
            <View>
                {/* Prikaz Aktivnosti  */}
                <View>
                    {/* Prikaz izbranega datuma */}
                    <View style={styles.prikazDatuma}>
                        <Text>{selectedDate}</Text>
                    </View>
                    {/* Prikaz izbranega datuma */}
                    <ScrollView style={styles.container}>
                        {activities.map((activity) => (
                            <View key={activity.id} style={styles.activityRow}>

                                <View style={styles.timeImageContainer}>
                                    <Image source={require('../../../Assets/Icons/connecttime.png')} style={styles.timeImage} />
                                </View>
                                <View style={styles.timeTextContainer}>
                                    <Text style={styles.activityTime}>
                                        {moment(activity.uraZacetka).format('HH:mm')}
                                    </Text>
                                    <Text style={styles.activityTime}>
                                        {moment(activity.uraZakljucka).format('HH:mm')}
                                    </Text>
                                </View>

                                <View key={activity.id} style={styles.outerActivityContainer}>
                                    <LinearGradient
                                        colors={['#d3d3d3', '#f0f0f0', '#d3d3d3']}
                                        start={{ x: 0.5, y: 0 }}
                                        end={{ x: 0.5, y: 1 }}
                                        style={styles.activityContainer}
                                    >
                                        <View style={styles.activityTextContainer}>
                                            <TouchableOpacity onPress={() => handleActivityClick(activity)}>
                                                <Text style={styles.activityText}>{`${activity.ime}`}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {/* GUMBI OPRAVLJENO, NEOPRAVLJENO, EDIT, DELETE */}
                                        <View style={styles.buttonRow}>
                                            <TouchableOpacity onPress={() => handleMarkAsDone(activity)}>
                                                <Image source={require('../../../Assets/Icons/checkicon1.png')} style={styles.markDoneIcon} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => handleMarkAsUndone(activity)}>
                                                <Image source={require('../../../Assets/Icons/crossicon1.png')} style={styles.markUndoneIcon} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => handleEditClick(activity, "edit")}>
                                                <Image source={require('../../../Assets/Icons/editicon1.png')} style={styles.editButtonIcon} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => onDeleteActivity(activity.id)}>
                                                <Image source={require('../../../Assets/Icons/deleteicon1.png')} style={styles.deleteButtonIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </LinearGradient>
                                </View>

                            </View>


                        ))}
                    </ScrollView>
                    {/* Gumb za dodajanje aktivnosti kontainer */}
                    <View style={styles.buttonContainer}>
                        {/* Gumb za dodajanje aktivnosti */}
                        <TouchableOpacity style={styles.addButton} onPress={() => handleAddActivityClick()}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>


                {/* Popup za izbran activity */}
                <PopupAktivnost visible={popupVisible} onClose={handleClosePopup} activity={selectedActivity} />
                <AddAktivnost visible={addPopupVisible} onClose={() => setAddPopupVisible(false)} onAdd={onAddActivity} />
                <EditAktivnost visible={editPopupVisible} activity={selectedActivity} onClose={() => setEditPopupVisible(false)} onEdit={onEditActivity} />
                <ConqueredAchPopUp visible = {conqueredAchievement} onClose={() => setConqueredAchievement(false)} />
            </View>

            {/* Dodajanje in odstranjevanje  */}
            <View style={styles.buttonContainer}>

            </View>
        </View >
    );
}



export default Aktivnosti;
