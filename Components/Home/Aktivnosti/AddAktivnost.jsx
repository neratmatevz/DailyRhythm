import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import styles from './AddAktivnost.style'; // Adjust the path as needed
import DateTimePicker from '@react-native-community/datetimepicker';

function AddAktivnost({ visible, onClose, onAdd  }) {
    const [activityName, setActivityName] = useState('');
    const [datum, setDatum] = useState('');
    const [uraZacetka, setUraZacetka] = useState('');
    const [uraZakljucka, setUraZakljucka] = useState('');
    const [ime, setIme] = useState('');
    const [opis, setOpis] = useState('');
    const [stTock, setStTock] = useState('');
    const [datumUraOpomnika, setDatumUraOpomnika] = useState('');

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || datum;
        setShowDatePicker(false);
        setDatum(currentDate);
    };

    if (!visible) {
        return null;
    }

    const handleSave = () => {
        // Logic to save the new activity
        const newActivity = {
            datum,
            uraZacetka,
            uraZakljucka,
            ime,
            opis,
            stTock: parseInt(stTock, 10),
            datumUraOpomnika,
            opravljena: false
        };

        // Call the onAdd prop with the new activity
        onAdd(newActivity);

        // Close the popup after saving
        onClose();
    };

    return (
        <Modal transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.popupContainer}>
                <View style={styles.popupContent}>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>X</Text>
                        </TouchableOpacity>
                    </View>
    
                    {/* Input for Activity Name */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Activity Name:</Text>
                        <TextInput
                            style={styles.input}
                            value={activityName}
                            onChangeText={setActivityName}
                            placeholder="Enter activity name"
                        />
                    </View>
    
                    {/* Other input fields */}
                    {/* Repeat this structure for each attribute */}
    
                {/* Input for Date */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Date:</Text>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.input}>{datum ? datum.toDateString() : 'Select date'}</Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={datum || new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                </View>
    
                    {/* Input for Start Time */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Start Time:</Text>
                        <TextInput
                            style={styles.input}
                            value={uraZacetka}
                            onChangeText={setUraZacetka}
                            placeholder="HH:MM"
                        />
                    </View>
    
                    {/* Input for End Time */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>End Time:</Text>
                        <TextInput
                            style={styles.input}
                            value={uraZakljucka}
                            onChangeText={setUraZakljucka}
                            placeholder="HH:MM"
                        />
                    </View>
    
                    {/* Input for Description */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Description:</Text>
                        <TextInput
                            style={styles.input}
                            value={opis}
                            onChangeText={setOpis}
                            placeholder="Description"
                        />
                    </View>
    
                    {/* Input for Points */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Points:</Text>
                        <TextInput
                            style={styles.input}
                            value={stTock}
                            onChangeText={setStTock}
                            placeholder="Number"
                            keyboardType="numeric"
                        />
                    </View>
    
                    {/* Input for Reminder Date & Time */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Reminder Date & Time:</Text>
                        <TextInput
                            style={styles.input}
                            value={datumUraOpomnika}
                            onChangeText={setDatumUraOpomnika}
                            placeholder="YYYY-MM-DD HH:MM"
                        />
                    </View>
    
                    {/* Save Button */}
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default AddAktivnost;