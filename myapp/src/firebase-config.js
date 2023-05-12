import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOMz-8NE8As2SsgO_FSc1bglM6oGmw1uc",
  authDomain: "bookstore-58ba1.firebaseapp.com",
  projectId: "bookstore-58ba1",
  storageBucket: "bookstore-58ba1.appspot.com",
  messagingSenderId: "550948620943",
  appId: "1:550948620943:web:60b791651948e47cc7fefa",
  measurementId: "G-ET6RB32BSW"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
