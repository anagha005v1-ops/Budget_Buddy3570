// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwAmAcikgW-wD-q7n7_E68XardSvggJDE",
  authDomain: "budgetbuddy-26a1a.firebaseapp.com",
  projectId: "budgetbuddy-26a1a",
  storageBucket: "budgetbuddy-26a1a.firebasestorage.app",
  messagingSenderId: "341688792836",
  appId: "1:341688792836:web:6f3bc16f87922cc16bc251",
  measurementId: "G-GJDGSH2TPS"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export { db };