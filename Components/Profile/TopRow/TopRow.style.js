import { StyleSheet } from "react-native";
import { PROFILECOLORS } from '../../../Assets/Constants/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' based on your design preference
      },
      overlayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 15,
        borderWidth: 2,  // Set the desired border width
        borderColor: 'rgba(0, 0, 0, 0.5)',  // Set the desired border color
    },
      informationContainer: {
        width: 200,
        height: 150,
        marginLeft: 20,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 15,
      },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginLeft:5
    },
    label: {
        fontSize: 16,
        color: '#000',
        marginTop: 15,
        marginLeft:15
    },
    section: {
        paddingHorizontal: 16,
        marginVertical: 5,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
    },
    seeAllButton: {
        backgroundColor: '#A9A9A9',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    seeAllButtonText: {
        color: '#eee'
    },
    sectionBody: {
        marginTop: 10,
    },
    sectionScroll: {
        paddingBottom: 20,
    },
    sectionCard: {
        width: 200,
        minHeight: 200,
        backgroundColor: '#fff',
        shadowColor: '#B0C4DE',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 6,
    },
    sectionImage: {
        width: '100%',
        aspectRatio: 1,
    },
    sectionInfo: {
        padding: 10,
    },
    sectionLabel: {
        fontSize: 12,
        marginBottom: 2,
    },
})

export default styles;