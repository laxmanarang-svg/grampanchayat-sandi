import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAKRFkjIYBtYEeR7Fyl8nbUvdyiOsJt7Jg",
  authDomain: "gram-panchayat-sandi.firebaseapp.com",
  projectId: "gram-panchayat-sandi",
  storageBucket: "gram-panchayat-sandi.firebasestorage.app",
  messagingSenderId: "149938563786",
  appId: "1:149938563786:web:5de4125f56f3796e55e233"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
