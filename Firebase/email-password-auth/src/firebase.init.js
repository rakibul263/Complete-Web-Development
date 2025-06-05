// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_R8JzBVzXst6dlNHKpioNq4zO_8w4EmA",
  authDomain: "email-password-auth-e9416.firebaseapp.com",
  projectId: "email-password-auth-e9416",
  storageBucket: "email-password-auth-e9416.firebasestorage.app",
  messagingSenderId: "175737726922",
  appId: "1:175737726922:web:0687347b4c20a186209133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);