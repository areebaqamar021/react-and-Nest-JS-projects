import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMsP4Dp3hUHRweI8grtNoeMOKpn5wyg6c",
  authDomain: "login-auth-d69c3.firebaseapp.com",
  projectId: "login-auth-d69c3",
  storageBucket: "login-auth-d69c3.appspot.com",
  messagingSenderId: "584090562976",
  appId: "1:584090562976:web:ca13bc61273a3d204b74c5",
  measurementId: "G-80LW3M0WF6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };


