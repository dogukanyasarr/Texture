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
            <Image source={require('../../assets/images/darkbluebg.png')} style={style.backgroundImage} />

            <View style={style.itemContainer}>

                <View style={style.textContainer}>
                    <Text style={style.textTitle}>Ahşap Dokuları Keşfet!</Text>
                    <Text style={style.textDesc}>Görüntü işleme ile ahşap dokularını sınıflandırın.</Text>
                </View>

                <View style={style.buttonTopContainer}>
                    <Button text={'Giriş Yap'} onPress={handlePress} isChange={true} fontSize={18} />
                </View>
                <View style={style.buttonBottomContainer}>
                    <Button text={'Kayıt Ol'} onPress={handlePress} isChange={false} fontSize={18} />
                </View>
            </View>
        </View>
    )
}

export default WelcomePage;
