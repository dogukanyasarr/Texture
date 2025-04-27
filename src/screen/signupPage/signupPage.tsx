import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import Button from '../../components/button/Button';

import { auth } from '../../firebase/firebaseConfig'; // Firebase bağlantısını import ediyoruz
import { createUserWithEmailAndPassword } from 'firebase/auth'; // kayıt fonksiyonunu import ediyoruz

const SignupPage = ({navigation} : any) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Hata', 'Email ve şifre boş bırakılamaz!');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log('Kayıt başarılı:', user);
      Alert.alert('Başarılı', 'Kayıt işlemi başarılı!');

      navigation.navigate('Home');

    } catch (error: any) {
      console.log(error);
      Alert.alert('Kayıt Hatası', error.message);
    }
  };

  return (
    <View style={style.container}>
      <Image source={require('../../assets/images/darkbluebg.png')} style={style.backgroundImage} />

      <View style={style.textContainer}>
        <Text style={style.textTitle}>Aramıza Hoş Geldin!</Text>
      </View>

      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder='Adınız'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={style.input}
          placeholder='Soyadınız'
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={style.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={style.input}
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={style.textButton}>
      </View>

      <View style={style.buttonTopContainer}>
        <Button text={'Kayıt Ol'} onPress={handlePress} isChange={true} width={'95%'} fontSize={18} />
      </View>

    </View>
  )
}

export default SignupPage;
