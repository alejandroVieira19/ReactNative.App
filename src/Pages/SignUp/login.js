import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

const Login = () => {
  return (
    <View style={styles.container}>

      <Animatable.View style={styles.animatableView} animation={"fadeInLeft"} delay={500}>
        <Text style={styles.message}>welcome to Log-In</Text>
       </Animatable.View>

       <Animatable.View style={styles.animatableTitle} animation={"fadeInUp"}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder='Type your email...' style={styles.input} placeholderTextColor={'#a7a3b4'}/>

        <Text style={styles.title}>Password</Text>
        <TextInput placeholder='Type your password...' style={styles.input} placeholderTextColor={'#a7a3b4'}/>

        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.registerBtn}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.login} >
          <Text style={styles.lgnBtn}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register}>
          <Text style={styles.registerBtn}>Don't have an account yet? Sign Up</Text>
        </TouchableOpacity>

        <Animatable.Image 
        animation="flipInY"
        delay={600}
        source={require('../../assets/itachi.jpg')}
        style={styles.imageStyle}
        resizeMode='contain'
      />


       </Animatable.View>

       
      
    

        

      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7a3b4'
},
animatableView: {
marginTop: '14%',
marginBottom: '8%',
paddingStart: '5%'
},
message: {
  fontSize: 28,
  fontWeight: 'bold',
  color: '#090909'
},
animatableTitle: {
  backgroundColor: 'black',
  flex: 1,
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingStart: '5%',
  paddingEnd: '5%'
},
title: {
  fontSize: 28,
  color: '#a7a3b4',
  marginTop: 28
},
input: {
  fontSize:16,
  color: 'white',
  height: 40,
  marginBottom:12,
  borderBottomWidth:1,
  borderColor: '#a7a3b4'
},
login: {
  backgroundColor: '#a7a3b4',
  width: '100%',
  borderRadius: 4,
  paddingVertical: 8,
  marginTop: 22,
  justifyContent: 'center',
  alignItems: 'center'
},
lgnBtn: {
  color: '#090909',
  fontWeight: 'bold',
  fontSize: 18
},
register: {
  marginTop: 14,
  alignSelf: 'center'
},
registerBtn: {
  color: '#a7a3b4'
},
containerLogo: {
  
  justifyContent: 'center',
  alignItems: 'center',
},
imageStyle: {
  width: '50%',
  height: '50%',
  left: 100

  
},
})

export default Login