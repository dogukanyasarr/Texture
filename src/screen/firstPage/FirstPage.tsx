import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { style } from './style'
import Button from '../../components/button/Button'

const FirstPage = ({ navigation }: any) => {

  const goToLogin = () => {
    navigation.navigate('Login'); // Giriş yap sayfanın adı 'LoginPage' ise
  };

  const goToRegister = () => {
    navigation.navigate('Signup'); // Kayıt ol sayfanın adı 'RegisterPage' ise
  };

  return (
    <SafeAreaView style={style.container}>
      <Image 
        source={require('../../assets/images/darkbluebg.png')} 
        style={style.backgroundImage} 
        resizeMode="cover"
      />

      <View style={style.contentContainer}>
        <View style={style.textContainer}>
          <Text style={style.textTitle}>Ahşap Dokuları Keşfet!</Text>
          <Text style={style.textDesc}>
            Görüntü işleme ile ahşap dokularını sınıflandırın ve benzersiz tasarımlar oluşturun.
          </Text>
        </View>

        <View style={style.buttonContainer}>
          <Button 
            text={'Giriş Yap'} 
            onPress={goToLogin} 
            isChange={true} 
            fontSize={18} 
          />
          <Button 
            text={'Kayıt Ol'} 
            onPress={goToRegister} 
            isChange={false} 
            fontSize={18}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FirstPage
