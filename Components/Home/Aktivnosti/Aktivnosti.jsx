import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

function Aktivnosti({ selectedDate }) {
    return (
        <View style={styles.container}>
            {/* Your Aktivnosti component content goes here */}
            <Text>{selectedDate}</Text>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        
    },
});

export default Aktivnosti;
