// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3-HwHN4cSx_XjyxaC1S0DBFS6MEuVMYY",
  authDomain: "wilson-6c962.firebaseapp.com",
  projectId: "wilson-6c962",
  storageBucket: "wilson-6c962.appspot.com",
  messagingSenderId: "705398830735",
  appId: "1:705398830735:web:9d13f8cfdffc798621a2fa",
  measurementId: "G-MX502VE188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);