import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginHorizontal: 5,
    },
    picker: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        margin: 4,
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