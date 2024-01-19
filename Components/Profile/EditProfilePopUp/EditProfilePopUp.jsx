import { Modal, Text, TouchableOpacity, View, TextInput, Image } from "react-native";

import styles from "./EditProfilePopUp.style";
import { useState } from "react";

import db from "../../../Assets/Database/db";

const EditProfilePopUp = ({ isPopUpVisible, closePopup, profile, onUpdateProfile }) => {
    const [editedProfile, setEditedProfile] = useState({ ...profile });

    const handleInputChange = (key, value) => {
        setEditedProfile((prevProfile) => ({ ...prevProfile, [key]: value }));
    };

    const handleSave = () => {

        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE profil SET upIme = ?, email = ? WHERE id = 1",
                [editedProfile.upIme, editedProfile.email],
                (_, updateResult) => {
                    console.log('Row updated successfully:', updateResult);
                    onUpdateProfile(editedProfile);
                },
                (_, updateError) => {
                    console.error('Error updating row:', updateError);
                }
            );
        })
        closePopup();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isPopUpVisible}
            onRequestClose={closePopup}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Edit Profile</Text>
                    <Image
                        style={styles.profileImage}
                        source={require('../../../Assets/Icons/person1.png')}
                    />
                    <TextInput
                        style={styles.input}
                        value={editedProfile.upIme}
                        onChangeText={(text) => handleInputChange('upIme', text)}
                        placeholder="Username"
                        maxLength={13}
                    />
                    <TextInput
                        style={styles.input}
                        value={editedProfile.email}
                        onChangeText={(text) => handleInputChange('email', text)}
                        placeholder="Email"
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleSave}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={closePopup}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default EditProfilePopUp;