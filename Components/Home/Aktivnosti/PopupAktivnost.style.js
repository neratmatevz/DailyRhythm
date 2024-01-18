import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    popupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    popupContent: {
        backgroundColor: '#ffecd2', // Warm, light orange for a fun look
        padding: 10,
        borderRadius: 20, // Keep the rounded corners
        shadowColor: '#f4a261', // Softer shadow color for a 3D effect
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.7,
        shadowRadius: 15,
        elevation: 20,
        borderWidth: 4,
        borderColor: '#ffe8d6', // Soft, matching border color
        width: '90%',
        overflow: 'hidden',
        alignSelf: 'center',

    },
    

    box: {
        backgroundColor: '#bde0fe', // Light blue for contrast yet playful
        padding: 5,
        borderRadius: 10, // Adding a bit of roundness for a softer look
        shadowColor: '#3d5a80', // Deeper blue for the shadow
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 12,
        marginBottom: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#98c1d9', // Lighter blue for the border
        overflow: 'hidden',
        borderBottomWidth: 5,
        borderBottomColor: '#f4a261',
        borderRightWidth: 5,
        borderRightColor: '#f4a261',
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
        marginLeft: 120,
        marginRight: 120,
        marginBottom: 10,
        
    },
    closeButton: {
        color: 'red', // Red color for the X
        fontSize: 24,
        textAlign: 'center',
    },
});

export default styles;
