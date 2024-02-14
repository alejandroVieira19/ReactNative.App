import { View, Text, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

const Welcome = () => {

  // para acessar a pagina navigation
  const navigation = useNavigation();


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
  <View style={styles.container}>
    <View style={styles.containerLogo}>
      <Animatable.Image 
        animation="flipInY"
        source={require('../../assets/itachi.jpg')}
        style={styles.imageStyle}
        resizeMode='contain'
      />
    </View>

    <Animatable.View delay={600} animation={"fadeInUp"} style={styles.containerText}>
      <Text style={styles.title}>Welcome to the Uchiha World App.</Text>
      <Text style={styles.text}>Login to get started</Text>

      <TouchableOpacity style={styles.loginBtn}
      onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.textBtn}>Log In</Text>
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
    width: '50%',
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
    bottom: '15%',
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
  },
 
});
export default Welcome