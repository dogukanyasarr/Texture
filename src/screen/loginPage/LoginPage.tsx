import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import TextButton from '../../components/textButton/TextButton';
import Button from '../../components/button/Button';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Hata', 'Email ve şifre boş bırakılamaz!');
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('Giriş başarılı:', user);
      navigation.navigate('Home');

    } catch (error: any) {
      console.log(error);
      Alert.alert('Giriş Hatası', error.message);
    }
  };

  return (
    <View style={style.container}>
      <Image source={require('../../assets/images/darkbluebg.png')} style={style.backgroundImage} />

      <View style={style.textContainer}>
        <Text style={style.textTitle}>Tekrar Hoş Geldin!</Text>
      </View>

      <View style={style.inputContainer}>
        <TextInput
          style={style.emailInput}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={style.passwordInput}
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={style.textButton}>
        <TextButton
          text='Şifremi Unuttum'
          onPress={() => {/* Şifre sıfırlama işlemi yapabiliriz buraya */}}
        />
      </View>

      <View style={style.buttonTopContainer}>
        <Button text={'Giriş Yap'} onPress={handlePress} isChange={true} width={'95%'} fontSize={18} />
      </View>

      <View style={style.line}>
        <Text style={style.lineText}>Veya</Text>
      </View>

      <View style={style.buttonBottomContainer}>
        <Button text={'Kayıt Ol'} onPress={() => navigation.navigate('Signup')} isChange={false} width={'95%'} fontSize={18} />
      </View>
    </View>
  );
};

export default LoginPage;
