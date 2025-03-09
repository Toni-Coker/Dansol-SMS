// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtdFn4wNKh4u5zXxCE0vvuCXkpcDL9Bgk",
  authDomain: "dansol-sms.firebaseapp.com",
  projectId: "dansol-sms",
  storageBucket: "dansol-sms.firebasestorage.app",
  messagingSenderId: "706263738310",
  appId: "1:706263738310:web:bef20eaa97c31b742b74c7",
  measurementId: "G-PZXREY5M74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);