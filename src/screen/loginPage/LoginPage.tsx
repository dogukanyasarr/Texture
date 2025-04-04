import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={style.container}>
      {/* Arka Plan Resmi */}
      <Image source={require('../../assets/images/loginpage_bg.jpg')} style={style.backgroundImage} />

      {/* Sayfa İçeriği */}
      <View style={style.content}>
        <Text style={style.title}>Welcome Back</Text>
        <Text style={style.subtitle}>Login to your account</Text>

        {/* Kullanıcı Adı */}
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={style.input}
          placeholderTextColor="#888"
        />

        {/* Şifre */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={style.input}
          placeholderTextColor="#888"
        />

        {/* Şifremi Unuttum ve Beni Hatırla */}
        <View style={style.row}>
          <TouchableOpacity>
            <Text style={style.rememberMe}>☐ Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Giriş Butonu */}
        <TouchableOpacity style={style.loginButton}>
          <Text style={style.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Kayıt Ol */}
        <View style={style.signupContainer}>
          <Text style={style.signupText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={style.signupLink}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
