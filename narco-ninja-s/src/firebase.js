// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIFkNHCnvWlu9Hk_vQx7mP4IlAaOVcCgc",
  authDomain: "medapotheek.firebaseapp.com",
  projectId: "medapotheek",
  storageBucket: "medapotheek.appspot.com",
  messagingSenderId: "536846459043",
  appId: "1:536846459043:web:44f7df5b65067db0e75f16",
  measurementId: "G-7X4NZS81T4"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

