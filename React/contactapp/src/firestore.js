import MyFirebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnczYOhTIw7LFwjzNBGEYtyAD4KSGZuUE",
  authDomain: "contact-app-92486.firebaseapp.com",
  projectId: "contact-app-92486",
  storageBucket: "contact-app-92486.appspot.com",
  messagingSenderId: "612158876848",
  appId: "1:612158876848:web:fe451de99be3cbf95fdf75"
};

// Initialize Firebase
const app = MyFirebase.initializeApp(firebaseConfig);
export const db = MyFirebase.firestore();