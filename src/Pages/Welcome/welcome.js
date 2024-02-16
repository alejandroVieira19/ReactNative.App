import { View, Text, TouchableOpacity, RefreshControl, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

import LightMode from '../../../Constants/lightMode';

import styles from './Styles';

const Welcome = () => {

// para acessar a pagina navigation
const navigation = useNavigation();

const [darkMode, setDarkMode] = useState(true);

const handleDarkModeToggle = () => {
setDarkMode(!darkMode);
};


//--------------------------------------------------------------------------------
//funcão para criar o reload page
const [refreshing, setRefreshing] = React.useState(false);
const onRefresh = useCallback(() => {
setRefreshing(true);
setTimeout(() => {
  setRefreshing(false);
  
}, 2000);
}, []);
//-------------------------------------------------------------------------------
const goToLogin = () => {
navigation.navigate('SignUp', darkMode); // Passa o estado darkMode como parâmetro
};

const goToRegister = () => {
  navigation.navigate('Register', darkMode); // Passa o estado darkMode como parâmetro
  };

return (
<ScrollView
contentContainerStyle={styles.scrollView}
refreshControl={
<RefreshControl
  refreshing={refreshing}
  onRefresh={()=> navigation.navigate('Welcome')}
/>
}
>
<View style={[styles.container, !darkMode && LightMode.lightView]}>

  <View style={ [styles.containerLogo, !darkMode && LightMode.lightView ]}>
  
  <Animatable.Image animation={darkMode ? "flipInY" : "flipInX"}
    delay={500}
    source={!darkMode ? require('../../assets/light.png') : require('../../assets/rk.png')}
    style={styles.imageStyle} resizeMode='contain'/>

  <TouchableOpacity onPress={handleDarkModeToggle}>
  <Text style={[LightMode.modeText, darkMode && LightMode.darkModeText]}>{!darkMode ? 'Light Mode' : 'Dark Mode'} </Text>
  </TouchableOpacity>
  
</View>

<Animatable.View delay={750} animation={!darkMode ? "fadeInDown" : "fadeInUp"} style={[styles.containerText, !darkMode && LightMode.containerTextLight]}>
  <Text style={[styles.title, !darkMode && LightMode.lightText]}>Welcome to the Uchiha World App.</Text>
  <Text style={[styles.text, !darkMode && LightMode.lightText]}>Login to get started or sign up to start your adventure</Text>

  <TouchableOpacity style={[styles.loginBtn,!darkMode && LightMode.lightBorder]}
  onPress={goToLogin}>
    <Text style={[styles.textBtn, !darkMode && LightMode.borderLightText]}>Log In</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.SignUpBtn, !darkMode && LightMode.lightBorder]}
  onPress={goToRegister}>
    <Text style={[styles.textBtn, !darkMode && LightMode.borderLightText]}>SignUp</Text>
  </TouchableOpacity>

  </Animatable.View>
</View>
</ScrollView>
)
}
export default Welcome