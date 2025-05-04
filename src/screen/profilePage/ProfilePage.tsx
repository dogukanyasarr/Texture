import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Alert, PermissionsAndroid, Platform } from 'react-native';
import { style } from './style';
import type { ProfileStats } from './type';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from '../../components/button/Button';
import colors from '../../constants/colors';
import { uploadProfilePhoto } from '../../firebase/storage';
import { saveUserProfile } from '../../firebase/firestore';
import { getCurrentUser } from '../../firebase/auth';
import { getAuth } from 'firebase/auth';
import { getUserProfile } from '../../firebase/firestore';

const stats: ProfileStats[] = [
  {
    icon: require('../../assets/images/darkbg.jpg'),
    value: '500+',
    label: 'Başarılı Hasta',
    color: colors.orange,
  },
  {
    icon: require('../../assets/images/darkbg.jpg'),
    value: '10 Yıl',
    label: 'Deneyim',
    color: colors.pink,
  },
  {
    icon: require('../../assets/images/darkbg.jpg'),
    value: '28+',
    label: 'Başarılı Ameliyat',
    color: colors.purple,
  },
  {
    icon: require('../../assets/images/darkbg.jpg'),
    value: '8+',
    label: 'Sertifika',
    color: colors.yellow,
  },
];

const chunkArray = (arr: any[], size: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Kamera İzni',
          message: 'Kamerayı kullanmak için izin vermelisiniz.',
          buttonNeutral: 'Daha Sonra Sor',
          buttonNegative: 'İptal',
          buttonPositive: 'Tamam',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      Alert.alert('Hata', 'Kamera izni alınamadı.');
      return false;
    }
  }
  return true;
};

const ProfilePage = ({ navigation }: any) => {
  const [uploading, setUploading] = useState(false);
  const statRows = chunkArray(stats, 2);
  const [userData, setUserData] = useState<any>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const data = await getUserProfile();
        setUserData(data);
      }
    };
    fetchUserData();
  }, []);

  const handlePhotoUpload = async (uri: string) => {
    try {
      setUploading(true);
      const downloadURL = await uploadProfilePhoto(uri);
      await saveUserProfile({ profilePhoto: downloadURL });
      Alert.alert('Başarılı', 'Fotoğraf başarıyla yüklendi!');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      Alert.alert('Hata', error.message || 'Fotoğraf yüklenirken bir hata oluştu.');
    } finally {
      setUploading(false);
    }
  };

  const handleImageUpload = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
        includeBase64: false,
        selectionLimit: 1,
      });

      if (!result.didCancel && result.assets && result.assets[0].uri) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Hata', 'Resim seçilirken bir hata oluştu: ' + (error as Error).message);
    }
  };

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Kamera izni gerekli', 'Kamerayı kullanmak için izin vermelisiniz.');
      return;
    }
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          Alert.alert('Hata', response.errorMessage || 'Kamera açılamadı');
        } else if (response.assets && response.assets[0].uri) {
          handlePhotoUpload(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
      </View>
      <View style={style.profileCard}>
        <View style={style.avatarContainer}>
          {userData && userData.profileImage ? (
            <Image source={{ uri: userData.profileImage }} style={style.avatar} />
          ) : (
            <Image source={require('../../assets/images/avatar.jpg')} style={style.avatar} />
          )}
        </View>
        <Text style={style.name}>{userData ? `${userData.name} ${userData.surname}` : 'Yükleniyor...'}</Text>
        <Text style={style.specialty}>{userData ? userData.email : ''}</Text>
      </View>

      <View style={style.actionBoxContainer}>
        <View style={style.actionRow}>
          {/* Ayarlar Butonu */}
          <View style={style.actionItem}>
            <TouchableOpacity style={style.squareButton} onPress={() => navigation?.navigate?.('Home')}>
              <Image source={require('../../assets/images/homeicon.png')} style={style.actionIconImg} />
            </TouchableOpacity>
          </View>
          {/* Kamera Butonu */}
          <View style={style.actionItem}>
            <TouchableOpacity style={style.roundButton} onPress={openCamera}>
              <Image source={require('../../assets/images/cameraicon.png')} style={style.actionIconImgCamera} />
            </TouchableOpacity>
          </View>
          {/* Home Butonu */}
          <View style={style.actionItem}>
            <TouchableOpacity style={style.squareButton} >
              <Image source={require('../../assets/images/settingicon.png')} style={style.actionIconImg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={style.statsGrid}>
        {statRows.map((row, rowIdx) => (
          <View style={style.statsRow} key={rowIdx}>
            {row.map((item, idx) => (
              <View style={[style.statBox, { backgroundColor: item.color }]} key={idx}>
                <View style={style.statBoxGradient} />
                <Image source={item.icon} style={style.statIcon} />
                <Text style={style.statValue}>{item.value}</Text>
                <Text style={style.statLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <View style={style.logoutButton}>
        <Button
          text="ÇIKIŞ YAP"
          width={'90%'}
          onPress={() => navigation?.navigate?.('Login')}
          isChange={true}
          backgroundColor={colors.blue}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
