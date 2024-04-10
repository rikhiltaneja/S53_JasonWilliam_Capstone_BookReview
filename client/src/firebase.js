// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bookreview-2735e.firebaseapp.com",
  projectId: "bookreview-2735e",
  storageBucket: "bookreview-2735e.appspot.com",
  messagingSenderId: "66470053029",
  appId: "1:66470053029:web:d0471e966d07eae5e8f94c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);