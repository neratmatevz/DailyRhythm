import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';
import db from '../../../Assets/Database/db';
import styles from './Aktivnosti.style';
import moment from 'moment';
import PopupAktivnost from './PopupAktivnost';
import AddAktivnost from './AddAktivnost';


function Aktivnosti({ selectedDate, selectedweekday }) {

    const [formattedSelectedDate, setFormattedSelectedDate] = useState("");
    const [activities, setActivities] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [addPopupVisible, setAddPopupVisible] = useState(false);

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


    const handleAddActivityClick = () => {
        setAddPopupVisible(true); 
    };

    const handleClosePopup = () => {
        setPopupVisible(false);

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
                            <View key={activity.id}>
                                <View style={styles.activityTimeContainer}>
                                    <Text style={styles.activityTime}>
                                        {`${moment(activity.uraZacetka, 'HH:mm:ss').format('HH:mm')} `}
                                        <Image source={require('../../../Assets/Icons/arrow.jpg')} style={styles.arrowIcon} />
                                        {` ${moment(activity.uraZakljucka, 'HH:mm:ss').format('HH:mm')}`}
                                    </Text>
                                </View>
                                <View style={styles.activityContainer}>
                                    <View style={styles.activityTextContainer}>
                                        <TouchableOpacity onPress={() => handleActivityClick(activity)}>
                                            <Text style={styles.activityText}>{`${activity.ime}`}</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => handleActivityClick(activity, 'edit')}>
                                            <Image source={require('../../../Assets/Icons/editicon.png')} style={styles.editButtonIcon} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleActivityClick(activity, 'delete')}>
                                            <Image source={require('../../../Assets/Icons/deleteicon.png')} style={styles.deleteButtonIcon} />
                                        </TouchableOpacity>
                                    </View>
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
                <AddAktivnost visible={addPopupVisible} onClose={() => setAddPopupVisible(false)} />
            </View>


            {/* Dodajanje in odstranjevanje  */}
            <View style={styles.buttonContainer}>

            </View>
        </View >
    );
}



export default Aktivnosti;
