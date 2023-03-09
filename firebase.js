import { initializeApp } from "firebase/app";
import { getAuth ,sendEmailVerification} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//to query database
import {getDatabase} from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAsGaH5WRwWNNWUucw-m-g0dZ6Q5t-tJCQ",
  authDomain: "braincareapp-43361.firebaseapp.com",
  databaseURL: "https://braincareapp-43361-default-rtdb.firebaseio.com",
  projectId: "braincareapp-43361",
  storageBucket: "braincareapp-43361.appspot.com",
  messagingSenderId: "394666829068",
  appId: "1:394666829068:web:6963542ce10b4c48395529"
};

// Initialize Firebase
try{
  const app = initializeApp(firebaseConfig);
}catch(e){
  console.log('error in firebase');
}


//Realtime Database
const db = getDatabase();
export default db;