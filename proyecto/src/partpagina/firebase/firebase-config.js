
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKhcI15TeXlT3A0mbzDAwYb032buM-crA",
  authDomain: "serviciomotos-e0bf2.firebaseapp.com",
  projectId: "serviciomotos-e0bf2",
  storageBucket: "serviciomotos-e0bf2.appspot.com",
  messagingSenderId: "907351211408",
  appId: "1:907351211408:web:56904875b9873289684715",
  measurementId: "G-R5QKPGG25P"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
console.log('Firebase DB:', db);