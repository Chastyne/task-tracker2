// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);