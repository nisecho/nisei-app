// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw9sCZ5d05HD0TwKnVS0Calxb_0BG180E",
  authDomain: "niseii-app.firebaseapp.com",
  projectId: "niseii-app",
  storageBucket: "niseii-app.appspot.com",
  messagingSenderId: "891488948262",
  appId: "1:891488948262:web:032116348f930f446516e7",
  measurementId: "G-ZEK59Q53PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();