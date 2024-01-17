import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';
import db from '../../../Assets/Database/db';
import styles from './Aktivnosti.style';
import moment from 'moment';
import Popup from './PopupAktivnost';

function Aktivnosti({ selectedDate, selectedweekday }) {

    const [formattedSelectedDate, setFormattedSelectedDate] = useState("");
    const [activities, setActivities] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);


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
    }, [formattedSelectedDate]);


    const handleActivityClick = (activity) => {
        setSelectedActivity(activity);
        setPopupVisible(true);
        console.log(activity.ime);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);

    };




    return (
        <View>
            {/* Prikaz izbranega datuma */}
            <Text style={styles.prikazDatuma}>{selectedDate}</Text>

            <View>
                {/* Prikaz Aktivnosti  */}
                <View style={styles.container}>
                    {activities.map((activity) => (
                        <View key={activity.id} style={styles.activityContainer}>

                            <View style={styles.activityTextContainer}>
                                <TouchableOpacity onPress={() => handleActivityClick(activity)}>
                                    <Text style={styles.activityText}>{`${activity.ime}  ${activity.uraZacetka}`}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.editButtonContainer}>
                                <TouchableOpacity onPress={() => handleActivityClick(activity)} style={styles.editButton}>
                                    <Text style={styles.editButtonText}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.deleteButtonContainer}>
                                <TouchableOpacity onPress={() => handleActivityClick(activity)} style={styles.deleteButton}>
                                    <Text style={styles.deleteButtonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Popup za izbran activity */}
                <Popup visible={popupVisible} onClose={handleClosePopup} activity={selectedActivity} />
            </View>


            {/* Dodajanje in odstranjevanje  */}
            <View style={styles.buttonContainer}>

            </View>
        </View>
    );
}



export default Aktivnosti;
