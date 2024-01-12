import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    sectionCard: {
        width: 130,
        minHeight: 100,
        margin: 10,
        borderRadius: 6
    },
    sectionImage: {
        height: 80,
        aspectRatio: 1,
        borderRadius: 25,
        borderColor: "black",
        borderWidth: 2,
        shadowColor: 'black', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 1, // Shadow opacity
        shadowRadius: 4,

    },
    sectionInfo: {
        padding: 10,
        alignContent: 'center',
    },
    sectionLabel: {
        fontSize: 10,
        marginBottom: 2,
    },
    sectionTitle:{
        fontWeight: 'bold',
        fontSize: 14,
    }
})

export default styles;