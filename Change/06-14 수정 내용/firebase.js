// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1AOxFK0fK8Io-msRfuK8L_QK1xhj6kvI",
  authDomain: "fir-60cc6.firebaseapp.com",
  projectId: "fir-60cc6",
  storageBucket: "fir-60cc6.appspot.com",
  messagingSenderId: "732782502274",
  appId: "1:732782502274:web:993ca67cb154add5372f9b",
  measurementId: "G-F2EZ3TRW54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);