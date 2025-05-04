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
        marginTop: '15%',
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    inputContainer: {
        marginTop: '10%',
        marginLeft:'3%',
        gap: 15,
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
    profileImageContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignSelf: 'center',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.blue,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    imageUploadButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.blue,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageUploadText: {
        color: colors.blue,
        fontSize: 16,
        fontWeight: 'bold',
    },
    previewImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
        alignSelf: 'center',
    },
});
