import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    textContainer: {
        left: '3%',
        marginTop: '55%',
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    inputContainer: {
        marginTop: '10%',
        marginLeft:'3%',
        gap: 15, // burada her input arasında eşit boşluk olur (React Native 0.71 ve sonrası destekliyor)
    },
    input: {
        height: 50,
        width: '95%',
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },

    textButton: {
        alignItems: 'flex-end',
        marginRight: '5%',
        marginTop: 10,
    },
    buttonTopContainer: {
        marginTop: 30,
        alignItems: 'center',
    },

});
