import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginHorizontal: 1,
    },
    picker: {
        width: 50, // Set a fixed width for all pickers
        height: 50, // Set a fixed height for all pickers
        backgroundColor: '#f5f5f5', // Very light gray background color
        borderRadius: 10, // Rounded corners
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 0,
            height: 3, // Stronger shadow (adjust height as needed)
        },
        shadowOpacity: 0.7, // Stronger shadow opacity
        shadowRadius: 4, // Shadow radius
        elevation: 8, // Android shadow
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