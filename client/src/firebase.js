// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blogblogforge.firebaseapp.com",
  projectId: "mern-blogblogforge",
  storageBucket: "mern-blogblogforge.firebasestorage.app",
  messagingSenderId: "106017117355",
  appId: "1:106017117355:web:8389af35c874969add53ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);