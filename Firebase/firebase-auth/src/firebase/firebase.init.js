//do not share firebase config with anyone

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Uu2UdtvJpG1EH3-Dyg3YKfFYrhmqSEg",
  authDomain: "fir-auth-4d240.firebaseapp.com",
  projectId: "fir-auth-4d240",
  storageBucket: "fir-auth-4d240.firebasestorage.app",
  messagingSenderId: "294219922887",
  appId: "1:294219922887:web:9f208a8e2c3580e80d2de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);