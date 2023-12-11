import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db }