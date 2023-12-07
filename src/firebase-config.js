// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn7iMAduffxWNvVKNoePM1XZ8v3SG9c6A",
  authDomain: "walton-cshs-1.firebaseapp.com",
  projectId: "walton-cshs-1",
  storageBucket: "walton-cshs-1.appspot.com",
  messagingSenderId: "592939556134",
  appId: "1:592939556134:web:122ac62b45916fdb00b5e7",
  measurementId: "G-XPJPQJ53G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, analytics, db }