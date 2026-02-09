// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOF2P9EDy6c2tRspIJpFk_g9OsdLB06YE",
  authDomain: "duxes-academy.firebaseapp.com",
  projectId: "duxes-academy",
  storageBucket: "duxes-academy.appspot.com",
  messagingSenderId: "67176446225",
  appId: "1:67176446225:web:cda69dcf87fa61f7bc74b0",
  measurementId: "G-S6N3TNTXSV",
};

export const app = initializeApp(firebaseConfig); // ✅ Add this
export const auth = getAuth(app);
export const db = getFirestore(app);
