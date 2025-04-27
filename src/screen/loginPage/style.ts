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
        marginTop: '45%',


    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    inputContainer: {
        alignItems: 'center'

    },
    emailInput: {
        height: 50,
        width: '95%',
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginTop: '15%',
    },
    passwordInput: {
        height: 50,
        width: '95%',
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginTop: '5%',
    },
    textButton: {
        alignItems: 'flex-end',
        marginRight: '5%',
        marginTop: '2%'
    },
    buttonTopContainer: {
        marginTop: 20,
        alignItems:'center'
    },
    line:{
        alignItems:'center',
        marginVertical:20
        

    },
    lineText:{
        color: colors.darkGreen,
        fontSize:16,
        fontWeight:'bold'
    },

    buttonBottomContainer: {
        alignItems:'center'

    },

});
