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
  textContainer: {
    alignItems: 'center',
    marginTop: '90%', // Üstten biraz boşluk
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textDesc: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
    width: 300,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
