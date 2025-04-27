import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { style } from './style';

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
    image: require('../../assets/images/bluebg.jpg')
  },
  { 
    id: '2',
    title: 'Bizarre fruit are market fresh investments.',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg')
  },
  { 
    id: '3',
    title: 'Coffee now being used to power cars. Wait, what?',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg')
  },
  { 
    id: '4',
    title: 'Websites now have no keyboards. Got a thought?',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg')
  },
  { 
    id: '5',
    title: 'Bizarre fruit are market fresh investments.',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg')
  },
  { 
    id: '6',
    title: 'Coffee now being used to power cars. Wait, what?',
    subtitle: '%80 meşe ağacından yapılmıştır',
    image: require('../../assets/images/bluebg.jpg')
  },
];


const HomePage = () => {
  const [currentImageIndex, setCurrenImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrenImageIndex((prevIndex) => (prevIndex + 1) % carouselImage.length);

    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderNewsItem = ({ item } : any) => (
    <View style={style.newsItem}>
    <Image source={item.image} style={style.newsImage} />
    <View style={style.newsTextContainer}>
      <Text style={style.newsText}>{item.title}</Text>
      <Text style={style.newsSubtitle}>{item.subtitle}</Text>
    </View>
  </View>

  );
  return ( 
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}>Texture</Text>
        <View style={style.iconContainer}>
          <TouchableOpacity style={style.iconButton}>
            <Text>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.iconButton}>
            <Text>📷</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.iconButton}>
            <Text>👤</Text>
          </TouchableOpacity>
        </View>

      </View>
      <Image source={carouselImage[currentImageIndex]} style={style.carouselImage} />

      {/* News List */}
      <FlatList
        data={newsList}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        style={style.newsList}
      />
      
    </View>
  )
}

export default HomePage