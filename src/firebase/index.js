import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPUQGLjykZ_45phBebqTZBwGAJHtBQDUk",
  authDomain: "react-firebase-auth-41f4a.firebaseapp.com",
  projectId: "react-firebase-auth-41f4a",
  storageBucket: "react-firebase-auth-41f4a.appspot.com",
  messagingSenderId: "502094039812",
  appId: "1:502094039812:web:8ba5619e5404d906f51e51",
  measurementId: "G-3MR73QFVG8"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
