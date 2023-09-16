// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAibse_k3P5f3nWszjxP3l1oUVnMEpt2fM",
  authDomain: "netflixgpt-18eef.firebaseapp.com",
  projectId: "netflixgpt-18eef",
  storageBucket: "netflixgpt-18eef.appspot.com",
  messagingSenderId: "987348104663",
  appId: "1:987348104663:web:268c8715a0d611d0ab0792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();