// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBThkzEWBOXS3OrpNp9xhq-zx4xxmscKT0",
  authDomain: "dogpeople-88757.firebaseapp.com",
  projectId: "dogpeople-88757",
  storageBucket: "dogpeople-88757.appspot.com",
  messagingSenderId: "562191870974",
  appId: "1:562191870974:web:8e877dddc9d2808647aeaf",
  measurementId: "G-D1DMQKNZ2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);//정보가 올바르면 아래 파이어스토어 접근