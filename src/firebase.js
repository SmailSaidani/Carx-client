// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaWC7mSHiPuuLPNLDs3RzwoPUgMk9OrPk",
  authDomain: "carx-x00.firebaseapp.com",
  projectId: "carx-x00",
  storageBucket: "carx-x00.appspot.com",
  messagingSenderId: "613223348176",
  appId: "1:613223348176:web:649e00c6872ed3b2b66bd5",
  measurementId: "G-MCG0K03BDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signupUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const auth = getAuth(app);



