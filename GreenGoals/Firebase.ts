// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvVvcNEoqFGWjjEZ7VFYnqXLA4YaSyWdY",
  authDomain: "greengoals-cca16.firebaseapp.com",
  projectId: "greengoals-cca16",
  storageBucket: "greengoals-cca16.appspot.com",
  messagingSenderId: "1061699484888",
  appId: "1:1061699484888:web:5b14d1d49c394a19a96bad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, firebaseConfig };