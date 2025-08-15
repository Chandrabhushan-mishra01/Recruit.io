
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAcC3qvFJ7FSNsdC1xTOr2EG0y_1GKue5s",
  authDomain: "recruit-7ecb9.firebaseapp.com",
  projectId: "recruit-7ecb9",
  storageBucket: "recruit-7ecb9.firebasestorage.app",
  messagingSenderId: "602937449811",
  appId: "1:602937449811:web:cc6996a73b7d22ab6755a6",
  measurementId: "G-YZSQDCXK8K"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);