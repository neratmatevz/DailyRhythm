import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingBottom: 16,
        paddingHorizontal: 5,
        margin: 8,
        height: 420,
    },

    prikazDatuma: {
      paddingLeft: 15,
      paddingTop: 10,  
    },

    activityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ddd',
        marginBottom: 8,
        backgroundColor: '#e7f5ff', // Light blue background color
        borderRadius: 10, // Soft rounded corners for a softer look
        shadowColor: '#000', // Shadow color for the floating effect
        shadowOffset: {
            width: 0,
            height: 4, // Slightly elevated shadow for a floating look
        },
        shadowOpacity: 0.3, // Subtle shadow opacity
        shadowRadius: 6, // Soft shadow spread
        elevation: 6, // Elevation for Android to create depth
        paddingVertical: 15,
        paddingRight: 15,
    },

    activityTextContainer: {
        flex: 1,
        paddingHorizontal: 12,
    },

    activityText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2c3e50', // Adjust the color as needed
    },

    deleteButtonContainer: {
        marginRight: 15, // Adjust the margin as needed
    },


    activityTime: {
        fontSize: 16,
        color: '#34495e', // Slightly different color for contrast
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },

    buttonRow: {
        flexDirection: 'row', // Horizontal layout
        justifyContent: 'space-between', // Space evenly between buttons
      
    },
    

    deleteButtonIcon: {
        width: 24, // Adjust the width and height for your icon size
        height: 24,
        tintColor: 'red', // Change the color as needed
        borderRadius: 8,
    },
    
    markDoneIcon: {
        width:35, // Adjust the width and height for your icon size
        height:35,
        borderRadius: 8,

    },
    markUndoneIcon: {
        width:35, // Adjust the width and height for your icon size
        height:35,
        borderRadius: 8,

    },

    editButtonIcon: {
        width: 24, // Adjust the width and height for your icon size
        height: 24,
        tintColor: 'black', // Change the color as needed
        borderRadius: 8,
        marginRight: 10,
    },
    arrowIcon: {
        width: 30, // Set the desired width for the arrow icon
        height: 20, // Set the desired height for the arrow icon
    },

    addButton: {
        width: 60, // Adjust size as needed
        height: 60, // Adjust size as needed
        borderRadius: 30, // Half of width and height to make it circular
        backgroundColor: 'black', // Your desired background color
        justifyContent: 'center', // Center the '+' vertically
        alignItems: 'center', // Center the '+' horizontally
        alignSelf: 'center', // Center the button in the container
        marginTop: 10, // Adjust as needed
    },
    addButtonText: {
        color: 'white', // Text color
        fontSize: 40, // Increase font size for a bigger '+'
        // Include lineHeight equal to the button's height for better vertical alignment
        lineHeight: 50,
    },

    
});

export default styles;
