//---------------------------------------------------------------------------------------------------------------------------------------------------------
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import {React,useState} from 'react'
import * as Animatable from 'react-native-animatable'

import { fireBase_AUTH } from '../../../BackEnd/Database/FireBase/firebase'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { loginLightMode } from '../../../Constants/lightMode';
import styles from './Styles';
import Register from '../Register/register';


//--------------------------------------------------------------------------------------------------------------------------------------------------------

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
          navigation.navigate('Main'); 
         setEmail('')
          setPassword('')
        }
      } catch (e) {
        console.log(e.message)
      }
      setEmail('')
      setPassword('')
    }}

    const goToRegister = () => {
      navigation.navigate('Register', darkMode); // Passa o estado darkMode como parâmetro
      };
    
    return (
    <View style={[styles.container, !darkMode && loginLightMode.blackbackground]}>

      <Animatable.View style={styles.animatableView} animation={"fadeInLeft"} delay={900}>
        <Text style={[styles.message, !darkMode && loginLightMode.lightText]}>Login</Text>
       </Animatable.View>

       <Animatable.View animation={!darkMode ? "fadeInDown" : "fadeInUp"} style={[styles.animatableTitle, !darkMode && loginLightMode.viewMode]}>

        

        <Text style={[styles.title,, !darkMode && loginLightMode.blacktext]}>Email</Text>
        
        
        <Animatable.View style={styles.inputView} animation={"fadeInLeft"} delay={200}>
        <TextInput placeholder='Type your email...' style={styles.input}  onChangeText={text => setEmail(text)} value={email}/>
        </Animatable.View>
        
        <Text style={[styles.title,, !darkMode && loginLightMode.blacktext]}>Password</Text>
        <TextInput placeholder='Type your password...' style={styles.input} placeholderTextColor={'#a7a3b4'} onChangeText={text => setPassword(text)} value={password}
        secureTextEntry={true}/>

        <TouchableOpacity style={styles.forgot}>
          <Text style={[styles.registerBtn, !darkMode && loginLightMode.blacktext]}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.login,  !darkMode && loginLightMode.blackbackground]} onPress={handleLogin}  >
          <Text style={[styles.lgnBtn, !darkMode && styles.lightText]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register} onPress={goToRegister}>
          <Text style={styles.registerBtn}>Don't have an account yet? Sign Up</Text>
        </TouchableOpacity>

        <Animatable.Image animation={!darkMode ? "flipInY" : "flipInX"}
        duration={3000}
        source={!darkMode ? require('../../assets/light.png') : require('../../assets/uchihaW.jpg')}
         style={styles.imageStyle}
        resizeMode= 'contain'
      />

      <TouchableOpacity onPress={handleDarkModeToggle}>
      <Text style={[loginLightMode.modeText, darkMode && loginLightMode.darkModeText]}>{darkMode ? 'Dark Mode' : 'Light Mode'} </Text>
      </TouchableOpacity>
      </Animatable.View>

    </View>
    
  )
}
export default Login