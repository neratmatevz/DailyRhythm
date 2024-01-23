import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './AddAktivnost.style'; // Adjust the path as needed
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


function AddAktivnost({ visible, onClose, onAdd }) {
    const [datum, setDatum] = useState(new Date());
    const [uraZacetka, setUraZacetka] = useState(new Date());
    const [uraZakljucka, setUraZakljucka] = useState(new Date());
    const [ime, setIme] = useState('');
    const [opis, setOpis] = useState('');
    const [stTock, setStTock] = useState('');
    const [datumUraOpomnika, setDatumUraOpomnika] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState({
        datum: false,
        uraZacetka: false,
        uraZakljucka: false,
        datumUraOpomnika: false
    });

    if (!visible) {
        return null;
    }

    const handleSave = () => {
        const newActivity = {
            datum: datum.toISOString(),
            uraZacetka: uraZacetka.toISOString(),
            uraZakljucka: uraZakljucka.toISOString(),
            ime,
            opis,
            stTock: parseInt(stTock, 10),
            datumUraOpomnika: datumUraOpomnika.toISOString(),
            opravljena: false
        };

        //console.log(newActivity);
        onAdd(newActivity);
        onClose();
    };

    return (
        <Modal transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.popupContainer}>
                <View style={styles.popupContent}>
                    <Text style={styles.label}>Ime</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ime"
                        value={ime}
                        onChangeText={setIme}
                    />

                    <Text style={styles.label}>Opis</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Opis"
                        value={opis}
                        onChangeText={setOpis}
                    />

                    <Text style={styles.label}>Št. točk</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Št. točk"
                        value={stTock}
                        keyboardType="numeric"
                        onChangeText={setStTock}
                    />

                    <Text style={styles.label}>Datum</Text>
                    {/* Date Picker */}
                    <TouchableOpacity style={styles.datePickerContainer} onPress={() => setShowDatePicker({ ...showDatePicker, datum: true })}>
                        <Text style={styles.datePickerText}>{datum ? moment(datum).format('DD/MM/YYYY') : 'Select Datum'}</Text>
                        <Image
                            source={require('../../../Assets/Icons/datepickericon1.jpg')} // Replace with your calendar icon
                            style={styles.datePickerIcon}
                        />
                    </TouchableOpacity>
                    {showDatePicker.datum && (
                        <DateTimePicker
                            value={datum ? new Date(datum) : new Date()}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                setShowDatePicker({ ...showDatePicker, datum: false });
                                setDatum(selectedDate);
                            }}
                        />
                    )}
                    <Text style={styles.label}>Ura Zacetka</Text>
                    <TouchableOpacity style={styles.datePickerContainer} onPress={() => setShowDatePicker({ ...showDatePicker, uraZacetka: true })}>
                        <Text style={styles.datePickerText}>
                            {uraZacetka ? moment(uraZacetka).format('HH:mm') : 'Select Ura Zacetka'}
                        </Text>
                        <Image
                            source={require('../../../Assets/Icons/timeicon.png')} // Replace with your timer icon
                            style={styles.datePickerIcon}
                        />
                    </TouchableOpacity>
                    {showDatePicker.uraZacetka && (
                        <DateTimePicker
                            value={uraZacetka}
                            mode="time"
                            display="default"
                            onChange={(event, selectedTime) => {
                                setShowDatePicker({ ...showDatePicker, uraZacetka: false });
                                setUraZacetka(selectedTime || uraZacetka);
                            }}
                        />
                    )}

                    <Text style={styles.label}>Ura Zakljucka</Text>
                    <TouchableOpacity style={styles.datePickerContainer} onPress={() => setShowDatePicker({ ...showDatePicker, uraZakljucka: true })}>
                        <Text style={styles.datePickerText}>
                            {uraZakljucka ? moment(uraZakljucka).format('HH:mm') : 'Select Ura Zakljucka'}
                        </Text>
                        <Image
                            source={require('../../../Assets/Icons/timeicon.png')} // Replace with your timer icon
                            style={styles.datePickerIcon}
                        />
                    </TouchableOpacity>
                    {showDatePicker.uraZakljucka && (
                        <DateTimePicker
                            value={uraZakljucka}
                            mode="time"
                            display="default"
                            onChange={(event, selectedTime) => {
                                setShowDatePicker({ ...showDatePicker, uraZakljucka: false });
                                setUraZakljucka(selectedTime || uraZakljucka);
                            }}
                        />
                    )}


                    {/* Save and Cancel Buttons */}
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={[styles.buttonContainer, styles.saveContainer]} onPress={handleSave}>
                            <Image
                                source={require('../../../Assets/Icons/saveaktivnost.png')} // Replace with your save image
                                style={styles.buttonImage}
                            />
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonContainer, styles.cancelContainer]} onPress={onClose}>
                            <Image
                                source={require('../../../Assets/Icons/cancelaktivnost.png')} // Replace with your cancel image
                                style={styles.buttonImage}
                            />
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default AddAktivnost;