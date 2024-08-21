import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Example service


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
  const db = getFirestore(app);

  export {db}