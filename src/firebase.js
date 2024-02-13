// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx5ZmD3jzD6BgvOV1SYU9h7f8TKl0WJV0",
  authDomain: "fir-auth-1132-73b56.firebaseapp.com",
  projectId: "fir-auth-1132-73b56",
  storageBucket: "fir-auth-1132-73b56.appspot.com",
  messagingSenderId: "866056691283",
  appId: "1:866056691283:web:886fa604f1b8b6c70970a6",
  measurementId: "G-HHX1X4WQ91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();
const imageDb = getStorage(app);

export{app,auth,imageDb};