// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcZ4H4W3ylgZ6ximti1MSYkhXgzVy1Vy4",
  authDomain: "contact-form-f23c9.firebaseapp.com",
  projectId: "contact-form-f23c9",
  storageBucket: "contact-form-f23c9.appspot.com",
  messagingSenderId: "449897582694",
  appId: "1:449897582694:web:53a27ff3e6d24462da5da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
