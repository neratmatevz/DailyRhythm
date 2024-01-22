import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    heading: {
        fontSize: 20, // Slightly larger for emphasis
        fontWeight: 'bold',
        color: '#34495e',
        textTransform: 'uppercase', // Make letters uppercase
        textAlign: 'center',
        borderBottomWidth: 2, // Slightly thicker bottom border
        borderBottomColor: '#dcdcdc',
        paddingBottom: 8, // Increased padding for a more balanced look
        marginBottom: 12, // Slightly more space below the heading
        width: '100%',
    },

    popupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black for the overlay
    },

    popupContent: {
        backgroundColor: 'white',
        padding: 50, // Increased padding for better spacing
        borderRadius: 15, // Rounded corners for a softer look
        width: '85%', // Adjust width for optimal reading
        shadowColor: '#000', // Subtle shadow for a floating effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    
    boxTitle: {
        fontWeight: 'bold',
        fontSize: 14, // Slightly larger for emphasis
        color: '#333', // Darker color for the title
        marginBottom: 5,
        textAlign: 'center',
        borderBottomColor: '#eaeaea', // Light underline color
        paddingBottom: 5,
    },

    detailValue: {
        fontSize: 16, // Slightly larger for readability
        color: '#34495e', // A soft, dark color for details
        textAlign: 'center',
        marginTop: 5, // Spacing above the detail text
        borderBottomWidth: 1, // Underline for the title
        borderBottomColor: '#eaeaea', // Light underline color
    },

    detailValue1: {
        fontSize: 16, // Slightly larger for readability
        color: '#34495e', // A soft, dark color for details
        textAlign: 'center',
        marginTop: 5, // Spacing above the detail text
    },

    closeButtonContainer: {
        alignSelf: 'flex-end',
        marginTop: -40, // Adjust to align properly with the top-right corner
        marginRight: -40, // Adjust to align properly with the top-right corner
    },

    close: {
        width: 24, // Size of the close icon
        height: 24,
    },
});

export default styles;

