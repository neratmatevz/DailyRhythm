import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

   popupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black for the overlay
    },

    popupContent: {
        backgroundColor: '#f5f5f5',
        padding: 50, // Increased padding for better spacing
        borderRadius: 15, // Rounded corners for a softer look
        width: '85%', // Adjust width for optimal reading
        shadowColor: '#000', // Subtle shadow for a floating effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 3,
        borderColor: '#a6a6a6', // Darker gray border color
    },
    

    heading: {
        fontSize: 20, // Slightly larger for emphasis
        fontWeight: 'bold',
        color: '#34495e',
        textTransform: 'uppercase', // Make letters uppercase
        textAlign: 'center',
        borderBottomWidth: 2, // Slightly thicker bottom border
        borderBottomColor: '#dcdcdc',
        paddingBottom: 8, // Increased padding for a more balanced look
        marginBottom: 1, // Slightly more space below the heading
        width: '100%',
    },

    scheduleBox: {
        alignItems: 'center', // Center align items
        marginTop: 15,
        marginBottom: 15, 
    },
    scheduleText: {
        fontSize: 12,
        color: '#34495e',
        marginBottom: 5, // Space between texts
        textAlign: 'center',
        fontWeight: 'bold',
    },
    timeline: {
        width: '100%', // Width of the timeline image
        height: 30, // Height of the timeline image
        resizeMode: 'contain', // Keep the image aspect ratio
        marginBottom: 5, // Space above and below the timeline image
    },
    dateText: {
        fontSize: 13,
        color: '#34495e',
    },

    boxTitle: {
        fontWeight: 'bold',
        fontSize: 14, // Slightly larger for emphasis
        color: '#333', // Darker color for the title
        borderBottomColor: '#eaeaea', // Light underline color
    },

    descriptionBox: {
        borderWidth: 1,
        borderColor: '#d3d3d3', // Light gray border color
        borderRadius: 5, // Slightly rounded corners
        padding: 10, // Padding inside the box
        height: 150, // Height of the description
    },


 
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Spread out content
        marginTop: 5,

    },

    statusIcon: {
        width: 35, // Adjust size as needed
        height: 35, // Adjust size as needed
    },
    pointsIcon: {
        width: 35, // Adjust width as needed
        height: 35, // Adjust height as needed
        marginRight: 3, // Space between the icon and the text
    },
    pointsText: {
        fontSize: 25,
        color: '#34495e', // Adjust color as needed
        fontWeight: 'bold', // Optional, for emphasis
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

