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
    
    
    const handleAddActivity = () => {
        // Handle logic for adding activity
        console.log('Adding activity for date:', selectedweekday);
        console.log(activities[1].datum);
        console.log('Selected date:', selectedDate);
        console.log('Formatted selected date:', formattedSelectedDate);
    };

    const handleRemoveActivity = () => {
        // Handle logic for removing activity
        console.log('Removing activity for date:', selectedweekday);
    };
    
    return (
        <View>
            {/* Prikaz izbranega datuma */}
            <Text style={styles.prikazDatuma}>{selectedDate}</Text>

            <View>
            {/* Prikaz Aktivnosti  */}
            <View style={styles.container}>
                {activities.map((activity) => (
                    <TouchableOpacity
                        key={activity.id}
                        onPress={() => handleActivityClick(activity)}
                        style={styles.activityContainer}
                    >
                        <Text style={styles.activityText}>{`${activity.ime} - ${activity.uraZacetka}`}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Popup za izbran activity */}
            <Popup visible={popupVisible} onClose={handleClosePopup} activity={selectedActivity} />
            </View>


            {/* Dodajanje in odstranjevanje  */}
            <View style={styles.buttonContainer}>
                {/* Gumb dodajanje aktivnosti*/}
                <TouchableOpacity
                    style={[styles.button, styles.addButton]}
                    onPress={handleAddActivity}
                >
                    <Text style={styles.buttonText}>Add Activity</Text>
                </TouchableOpacity>

                {/* Gumb odstranjevanje aktivnosti */}
                <TouchableOpacity
                    style={[styles.button, styles.removeButton]}
                    onPress={handleRemoveActivity}
                >
                    <Text style={styles.buttonText}>Remove Activity</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



export default Aktivnosti;
