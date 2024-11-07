// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtwCex0K9ub-c0eRefwczuQqrXkZeCsuM",
  authDomain: "gdmwinery00.firebaseapp.com",
  projectId: "gdmwinery00",
  storageBucket: "gdmwinery00.firebasestorage.app",
  messagingSenderId: "308726473759",
  appId: "1:308726473759:web:35ca7e797d80595633612a",
  measurementId: "G-6LBFTG6BMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);