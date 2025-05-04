import { View, Text } from 'react-native'
import React from 'react'
import { AppNavigationPropsType } from './AppNavigationPropsType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from '../screen/loginPage/LoginPage';
import HomePage from '../screen/homePage/HomePage';
import SignupPage from '../screen/signupPage/signupPage';
import WelcomePage from '../screen/welcomePage/WelcomePage';
import FirstPage from '../screen/firstPage/FirstPage';
import ProfilePage from '../screen/profilePage/ProfilePage';

const Stack = createNativeStackNavigator<AppNavigationPropsType>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='First'>
      <Stack.Screen name='First' component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={SignupPage} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={ProfilePage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default AppNavigation