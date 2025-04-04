import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    content: {
        width: '85%',
        position: 'absolute',
        top: '45%',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 12,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 15,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    rememberMe: {
        color: '#333',
        fontSize: 14,
    },
    forgotPassword: {
        color: '#007BFF',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    loginButton: {
        width: '100%',
        paddingVertical: 12,
        backgroundColor: '#1E3A8A',
        borderRadius: 8,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    signupText: {
        color: '#333',
        fontSize: 14,
    },
    signupLink: {
        color: '#007BFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
