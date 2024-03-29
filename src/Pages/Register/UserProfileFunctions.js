import { useState } from "react";
import COLORS from '../../../Constants/Colors'
import { fireBase_AUTH, fireBase_FIRESTORE } from '../../../BackEnd/Database/FireBase/firebase'
import { createUserWithEmailAndPassword  } from '@firebase/auth';
import { doc, setDoc, getDocs, collection } from 'firebase/firestore';

export const useUserProfileState = (darkMode) => {
  const auth = fireBase_AUTH;
  const database = fireBase_FIRESTORE ;

  const [isPasswordVisible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountrycode] = useState('351');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isPassLess, setBorderColor] = useState(false);
  const [isNumberLess, setNumberLess] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isEmailEmpty, setEmailEmpty] = useState(false);

  const [isUserValid, setUserValid] = useState(false);
  const [isUserEmpty, setUserEmpty] = useState(false);
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(false);
  const [isEmailExists, setEmailExists] = useState(false);

  const getPlaceholderTextColor = () => {
    return darkMode ? COLORS.uchihaPurple : COLORS.black;
  };

  const getIcon = () => {
    return !isPasswordVisible ? 'eye-off' : 'eye'
  }

  const formatPhoneNumber = () => {
    const formattedNumber = `+${countryCode}${phoneNumber}`;
    return formattedNumber;
  };

  const checkBox = () => {
    setCountrycode('351');
    setPassword('');
    setPhoneNumber('');
    setUsername('');
    setEmail('')
  }

  const validParameters = () => {
    if (password.length < 8) {
        setBorderColor(!isPassLess);
        
    }
  
    if(phoneNumber.length < 9) {
      setNumberLess(!isNumberLess);
    }
  
    if (!email.includes('@.')) {
      setEmailValid(!isEmailValid);
    }
  
    if(email.length === 0) {
      setEmailEmpty(!isEmailEmpty);
    }
  };

  const userProfile = async () => {
    const formattedNumber = formatPhoneNumber();
    validParameters(password, phoneNumber, email, username)
    
    try {
      // Verificar se o username já está em uso
      const usernameSnapshot = await getDocs(collection(database, 'users'));

      //cria um array de usernames que existem em minha firebase
      const usernames = usernameSnapshot.docs.map(doc => doc.data().username);
      const phoneNumbers = usernameSnapshot.docs.map(doc => doc.data().phoneNumber)
      const emails = usernameSnapshot.docs.map(doc => doc.data().email);

      phoneNumbers.forEach(phoneNumber => {
        console.log(phoneNumber);
      });

      if (usernames.includes(username)) {
        setUserValid(!isUserValid);
        return; 
      }

      if(phoneNumbers.includes(formattedNumber)) {
        setPhoneNumberValid(!isPhoneNumberValid);
        return;
      }

      if(emails.includes(email)) {
        setEmailExists(!isEmailExists);
      }
    
      // Se o username não estiver em uso, criamos um novo usuário
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Obter o ID do usuário
      const userId = userCredential.user.uid;
    
      // Adicionar informações de perfil ao Firestore
      const userRef = doc(database, 'users', userId);
      await setDoc(userRef, {
        email: email,
        username: username,
        phoneNumber: formattedNumber,
      });
      console.log('Usuário criado com sucesso e perfil adicionado ao Firestore');
    } catch (error) {
      console.log('Erro ao criar usuário:', error);
    } finally {
      checkBox();
    }
  };

  return {
    isPasswordVisible,setVisible,
    email,setEmail,
    username,setUsername,
    password,setPassword,
    countryCode,setCountrycode,
    phoneNumber,setPhoneNumber,
    isPassLess,isNumberLess,
    isEmailValid,isEmailEmpty,
    isUserValid,isUserEmpty,
    isPhoneNumberValid, isEmailExists,
    getPlaceholderTextColor, getIcon, userProfile
  };
};