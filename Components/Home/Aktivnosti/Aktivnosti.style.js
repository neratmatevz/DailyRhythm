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