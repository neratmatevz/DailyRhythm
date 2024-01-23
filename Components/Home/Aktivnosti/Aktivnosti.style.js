import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 5,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingBottom: 16,
        paddingHorizontal: 10,
        marginHorizontal: 8,
        marginTop: 2,
        height: 420,
        borderStyle: 'dashed',
        flexDirection: 'row', // Display the time and activity containers in the same row
    },

    prikazDatuma: {
      paddingLeft: 15,
      paddingTop: 20,  
    },


    outerActivityContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black
        marginBottom: 3,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
        backgroundColor: 'transparent', // Important for the gradient to show

    },
    
    activityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingRight: 15,
        borderRadius: 10, // Match the borderRadius with the outer container
        width: 290 , // Set a fixed height (adjust as needed)
    },
    
    activityRow: {
        flexDirection: 'row',
        marginVertical: 10,
    },

    activityTime: {
        marginVertical: 3,
        marginRight:3,
     
    },

    // Update the styles for the time text container within the time container
    timeTextContainer: {
        margin: 7,
    
    
    },

    timeImage: {
        height: 40,
        width: 10,
        marginTop: 3,
    },
    

    activityTextContainer: {
        flex: 1,
        paddingHorizontal: 12,
    },

    activityText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2c3e50', // Adjust the color as needed
        textTransform: 'uppercase', // Make letters uppercase
    },

    deleteButtonContainer: {
        marginRight: 15, // Adjust the margin as needed
    },


    timeImageContainer: {
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
    },
    
    markDoneIcon: {
        width: 24, // Adjust the width and height for your icon size
        height: 24,
        marginRight: 3,

    },
    markUndoneIcon: {
        width: 24, // Adjust the width and height for your icon size
        height: 24,
        marginRight: 15,
    },

    editButtonIcon: {
        width: 24, // Adjust the width and height for your icon size
        height: 24,
        tintColor: 'black', // Change the color as needed
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
