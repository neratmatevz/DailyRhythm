import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import styles from './PopupAktivnost.style';
import moment from 'moment';

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
                        <Image source={require('../../../Assets/Icons/close.png')} style={styles.close} />
                        </TouchableOpacity>
                    </View>
                    {/* Activity Name Box */}
                    <Text style={styles.heading}>{activity.ime}</Text> 
                       
                    

                    {/* Date Box */}
                    <Box title="Schedule">
                        <Text style={styles.detailValue1}>Date: {activity.datum}</Text>
                        <Text style={styles.detailValue1}>Start Time: {moment(activity.uraZacetka).format('HH:mm')}</Text>
                        <Text style={styles.detailValue}>End Time: {moment(activity.uraZakljucka).format('HH:mm')}</Text>
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
