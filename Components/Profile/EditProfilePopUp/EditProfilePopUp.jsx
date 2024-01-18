import { Modal, Text, TouchableOpacity, View, TextInput, Image } from "react-native";

import styles from "./EditProfilePopUp.style";
import { useState } from "react";

const EditProfilePopUp = ({ isPopUpVisible, closePopup, profile }) => {
    const [editedProfile, setEditedProfile] = useState({ ...profile });

    const handleInputChange = (key, value) => {
        setEditedProfile((prevProfile) => ({ ...prevProfile, [key]: value }));
    };

    const handleSave = () => {
        // Perform save action with editedProfile
        // For example, you can call an API to update the profile
        // ...

        // Close the popup
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
                        source={require('../../../Assets/Icons/person.png')}
                    />
                    <TextInput
                        style={styles.input}
                        value={editedProfile.upIme}
                        onChangeText={(text) => handleInputChange('upIme', text)}
                        placeholder="Username"
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