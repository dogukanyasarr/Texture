import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView, StatusBar, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { style } from './style';
import { getUserProfile, savePhotoToTextureData } from '../../firebase/firestore';
import { uploadTexturePhoto } from '../../firebase/storage';
import { launchCamera } from 'react-native-image-picker';
import { getCurrentUser } from '../../firebase/auth';

const carouselImage = [
  require('../../assets/images/bluebg.jpg'),
  require('../../assets/images/darkbg.jpg'),
  require('../../assets/images/bluebg.jpg'),
];

const newsList = [
  { 
    id: '1',
    title: 'Websites now have no keyboards. Got a thought?',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg'),
    date: '2 saat önce'
  },
  { 
    id: '2',
    title: 'Bizarre fruit are market fresh investments.',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg'),
    date: '4 saat önce'
  },
  { 
    id: '3',
    title: 'Coffee now being used to power cars. Wait, what?',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg'),
    date: '6 saat önce'
  },
  { 
    id: '4',
    title: 'Websites now have no keyboards. Got a thought?',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg'),
    date: '8 saat önce'
  },
  { 
    id: '5',
    title: 'Bizarre fruit are market fresh investments.',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg'),
    date: '10 saat önce'
  },
  { 
    id: '6',
    title: 'Coffee now being used to power cars. Wait, what?',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg'),
    date: '12 saat önce'
  },
];

const HomePage = ({ navigation }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [photoTitle, setPhotoTitle] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImage.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const userProfile = await getUserProfile();
        if (userProfile?.profilePhoto) {
          setProfilePhoto(userProfile.profilePhoto);
        }
      } catch (error) {
        console.error('Error fetching profile photo:', error);
      }
    };

    fetchProfilePhoto();
  }, []);

  const handlePhotoUpload = async (uri: string) => {
    if (!photoTitle.trim()) {
      Alert.alert('Hata', 'Lütfen fotoğraf için bir başlık girin');
      return;
    }

    try {
      setUploading(true);
      const user = getCurrentUser();
      if (!user) throw new Error('Kullanıcı bulunamadı');

      const photoUrl = await uploadTexturePhoto(uri);
      await savePhotoToTextureData({
        photoUrl,
        title: photoTitle,
        userId: user.uid
      });

      Alert.alert('Başarılı', 'Fotoğraf başarıyla yüklendi!');
      setPhotoTitle('');
    } catch (error: any) {
      Alert.alert('Hata', error.message || 'Fotoğraf yüklenirken bir hata oluştu');
    } finally {
      setUploading(false);
    }
  };

  const openCamera = async () => {
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

  const renderNewsItem = ({ item } : any) => (
    <TouchableOpacity style={style.newsItem}>
      <Image source={item.image} style={style.newsImage} />
      <View style={style.newsTextContainer}>
        <Text style={style.newsText} numberOfLines={2}>{item.title}</Text>
        <View style={style.newsSubtitleContainer}>
          <Text style={style.newsSubtitle}>{item.subtitle}</Text>
          <Text style={style.newsDate}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="dark-content" />
      <View style={style.header}>
        <Text style={style.headerText}>Texture</Text>
        <View style={style.menuContainer}>
          <TouchableOpacity style={style.menuButton}>
            <Text style={style.menuText}>Favoriler</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={style.menuButton} 
            onPress={openCamera}
            disabled={uploading}
          >
            <Text style={style.menuText}>
              {uploading ? 'Yükleniyor...' : 'Kamera'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={style.menuButton} 
            onPress={() => navigation.navigate('Profile')}
          >
            {profilePhoto ? (
              <Image 
                source={{ uri: profilePhoto }} 
                style={style.profileImage} 
              />
            ) : (
              <Text style={style.menuText}>Profil</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.photoTitleContainer}>
        <TextInput
          style={style.photoTitleInput}
          placeholder="Fotoğraf başlığı girin"
          value={photoTitle}
          onChangeText={setPhotoTitle}
        />
      </View>

      <View style={style.carouselContainer}>
        <Image 
          source={carouselImage[currentImageIndex]} 
          style={style.carouselImage} 
          resizeMode="cover"
        />
        <View style={style.carouselIndicatorContainer}>
          {carouselImage.map((_, index) => (
            <View 
              key={index} 
              style={[
                style.carouselIndicator,
                index === currentImageIndex && style.carouselIndicatorActive
              ]} 
            />
          ))}
        </View>
      </View>

      <FlatList
        data={newsList}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        style={style.newsList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.newsListContent}
      />
    </SafeAreaView>
  );
};

export default HomePage;