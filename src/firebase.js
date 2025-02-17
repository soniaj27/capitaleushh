

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA83_fC994TySbXvzVLanewmrBu5UAhXnE",
  authDomain: "capital-rush-c31ec.firebaseapp.com",
  projectId: "capital-rush-c31ec",
  storageBucket: "capital-rush-c31ec.firebasestorage.app",
  messagingSenderId: "602199807731",
  appId: "1:602199807731:web:e9cb772e895d77d3238986",
  measurementId: "G-XHQ4PJPE1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };