import { View, Text, Image, Alert } from 'react-native'
import React from 'react'
import { style } from './style'
import Button from '../../components/button/Button';

const WelcomePage = () => {
    const handlePress = () => {
        Alert.alert('dsfdsf');
    };
    
    return (
        <View style={style.container}>
            <Image source={require('../../assets/images/welcomepage_bg.jpg')} style={style.backgroundImage} />
            
            <View style={style.textContainer}>
                <Text style={style.textTitle}>Texture</Text>
                <Text style={style.textDesc}>Görüntü işleme ile ahşap dokularını sınıflandırın.</Text>
            </View>
            
            <View style={style.buttonContainer}>
                <Button text={'Giriş Yap'} onPress={handlePress} isChange={true} width={150} fontSize={18} />
                <Button text={'Kayıt Ol'} onPress={handlePress} isChange={false} width={150} fontSize={18} />
            </View>
        </View>
    )
}

export default WelcomePage;
