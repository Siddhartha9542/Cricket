// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDoc,
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCPtcwAy-8bMq9aNFq2ZaG9M-OlhvCHjWg",
  authDomain: "cricket-freshers-9feaf.firebaseapp.com",
  projectId: "cricket-freshers-9feaf",
  storageBucket: "cricket-freshers-9feaf.firebasestorage.app",
  messagingSenderId: "221661634330",
  appId: "1:221661634330:web:119ec804820ae8b0f896a3",
  measurementId: "G-XY028LZPEF"
};

let app, db, auth;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  console.log("Firebase initialized successfully for cricket-freshers-9feaf.");
} catch (err) {
  console.error("Firebase Initialization Error:", err);
}

export { 
  db, 
  auth, 
  collection, 
  addDoc, 
  getDoc,
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
};
