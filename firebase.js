import { initializeApp } from "firebase/app";
import { getAuth ,sendEmailVerification} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//to query database
import {getDatabase} from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBUzC_B_77jEgzofudG7bt_-4cGJLb4kgA",
  authDomain: "brain--care-app.firebaseapp.com",
  projectId: "brain--care-app",
  storageBucket: "brain--care-app.appspot.com",
  messagingSenderId: "1075853321778",
  appId: "1:1075853321778:web:269c9304312303685c3e2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Realtime Database
const db = getDatabase();
export  default db;