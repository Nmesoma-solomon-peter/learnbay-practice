// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOC0tGakAEIfBic1gJHCqykSXRAfbKTAY",
  authDomain: "authentication-914d2.firebaseapp.com",
  projectId: "authentication-914d2",
  storageBucket: "authentication-914d2.appspot.com",
  messagingSenderId: "262675294494",
  appId: "1:262675294494:web:40924bce635dcade04810f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();