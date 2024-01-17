import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        margin: 8,
    },
    activityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 8,
        backgroundColor: '#f8f8f8', // Light background color
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    activityTextContainer: {
        flex: 1,
        paddingHorizontal: 12,
    },
    deleteButtonContainer: {
        marginRight: 15, // Adjust the margin as needed
    },
    activityText: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        paddingRight: 10,
    },
    activityTime: {
        fontSize: 14,
        color: '#555',
    },
    deleteButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'red',
        borderRadius: 8,
        
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    editButtonContainer: {
        marginRight: 10, // Adjust the margin as needed
    },
    editButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'blue', // Change the color as needed
        borderRadius: 8,
    },
    editButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 16,
    },

});

export default styles;
