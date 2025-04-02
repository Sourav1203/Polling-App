import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFHPHbDbQReF1aPSmuX6Xl11nhlCaE6K4",
    authDomain: "polling-app-5dc55.firebaseapp.com",
    projectId: "polling-app-5dc55",
    storageBucket: "polling-app-5dc55.firebasestorage.app",
    messagingSenderId: "33899263991",
    appId: "1:33899263991:web:4a4facc024fe4bbadbe0f2",
    measurementId: "G-NY3J99LHXB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
