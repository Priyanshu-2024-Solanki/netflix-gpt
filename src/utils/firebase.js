// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByjvCltaAB_4xoj8OIeLuVfhPczgYL3AM",
  authDomain: "netflixgpt-6434d.firebaseapp.com",
  projectId: "netflixgpt-6434d",
  storageBucket: "netflixgpt-6434d.appspot.com",
  messagingSenderId: "750770359899",
  appId: "1:750770359899:web:92bf8034d551692605b97e",
  measurementId: "G-64JB3VD8EF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();