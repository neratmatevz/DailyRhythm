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
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 12,
        paddingHorizontal: 12,
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
    activityText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        paddingRight: 4,
    },
    activityTime: {
        fontSize: 14,
        color: '#555',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 16,
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: 'green',
        marginRight: 8,
    },
    removeButton: {
        backgroundColor: 'red',
        marginLeft: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    prikazDatuma: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,

    },

});

export default styles;