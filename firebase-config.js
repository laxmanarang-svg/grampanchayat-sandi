import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "अपना apiKey डालें",
  authDomain: "gram-panchayat-sandi.firebaseapp.com",
  projectId: "gram-panchayat-sandi",
  storageBucket: "gram-panchayat-sandi.firebasestorage.app",
  messagingSenderId: "149938563786",
  appId: "अपना appId डालें"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
