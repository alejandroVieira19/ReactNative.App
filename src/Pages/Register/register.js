import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, TextInput, Button} from 'react-native'
import {React,useState} from 'react'
import * as Animatable from 'react-native-animatable'

import { styles } from './Styles'
import LightMode, { registerLightMode } from '../../../Constants/lightMode'
import COLORS from '../../../Constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { fireBase_AUTH, fireBase_FIRESTORE } from '../../../BackEnd/Database/FireBase/firebase'
import { createUserWithEmailAndPassword  } from '@firebase/auth';
import { doc, setDoc,collection } from 'firebase/firestore';




const Register = ({route}) => {

  const auth = fireBase_AUTH;
  const database = fireBase_FIRESTORE ;
  const darkMode = route.params;

  const getPlaceholderTextColor = () => {
    return darkMode ? COLORS.uchihaPurple : COLORS.black;
  };

  const getIcon = () => {
    return !isPasswordVisible ? 'eye-off' : 'eye'
  }

  const [isPasswordVisible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode,setCountrycode] = useState('351');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isPassLess, setBorderColor] = useState(false); // Estado para controlar a cor da borda


  // Concatena o código do país e o número de telefone
  const formatPhoneNumber = () => {
    const formattedNumber = `+${countryCode}${phoneNumber}`;
    return formattedNumber;
  };
  
    const userProfile = async () => {
    const formattedNumber = formatPhoneNumber();
    checkPasswordLength(password)
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      
      // Obter o ID do usuário
      const userId = userCredential.user.uid;

      // Adicionar informações de perfil ao Firestore
      const userRef = doc(database, 'users', userId);
      await setDoc(userRef, {
      email: email,
      username: username,
      phoneNumber: formattedNumber,
      password: password
    });
    console.log('Usuário criado com sucesso e perfil adicionado ao Firestore');
  } catch (error) {
   console.error('Erro ao criar usuário:', error);
  } finally {
    checkBox();
  }
}



  const checkBox = () => {
    setCountrycode('351');
    setPassword('');
    setPhoneNumber('');
    setUsername('');
    setEmail('')
  }

  const checkPasswordLength = () => {
    if (password.length < 8) {
       setBorderColor(!isPassLess);
  }
};

  

  

  return (
    <SafeAreaView style={[styles.safeArea, !darkMode && registerLightMode.lightArea]}>
      <Animatable.View style={styles.safeView} animation={!darkMode ?"fadeInLeft": "fadeInRight"} duration={2000}>

        <Animatable.View style={[styles.textView, !darkMode && registerLightMode.lightArea]}>
          <Text style={[styles.createAccount, !darkMode && registerLightMode.lightText]}>Create Account</Text>
        <Text style={[styles.createText, !darkMode && registerLightMode.lightText]}>Create your Free account and enjoy! </Text>
        </Animatable.View>

        <View style={styles.emailView}>
          <Text style={[styles.emailText, !darkMode && registerLightMode.lightText]}>Username</Text>

          <Animatable.View style={styles.borderView} animation={!darkMode ?"flipInY": "flipInX"} duration={3500}>
            <TextInput 
            placeholder='Enter your username' placeholderTextColor={getPlaceholderTextColor()}
            keyboardType='email-address' style={[styles.TextInput, !darkMode && registerLightMode.lightText ]}
            onChangeText={text => setUsername(text)} value={username}/>
          </Animatable.View>
        </View>

        <View style={styles.emailView}>
          <Text style={[styles.emailText, !darkMode && registerLightMode.lightText]}>Email address</Text>

          <Animatable.View style={styles.borderView} animation={!darkMode ?"flipInY": "flipInX"} duration={3500}>
            <TextInput 
            placeholder='Enter your email address' placeholderTextColor={getPlaceholderTextColor()}
            keyboardType='email-address' style={[styles.TextInput, !darkMode && registerLightMode.lightText ]}
            onChangeText={text => setEmail(text)} value={email}/>
          </Animatable.View>
        </View>

        <View style={styles.emailView}>
          <Text style={[styles.emailText, !darkMode && registerLightMode.lightText]}>Mobile Number</Text>

          <Animatable.View style={styles.phoneView} animation={!darkMode ?"flipInY": "flipInX"} duration={3500}>
            <TextInput 
            placeholder='+351' placeholderTextColor={getPlaceholderTextColor()}
            keyboardType='numeric' style={[styles.phoneInput, !darkMode && registerLightMode.lightText ]}
             maxLength={3} onChangeText={text => setCountrycode(text)} value={countryCode}/>

            <TextInput 
            placeholder='Enter your Phone Number' placeholderTextColor={getPlaceholderTextColor()}
            keyboardType='numeric' style={[styles.enterYourPhone, !darkMode && registerLightMode.lightText ]}
            maxLength={9} onChangeText={text => setPhoneNumber(text)} value={phoneNumber}/>
            </Animatable.View>
            </View>
            


          <View style={styles.emailView}>
          <Text style={[styles.emailText, !darkMode && registerLightMode.lightText]}>Password</Text>

          <Animatable.View style={[styles.borderView, !isPassLess ? styles.TextInput : registerLightMode.error]} animation={!darkMode ?"flipInY": "flipInX"}
            duration={3500}>
            <TextInput 
            placeholder='Enter your password' placeholderTextColor={getPlaceholderTextColor()}
            secureTextEntry = {!isPasswordVisible ? true : false} 
            style={[styles.TextInput, !darkMode && registerLightMode.lightText]}
            onChangeText={text => setPassword(text)} value={password}/>

            <TouchableOpacity style={styles.iconOpacity} onPress={()=> setVisible(!isPasswordVisible)}>
              <Ionicons  name={getIcon()} size={24} color={getPlaceholderTextColor()}/>
            </TouchableOpacity>
            </Animatable.View>
          </View>
          
          {isPassLess && (<Animatable.Text style={{color:'white', fontSize:12, fontWeight:'bold', left: 8}} 
          duration={4000} animation={"fadeInLeft"}>Password must be at least 8 characters long</Animatable.Text>)}


          <View style={styles.signUp}>
          <TouchableOpacity style={styles.signUpOpacity} onPress={userProfile}>

          <Animatable.View style={[styles.signborderView, !darkMode && registerLightMode.lightOpacity]} animation={!darkMode ?"flipInY": "flipInX"} duration={3500}>
            <Text style={[styles.signText, !darkMode && registerLightMode.lightSignUp]}>Sign Up</Text>
          </Animatable.View>
          </TouchableOpacity>
          </View>

          
        
        
        
        
        </Animatable.View>

    </SafeAreaView>
  )
}

export default Register;