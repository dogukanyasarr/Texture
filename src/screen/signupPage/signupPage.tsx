import { View, Text, Image, TextInput, TouchableOpacity, Alert, Platform, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';
import Button from '../../components/button/Button';
import { auth, db } from '../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import colors from '../../constants/colors';

const SignupPage = ({navigation} : any) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUri, setImageUri] = useState('');

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        // Android 13 ve üzeri için READ_MEDIA_IMAGES izni
        if (Platform.Version >= 33) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            {
              title: 'Galeri Erişim İzni',
              message: 'Uygulamanın galeriye erişmesi için izin gerekiyor',
              buttonNeutral: 'Daha Sonra Sor',
              buttonNegative: 'İptal',
              buttonPositive: 'Tamam',
            },
          );
          console.log('READ_MEDIA_IMAGES izni durumu:', granted);
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          // Android 13'ten düşük sürümler için READ_EXTERNAL_STORAGE izni
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: 'Galeri Erişim İzni',
              message: 'Uygulamanın galeriye erişmesi için izin gerekiyor',
              buttonNeutral: 'Daha Sonra Sor',
              buttonNegative: 'İptal',
              buttonPositive: 'Tamam',
            },
          );
          console.log('READ_EXTERNAL_STORAGE izni durumu:', granted);
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
      } catch (err) {
        console.warn('İzin hatası:', err);
        return false;
      }
    }
    return true;
  };

  const handleImageUpload = async () => {
    try {
      console.log('Fotoğraf seçme işlemi başlatılıyor...');
      const hasPermission = await requestStoragePermission();
      console.log('İzin durumu:', hasPermission);
      
      if (!hasPermission) {
        Alert.alert('İzin Reddedildi', 'Galeriye erişim izni verilmedi');
        return;
      }

      console.log('Galeri açılıyor...');
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
        includeBase64: false,
        selectionLimit: 1,
      });

      console.log('Galeri sonucu:', result);

      if (!result.didCancel && result.assets && result.assets[0].uri) {
        console.log('Seçilen fotoğraf URI:', result.assets[0].uri);
        setImageUri(result.assets[0].uri);
      } else {
        console.log('Fotoğraf seçilmedi veya iptal edildi');
      }
    } catch (error) {
      console.error('Resim seçme hatası:', error);
      Alert.alert('Hata', 'Resim seçilirken bir hata oluştu: ' + (error as Error).message);
    }
  };

  const handlePress = async () => {
    try {
      if (!email || !password || !name || !surname) {
        Alert.alert('Hata', 'Tüm alanları doldurunuz!');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Firestore'a kullanıcı bilgilerini kaydet
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        surname: surname,
        email: email,
        profileImage: imageUri || '',
        createdAt: new Date().toISOString()
      });
      
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

      <View style={style.profileImageContainer}>
        {imageUri ? (
          <Image 
            source={{ uri: imageUri }} 
            style={style.profileImage}
          />
        ) : (
          <Text style={style.imageUploadText}>Fotoğraf Ekle</Text>
        )}
        <TouchableOpacity style={style.imageUploadButton} onPress={handleImageUpload}>
          <Text style={style.imageUploadText}>+</Text>
        </TouchableOpacity>
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

      <View style={style.buttonTopContainer}>
        <Button text={'Kayıt Ol'} onPress={handlePress} isChange={true} width={'95%'} fontSize={18} backgroundColor={colors.blue}/>
      </View>

    </View>
  )
}

export default SignupPage;
