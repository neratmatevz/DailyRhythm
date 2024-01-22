import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import styles from './AddAktivnost.style'; // Adjust the path as needed
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';



function EditAktivnost({ visible, onClose, onEdit, activity }) {


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
        datumUraOpomnikaDate: false,
        datumUraOpomnikaTime: false
    });

    useEffect(() => {
        if (activity) {
            setDatum(new Date(activity.datum));
            setUraZacetka(new Date(activity.uraZacetka));
            setUraZakljucka(new Date(activity.uraZakljucka));
            setIme(activity.ime);
            setOpis(activity.opis);
            setStTock(activity.stTock.toString());
            setDatumUraOpomnika(new Date(activity.datumUraOpomnika));
        }
    }, [activity]);


    if (!visible) {
        return null;
    }

    const handleSave = () => {
        const updatedActivity = {
            id: activity.id,
            datum: datum.toISOString(),
            uraZacetka: uraZacetka.toISOString(),
            uraZakljucka: uraZakljucka.toISOString(),
            ime: ime,
            opis: opis,
            stTock: parseInt(stTock, 10), // Assuming 'stTock' is an integer
            datumUraOpomnika: datumUraOpomnika.toISOString(),
            opravljena: activity.opravljena // Assuming you're not changing this in EditAktivnost
        };

        onEdit(updatedActivity);
        onClose();
    };


    return (
        <Modal transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.popupContainer}>
                <View style={styles.popupContent}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ime"
                        value={ime}
                        onChangeText={setIme}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Opis"
                        value={opis}
                        onChangeText={setOpis}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Št. točk"
                        value={stTock}
                        keyboardType="numeric"
                        onChangeText={setStTock}
                    />
                    <TouchableOpacity onPress={() => setShowDatePicker({ ...showDatePicker, datum: true })}>
                        <Text>Datum: {moment(datum).format('DD.MM.YYYY')}</Text>
                    </TouchableOpacity>
                    {showDatePicker.datum && (
                        <DateTimePicker
                            value={datum}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                setShowDatePicker({ ...showDatePicker, datum: false });
                                setDatum(selectedDate || datum);
                            }}
                        />
                    )}

                    <TouchableOpacity onPress={() => setShowDatePicker({ ...showDatePicker, uraZacetka: true })}>
                        <Text>Ura zacetka: {moment(uraZacetka).format('HH:mm')}</Text>
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

                    <TouchableOpacity onPress={() => setShowDatePicker({ ...showDatePicker, uraZakljucka: true })}>
                        <Text>Ura zakljucka: {moment(uraZakljucka).format('HH:mm')}</Text>
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

                    <TouchableOpacity onPress={() => setShowDatePicker({ ...showDatePicker, datumUraOpomnikaDate: true })}>
                        <Text>Datum opomnika: {moment(datumUraOpomnika).format('DD.MM.YYYY')}</Text>
                    </TouchableOpacity>
                    {showDatePicker.datumUraOpomnikaDate && (
                        <DateTimePicker
                            value={datumUraOpomnika}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                if (selectedDate) {
                                    setDatumUraOpomnika(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), datumUraOpomnika.getHours(), datumUraOpomnika.getMinutes()));
                                }
                                setShowDatePicker({ ...showDatePicker, datumUraOpomnikaDate: false });
                            }}
                        />
                    )}

                    <TouchableOpacity onPress={() => setShowDatePicker({ ...showDatePicker, datumUraOpomnikaTime: true })}>
                        <Text>Ura opomnika: {moment(datumUraOpomnika).format('HH:mm')}</Text>
                    </TouchableOpacity>
                    {showDatePicker.datumUraOpomnikaTime && (
                        <DateTimePicker
                            value={datumUraOpomnika}
                            mode="time"
                            display="default"
                            onChange={(event, selectedTime) => {
                                if (selectedTime) {
                                    setDatumUraOpomnika(new Date(datumUraOpomnika.getFullYear(), datumUraOpomnika.getMonth(), datumUraOpomnika.getDate(), selectedTime.getHours(), selectedTime.getMinutes()));
                                }
                                setShowDatePicker({ ...showDatePicker, datumUraOpomnikaTime: false });
                            }}
                        />
                    )}


                    {/* Save and Cancel Buttons */}
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default EditAktivnost;