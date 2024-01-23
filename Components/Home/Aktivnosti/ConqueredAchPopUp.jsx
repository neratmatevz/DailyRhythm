import React, { useEffect } from 'react';
import { Modal, Text, View, StyleSheet, Image } from 'react-native';

const ConqueredAchPopUp = ({ visible, onClose }) => {
    useEffect(() => {
        if (visible) {
            // Set a timeout to close the modal after a few seconds
            const timeoutId = setTimeout(() => {
                onClose();
            }, 3000);

            // Clear the timeout when the component unmounts or when the modal is closed manually
            return () => clearTimeout(timeoutId);
        }
    }, [visible, onClose]);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => onClose()}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Image source={require("../../../Assets/Icons/achievement.png")} style={styles.image} />
                    <Text>New Achievement complete</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },
    image: {
        height: 150,
        aspectRatio: 1,
        borderRadius: 25,
        borderColor: "black",
        borderWidth: 2,
        shadowColor: 'black', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 1, // Shadow opacity
        shadowRadius: 4,
    }
});

export default ConqueredAchPopUp;