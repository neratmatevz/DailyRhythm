import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalView: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      width: '80%', // Adjusted width for better visibility
      maxWidth: 400, // Maximum width to ensure good readability
      elevation: 5, // Add elevation for a slight shadow on Android
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15, // Increased margin for better separation
      paddingHorizontal: 15, // Increased padding for better input spacing
      width: '100%',
      borderRadius: 5, // Added borderRadius for a softer look
    },
    button: {
      backgroundColor: '#007BFF', // A nice blue color for buttons
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    cancelButton: {
      backgroundColor: 'gray', // A neutral color for the cancel button
      marginTop: 10,
      marginLeft: 20
    },
    cancelText: {
      color: 'white',
      fontSize: 16,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 65,
        margin:15 // half of the width and height to create a circular shape
    },
    modalTitle:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
  });
  

export default styles;