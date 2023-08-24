
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBlm4j7bTfrdjzXu2UZYA5AS0b5aRuEfsU",
  authDomain: "pulse-replica.firebaseapp.com",
  projectId: "pulse-replica",
  storageBucket: "pulse-replica.appspot.com",
  messagingSenderId: "303191365685",
  appId: "1:303191365685:web:c47b30bdb1e0ec9b8b797c",
  measurementId: "G-QG8GW247G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)