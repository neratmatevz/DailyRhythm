import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';


function Popup({ visible, onClose, activity }) {

    if (!visible || !activity) {
        return null; 
      }

    return (
        <Modal transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.popupContainer}>
                <View style={styles.popupContent}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                    {/* Prikaz */}
                    <Text style={styles.activityText}>{`Activity: ${activity.ime}`}</Text>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    popupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popupContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: 300,
    },
    closeButton: {
        color: 'blue',
        position: 'relative',
        top: 0,
        right: 0,
    },
});

export default Popup;
