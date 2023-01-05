import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCr2xqyQYlLZoR0CH7UaGXhC9FBx8lb1-s",
  authDomain: "walili-705dc.firebaseapp.com",
  projectId: "walili-705dc",
  storageBucket: "walili-705dc.appspot.com",
  messagingSenderId: "1022029947592",
  appId: "1:1022029947592:web:83700098b86a3b62373bfd",
  measurementId: "G-D7Z5FJ4T7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const database = getFirestore(app);
export const storage = getStorage(app);
