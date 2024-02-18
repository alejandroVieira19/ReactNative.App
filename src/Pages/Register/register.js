import { View, Text, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import {React} from 'react'
import * as Animatable from 'react-native-animatable'

import { styles } from './Styles'
import  { registerLightMode } from '../../../Constants/lightMode'
import { Ionicons } from '@expo/vector-icons'
import WarningPassword, { WarningEmail, WarningEmailEmpty, WarningPhoneNumber } from './Warning'
import { useUserProfileState } from './UserProfileFunctions'





const Register = ({route}) => {
  const darkMode = route.params;
  const {
    isPasswordVisible,setVisible,
    email,setEmail,
    username,setUsername,
    password,setPassword,
    countryCode,setCountrycode,
    phoneNumber,setPhoneNumber,
    isPassLess,setBorderColor,
    isNumberLess,setNumberLess,
    isEmailValid,setEmailValid,
    isEmailEmpty,setEmailEmpty,
    isUserValid, setUserValid,
    isUserEmpty,setUserEmpty,
    getPlaceholderTextColor, getIcon, userProfile} = useUserProfileState(darkMode);
    
    return (
    <SafeAreaView style={[styles.safeArea, !darkMode && registerLightMode.lightArea]}>
      <Animatable.View style={styles.safeView} animation={!darkMode ?"fadeInLeft": "fadeInRight"} duration={2000}>

        <Animatable.View style={[styles.textView, !darkMode && registerLightMode.lightArea]}>
          <Text style={[styles.createAccount, !darkMode && registerLightMode.lightText]}>Create Account</Text>
        <Text style={[styles.createText, !darkMode && registerLightMode.lightText]}>Create your Free account and enjoy! </Text>
        </Animatable.View>

        <View style={styles.emailView}>
          <Text style={[styles.emailText, !darkMode && registerLightMode.lightText]}>Username</Text>

          <Animatable.View style={[styles.borderView, !isUserEmpty ? styles.TextInput : registerLightMode.error, !isUserValid ? styles.TextInput : registerLightMode.error]} 
            animation={!darkMode ?"flipInY": "flipInX"} duration={3500}>
            <TextInput 
            placeholder='Enter your username' placeholderTextColor={getPlaceholderTextColor()}
            keyboardType='email-address' style={[styles.TextInput, !darkMode && registerLightMode.lightText ]}
            onChangeText={text => setUsername(text)} value={username}/>
          </Animatable.View>
        </View>

        <View style={styles.emailView}>
          <Text style={[styles.emailText, !darkMode && registerLightMode.lightText]}>Email address</Text>

          <Animatable.View style={[styles.borderView, !isEmailEmpty ? styles.TextInput : registerLightMode.error, !isEmailValid ? styles.TextInput : registerLightMode.error]} 
          animation={!darkMode ?"flipInY": "flipInX"} duration={3500}>
            <TextInput 
            placeholder='Enter your email address' placeholderTextColor={getPlaceholderTextColor()}
            keyboardType='email-address' style={[styles.TextInput, !darkMode && registerLightMode.lightText ]}
            onChangeText={text => setEmail(text)} value={email}/>
          </Animatable.View>
        </View>
        <WarningEmail isVisible={isEmailValid}/>
        <WarningEmailEmpty isVisible={isEmailEmpty}/>

        <View style={styles.emailView}>
          <Text style={[styles.emailText, !darkMode && registerLightMode.lightText]}>Mobile Number</Text>

          <Animatable.View style={[styles.phoneView, !isNumberLess ? styles.TextInput : registerLightMode.error]} animation={!darkMode ?"flipInY": "flipInX"} duration={3500}>
            <TextInput 
            placeholder='+351' placeholderTextColor={getPlaceholderTextColor()}
            keyboardType='numeric' style={[styles.phoneInput, !darkMode && registerLightMode.lightText ,!isPassLess ? styles.phoneInput : registerLightMode.errorBorder ]}
             maxLength={3} onChangeText={text => setCountrycode(text)} value={countryCode}/>

            <TextInput 
            placeholder='Enter your Phone Number' placeholderTextColor={getPlaceholderTextColor()}
            keyboardType='numeric' style={[styles.enterYourPhone, !darkMode && registerLightMode.lightText ]}
            maxLength={9} onChangeText={text => setPhoneNumber(text)} value={phoneNumber}/>
            </Animatable.View>
            </View>

           <WarningPhoneNumber isVisible={isNumberLess}/>
            


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
          
          <WarningPassword isVisible={isPassLess}/>

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