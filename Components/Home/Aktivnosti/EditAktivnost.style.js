import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    popupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    popupContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        borderRadius: 10, // Rounded corners for a softer look
        width: '85%', // Adjust width for optimal reading
        shadowColor: '#000', // Subtle shadow for a floating effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 3,
        borderColor: '#a6a6a6', // Darker gray border color
    },
    closeButtonContainer: {
        alignItems: 'flex-end',
    },
    closeButton: {
        fontSize: 20,
        color: 'black',
    },

    label: {
        fontSize: 14,
        color: '#000',
        marginBottom: 2,
    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 5,
        padding: 8, // Reduced padding
        marginBottom: 10, // Reduced space between inputs
        fontSize: 14, // Smaller font size
    },
    datePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        padding: 8,
        marginBottom: 10,
        width: '100%',
    },
    datePickerText: {
        fontSize: 14,
        color: '#000',
        flex: 1, // Allows the text to take up as much space as possible
    },
    datePickerIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },

    buttonsContainer: {
        flexDirection: 'row', // Display buttons side by side
        justifyContent: 'space-between', // Add space between buttons
        marginTop: 20,
        marginHorizontal:40, // Adjust the margin as needed
    },
    
    buttonContainer: {
        flexDirection: 'row', // Display image and text side by side
        alignItems: 'center', // Center items vertically
        padding: 10, // Add padding to the container
        borderRadius: 5, // Add border radius for a rounded look
    },
    
    saveContainer: {
        backgroundColor: '#0073e6', // Bright blue background for Save
    },
    
    cancelContainer: {
        backgroundColor: 'lightcoral', // Light red background for Cancel
    },
    
    buttonImage: {
        width: 20, // Adjust the width of the image
        height: 20, // Adjust the height of the image
        marginRight: 10, // Add space between image and text
    },
    
    saveButtonText: {
        color: 'white', // White text color for Save
        fontSize: 16,
    },
    
    cancelButtonText: {
        color: 'white', // White text color for Cancel
        fontSize: 16,
    },

});

export default styles;