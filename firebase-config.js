import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKRFkjIYBtYeeR7FyL8nbUvdyiOsJt7Jg",
  authDomain: "gram-panchayat-sandi.firebaseapp.com",
  projectId: "gram-panchayat-sandi",
  storageBucket: "gram-panchayat-sandi.firebasestorage.app",
  messagingSenderId: "149938563786",
  appId: "1:149938563786:web:5de4125f56f3796e55e233"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
