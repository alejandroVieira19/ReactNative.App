// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALesHSM2ztn5o-U1SrJA-eDgqof3rUQR0",
  authDomain: "reactnative-uchiha.firebaseapp.com",
  projectId: "reactnative-uchiha",
  storageBucket: "reactnative-uchiha.appspot.com",
  messagingSenderId: "162178205207",
  appId: "1:162178205207:web:2576d5214b76e7bce1fe52"
};

// Initialize Firebase
export const fireBase_APP = initializeApp(firebaseConfig);
export const fireBase_AUTH = getAuth(fireBase_APP);
export const fireBase_FIRESTORE = getFirestore(fireBase_APP);

