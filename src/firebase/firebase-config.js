import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZ-MoZYFyPreShfqISr6Ns85oYLcQKD7U",
  authDomain: "monkey-blogging-28083.firebaseapp.com",
  projectId: "monkey-blogging-28083",
  storageBucket: "monkey-blogging-28083.appspot.com",
  messagingSenderId: "284281696422",
  appId: "1:284281696422:web:8c7fa4a330a53ebf098467",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
