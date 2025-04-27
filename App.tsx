import { View, Text, Alert } from 'react-native'
import React from 'react'
import WelcomePage from './src/screen/welcomePage/WelcomePage'
import Button from './src/components/button/Button'
import LoginPage from './src/screen/loginPage/LoginPage'
import SignupPage from './src/screen/signupPage/signupPage'
import AppNavigation from './src/navigation/AppNavigation'
import HomePage from './src/screen/homePage/HomePage'

const App = () => {

  return (
    <AppNavigation/>
  )
}

export default App