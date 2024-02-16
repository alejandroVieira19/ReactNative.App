import { View, Text, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView, TouchableHighlight, Switch } from 'react-native'
import React, { useState, useCallback } from 'react';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

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
  <View style={[styles.container, !darkMode && styles.lightView]}>
    
   
    
  
     <View style={ [styles.containerLogo, !darkMode && styles.lightView ]}>
      
      <Animatable.Image animation={darkMode ? "flipInY" : "flipInX"}
        delay={500}
        source={!darkMode ? require('../../assets/light.png') : require('../../assets/rk.png')}
       style={styles.imageStyle} resizeMode='contain'/>

      <TouchableOpacity onPress={handleDarkModeToggle}>
      <Text style={[styles.modeText, darkMode && styles.darkModeText]}>{!darkMode ? 'Light Mode' : 'Dark Mode'} </Text>
      </TouchableOpacity>
      
    </View>

    <Animatable.View delay={750} animation={!darkMode ? "fadeInDown" : "fadeInUp"} style={[styles.containerText, !darkMode && styles.containerTextLight]}>
      <Text style={[styles.title, !darkMode && styles.lightText]}>Welcome to the Uchiha World App.</Text>
      <Text style={[styles.text, !darkMode && styles.lightText]}>Login to get started or sign up to start your adventure</Text>

      <TouchableOpacity style={[styles.loginBtn,!darkMode && styles.lightBorder]}
      onPress={goToLogin}>
        <Text style={[styles.textBtn, !darkMode && styles.borderLightText]}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.SignUpBtn, !darkMode && styles.lightBorder]}
      onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.textBtn, !darkMode && styles.borderLightText]}>SignUp</Text>
      </TouchableOpacity>

      </Animatable.View>
    </View>
</ScrollView>
)
}

const styles = StyleSheet.create({
  container: {
    
   flex:1,
    backgroundColor: 'black'
  },
  containerLogo: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  imageStyle: {
    width: '120%',
    height: '50%',
    
  },
  containerText: {
    flex:1,
    backgroundColor: '#a7a3b4',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom:12,
    
  },
  text: {
    color: '#090909'
  },
  loginBtn: {
    position: 'absolute',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '32%',
    backgroundColor: '#090909',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignUpBtn: {
    position: 'absolute',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '10%',
    backgroundColor: '#090909',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textBtn: {
    fontSize: 20,
    color: '#a7a3b4',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    backgroundColor:'white'
  },
  //light mode
  modeText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  darkModeText: {
    color: 'white', // Altera a cor do texto para branco no modo escuro
  },
  lightView: {
    backgroundColor: 'white'
  },
  containerTextLight: {
    backgroundColor: '#090909'
  },
  lightText: {
    color:'white'
  },
  borderLightText: {
    color:'white'
  },
  lightBorder: {
    backgroundColor: '#af1313'

  },
 
});
export default Welcome