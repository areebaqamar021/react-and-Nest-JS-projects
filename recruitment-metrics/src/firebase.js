import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt0BVMeutmRkw6PppqxSWinur8G34seb0",
  authDomain: "recruitment-metrics-3b510.firebaseapp.com",
  projectId: "recruitment-metrics-3b510",
  storageBucket: "recruitment-metrics-3b510.appspot.com",
  messagingSenderId: "108111300558",
  appId: "1:108111300558:web:2ebd82faf5f0b157060d9f",
  measurementId: "G-1PFHVFP70R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };