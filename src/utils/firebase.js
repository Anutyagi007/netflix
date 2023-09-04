// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmvJCMHWVec4Xky_r8_iZWv5kdMgHDnXQ",
  authDomain: "netflix-gpt-7d7f9.firebaseapp.com",
  projectId: "netflix-gpt-7d7f9",
  storageBucket: "netflix-gpt-7d7f9.appspot.com",
  messagingSenderId: "604970890820",
  appId: "1:604970890820:web:ea24481c3cef2e79806e11",
  measurementId: "G-83DSSCPXFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();