// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG-EWA74mfJ5l3Q7Z-H05xYTtRn8XvpuE",
  authDomain: "auth-integration-44b13.firebaseapp.com",
  projectId: "auth-integration-44b13",
  storageBucket: "auth-integration-44b13.firebasestorage.app",
  messagingSenderId: "1001558402948",
  appId: "1:1001558402948:web:5e7256e3c17cc9927d5fd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);