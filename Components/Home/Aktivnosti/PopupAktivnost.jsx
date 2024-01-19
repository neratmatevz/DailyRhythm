import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './PopupAktivnost.style';


function PopupAktivnost({ visible, onClose, activity }) {
    if (!visible || !activity) {
        return null;
    }

    const Box = ({ title, children }) => (
        <View style={styles.box}>
            <Text style={styles.boxTitle}>{title}</Text>

            {children}
        </View>
    );

    return (
        <Modal transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.popupContainer}>
                <View style={styles.popupContent}>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>X</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Activity Name Box */}
                    <Box title="Activity">
                        <Text style={styles.detailValue}>{activity.ime}</Text>
                    </Box>

                    {/* Date Box */}
                    <Box title="Schedule">
                        <Text style={styles.detailValue}>Date: {activity.datum}</Text>
                        <Text style={styles.detailValue}>Start Time: {activity.uraZacetka}</Text>
                        <Text style={styles.detailValue}>End Time: {activity.uraZakljucka}</Text>
                    </Box>

                    {/* Other Details */}
                    <Box title="Description">
                        <Text style={styles.detailValue}>{activity.opis}</Text>
                    </Box>
                    <Box title="Points">
                        <Text style={styles.detailValue}>{activity.stTock}</Text>
                    </Box>
                    <Box title="Reminder Date">
                        <Text style={styles.detailValue}>{activity.datumUraOpomnika}</Text>
                    </Box>
                    <Box title="Completed">
                        <Text style={styles.detailValue}>{activity.opravljena ? 'Yes' : 'No'}</Text>
                    </Box>
                </View>
            </View>
        </Modal>
    );
}

export default PopupAktivnost;
