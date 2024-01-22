import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginHorizontal: 5,
    },

    picker: {
        width: 50,
        height: 50,
        backgroundColor: '#f5f5f5', // Very light gray background color
        borderRadius: 10, // Increased border radius for a softer look
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 0, // Soft shadow spread
        elevation: 6, // Adjust elevation for Android
        marginTop: 5,
    },
    
    selectedPicker: {
        backgroundColor: '#cccccc', // Slightly darker shade for selected state
        // Inherit other styles from `picker`
    },

    

    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weekday: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
    },
});

export default styles;