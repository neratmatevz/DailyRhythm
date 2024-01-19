import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    popupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    popupContent: {
        width: '80%', // Adjust as needed
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    closeButtonContainer: {
        alignItems: 'flex-end',
    },
    closeButton: {
        fontSize: 20,
        color: 'black',
    },
    
});

export default styles;