// Import the Firebase modules
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // For Realtime Database
import { getFirestore } from 'firebase/firestore'; // For Firestore

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtYGK47DkumIprCrMbf7SqbqU92sxHPJ8",
    authDomain: "user-details-1a565.firebaseapp.com",
    databaseURL: "https://user-details-1a565-default-rtdb.firebaseio.com",
    projectId: "user-details-1a565",
    storageBucket: "user-details-1a565.firebasestorage.app",
    messagingSenderId: "693725537995",
    appId: "1:693725537995:web:e9fe8e1126e395dc885d4e",
    measurementId: "G-GZLQFBZTDP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database Services
const database = getDatabase(app); // For Realtime Database
const firestore = getFirestore(app); // For Firestore

export { database, firestore };
