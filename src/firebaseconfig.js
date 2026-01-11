// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwcr-HrsRKgT0p8O-WcTb-cFMC_cVts04",
    authDomain: "fire-base-auth-prac-a6d87.firebaseapp.com",
    projectId: "fire-base-auth-prac-a6d87",
    storageBucket: "fire-base-auth-prac-a6d87.firebasestorage.app",
    messagingSenderId: "6173144548",
    appId: "1:6173144548:web:569b014770f484845443f1",
    measurementId: "G-V42Y5PPECX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);