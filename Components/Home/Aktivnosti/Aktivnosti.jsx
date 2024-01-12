import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';
import db from '../../../Assets/Database/db';
import styles from './Aktivnosti.style';
import moment from 'moment';

function Aktivnosti({ selectedDate, selectedweekday }) {

    const [formattedSelectedDate, setFormattedSelectedDate] = useState("");
    const [activities, setActivities] = useState([]);

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


    //

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

            {/* Prikaz Aktivnosti  */}
            <View style={styles.container}>
                {activities.map((activity) => (
                    <View key={activity.id} style={styles.activityContainer}>
                        <Text>{`Activity: ${activity.ime}`}</Text>
                        <Text>{`Start Time: ${activity.uraZacetka}`}</Text>
                    </View>
                ))}
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
