// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD11LfNcPyKXLX5hvce4bhhQJlCFlIt0bM",
  authDomain: "anytime-earn-fitness-client.firebaseapp.com",
  projectId: "anytime-earn-fitness-client",
  storageBucket: "anytime-earn-fitness-client.appspot.com",
  messagingSenderId: "895890796443",
  appId: "1:895890796443:web:a6e0a3c95fc2af58b7fb3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;