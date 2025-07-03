import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDFyDEckeCrdeZI7Syro_EXyybQSJtar7Q",
  authDomain: "prepwise-d5f75.firebaseapp.com",
  projectId: "prepwise-d5f75",
  storageBucket: "prepwise-d5f75.firebasestorage.app",
  messagingSenderId: "252214939236",
  appId: "1:252214939236:web:606299172d53f4155f9971",
  measurementId: "G-95T86CXXKL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);