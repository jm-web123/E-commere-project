// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBpfidi7qOfRxeZd6RFLL23mN559v6CQyE",
  authDomain: "e-commerce-bc432.firebaseapp.com",
  projectId: "e-commerce-bc432",
  storageBucket: "e-commerce-bc432.firebasestorage.app",
  messagingSenderId: "390911658594",
  appId: "1:390911658594:web:8a533bb45c4c865031df3b",
  measurementId: "G-2DEGCRM851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;