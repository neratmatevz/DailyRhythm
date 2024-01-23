import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native';
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
                    <Text style={styles.dateText}>{activity.datum}</Text>


                    {/* Date Box */}
                    <View style={styles.scheduleBox}>
                        <Text style={styles.scheduleText}>
                            {moment(activity.uraZacetka).format('HH:mm')}                        {moment(activity.uraZakljucka).format('HH:mm')}
                        </Text>
                        <Image source={require('../../../Assets/Icons/timeline.png')} style={styles.timeline} />

                    </View>

                    {/* Other Details */}
                    <Box title="Description">
                        <ScrollView style={styles.descriptionBox}>
                            <Text style={styles.opis}>{activity.opis}</Text>
                        </ScrollView>
                    </Box>
                    <Box>
                        <View style={styles.pointsContainer}>
                            {/* Status Icon */}
                            <Image
                                source={activity.opravljena ? require('../../../Assets/Icons/doneicon.png') : require('../../../Assets/Icons/cancel.png')}
                                style={styles.statusIcon}
                            />

                            {/* Spacer View if needed for alignment */}
                            <View style={{ flex: 1 }} />

                            {/* Points */}
                            <Image
                                source={require('../../../Assets/Icons/pointsicon.png')}
                                style={styles.pointsIcon}
                            />
                            <Text style={styles.pointsText}>{activity.stTock}</Text>
                        </View>
                    </Box>
                </View>
            </View>
        </Modal>
    );
}

export default PopupAktivnost;
