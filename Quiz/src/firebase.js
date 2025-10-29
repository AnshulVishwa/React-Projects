// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- ADD THIS LINE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcOeoeP4Rzglcuab0wbkOrb0o-72464Nc",
  authDomain: "quiz-1-15d93.firebaseapp.com",
  projectId: "quiz-1-15d93",
  storageBucket: "quiz-1-15d93.firebasestorage.app",
  messagingSenderId: "514714385429",
  appId: "1:514714385429:web:5019829c855fccb051621c",
  measurementId: "G-3X9HFT2Y5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); // <-- AND ADD THIS LINE
