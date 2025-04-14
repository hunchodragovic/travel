import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuJbmPD8MIMmC0KfqA4fMwFEo14LJn-i0",
  authDomain: "travel-1f52e.firebaseapp.com",
  projectId: "travel-1f52e",
  storageBucket: "travel-1f52e.firebasestorage.app",
  messagingSenderId: "513358490580",
  appId: "1:513358490580:web:7d312886a735c8e7078441",
  measurementId: "G-X6LCQ5Y04C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Firestore helper function
const addContactMessage = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), formData);
    console.log("Message stored with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

export { db, addContactMessage };
