// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bog-webapp-v1-1702412248842.firebaseapp.com",
  projectId: "bog-webapp-v1-1702412248842",
  storageBucket: "bog-webapp-v1-1702412248842.appspot.com",
  messagingSenderId: "572738350953",
  appId: "1:572738350953:web:52911a9a83070704ae57f8",
  measurementId: "G-D67H15HCY8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);