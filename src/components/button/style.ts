import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const style = StyleSheet.create({
    button:{
        backgroundColor: colors.darkGreen,
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
        
    },
    buttonText:{
        color: 'white',
        fontSize:16,
        fontWeight:'bold'

    },
    buttonBorder:{
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: colors.darkGreen,
        borderWidth:1,
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight:'bold'

    },
    buttonTextBorder:{
        color: colors.darkGreen,
        fontSize:16,
    }


})