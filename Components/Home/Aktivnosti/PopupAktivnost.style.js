import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    popupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    popupContent: {
        backgroundColor: 'white', // Warm, light orange for a fun look
        padding: 10,


    },
    
    boxTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2,
        textAlign: 'center',
    },

    detailValue: {
        fontSize: 14,
        color: '#34495e',
        textAlign: 'center',
    },


    closeButtonContainer: {
        marginRight: 4,
        marginBottom: 10,
        
    },
    closeButton: {
        color: 'red', // Red color for the X
        fontSize: 24,
        textAlign: 'right',
    },
});

export default styles;
