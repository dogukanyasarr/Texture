import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const style = StyleSheet.create({
    button:{
        backgroundColor: colors.darkGreen,
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20

    },
    buttonText:{
        color: 'white',
        fontSize:16

    },
    buttonBorder:{
        backgroundColor:'white',
        borderColor: colors.darkGreen,
        borderWidth:1,
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20

    },
    buttonTextBorder:{
        color: colors.darkGreen,
        fontSize:16,
    }


})