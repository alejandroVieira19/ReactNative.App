import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import {React,useState} from 'react'
import * as Animatable from 'react-native-animatable'

import { fireBase_AUTH } from '../../../BackEnd/Database/FireBase/firebase'
import { signInWithEmailAndPassword } from '@firebase/auth';

import { useNavigation } from '@react-navigation/native';





const Login = ({route}) => {

  const [darkMode, setDarkMode] = useState(route.params);
   const handleDarkModeToggle = () => {
   setDarkMode(!darkMode);
    route = !route;
  };
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = fireBase_AUTH;
  const navigation = useNavigation();
  
  const handleLogin = async () => {

    if(email && password) {
      try {
        const response = await signInWithEmailAndPassword(auth, email,password);

        if(response.user) {
          navigation.navigate('Main'); // Navegue para a outra tela após o login bem-sucedido
         setEmail('')
          setPassword('')
        }
      } catch (e) {
        console.log(e.message)
      }
      setEmail('')
      setPassword('')
    }}
    
    return (
    <View style={[styles.container, !darkMode && styles.blackbackground]}>

      <Animatable.View style={styles.animatableView} animation={"fadeInLeft"} delay={900}>
        <Text style={[styles.message, !darkMode && styles.lightText]}>Log-In</Text>
       </Animatable.View>

       <Animatable.View animation={!darkMode ? "fadeInDown" : "fadeInUp"} style={[styles.animatableTitle, !darkMode && styles.viewMode]}>
        <Text style={[styles.title,, !darkMode && styles.blacktext]}>Email</Text>
        <TextInput placeholder='Type your email...' style={styles.input} placeholderTextColor={'#a7a3b4'}  onChangeText={text => setEmail(text)} // Atualiza o estado do email
        value={email}/>

        <Text style={[styles.title,, !darkMode && styles.blacktext]}>Password</Text>
        <TextInput placeholder='Type your password...' style={styles.input} placeholderTextColor={'#a7a3b4'} onChangeText={text => setPassword(text)} value={password}
        secureTextEntry={true}/>

        <TouchableOpacity style={styles.forgot}>
          <Text style={[styles.registerBtn, !darkMode && styles.blacktext]}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.login,  !darkMode && styles.blackbackground]} onPress={handleLogin}  >
          <Text style={[styles.lgnBtn, !darkMode && styles.lightText]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register}>
          <Text style={styles.registerBtn}>Don't have an account yet? Sign Up</Text>
        </TouchableOpacity>

        <Animatable.Image animation={!darkMode ? "flipInY" : "flipInX"}
        duration={3000}
        source={!darkMode ? require('../../assets/light.png') : require('../../assets/uchihaW.jpg')}
         style={styles.imageStyle}
        resizeMode= 'contain'
      />

      <TouchableOpacity onPress={handleDarkModeToggle}>
      <Text style={[styles.modeText, darkMode && styles.darkModeText]}>{darkMode ? 'Dark Mode' : 'Light Mode'} </Text>
      </TouchableOpacity>
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
  width: '60%',
  height: '30%',
  alignSelf:'center'
},
darkModeText: {
  color: '#a7a3b4', 
  
},
opacityMode: {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  
  
},
modeText: {
  color: '#a7a3b4',
  alignSelf:'center',
  height: '20%',
  
  fontSize: 16,
  fontWeight: 'bold',
  fontStyle: 'italic',
},
darkModeText: {
  color: '#a7a3b4', // Altera a cor do texto para branco no modo escuro
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
viewMode: {
  backgroundColor: 'white'
},
blackbackground: {
  backgroundColor: 'black'
},
blacktext: {
  color: 'black'
}

});


export default Login