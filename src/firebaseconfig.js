// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9spdAs97f6lcaKF_FZiEKSolSkKzvvjQ",
  authDomain: "task-tracker2-debe1.firebaseapp.com",
  projectId: "task-tracker2-debe1",
  storageBucket: "task-tracker2-debe1.firebasestorage.app",
  messagingSenderId: "485319120724",
  appId: "1:485319120724:web:1dd40236c5c6b2a26f9ac1",
  measurementId: "G-SCS0QF2TS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
