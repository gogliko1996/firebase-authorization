import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY83NML87Oiaq_15JXYQiICePj05OCE1Q",
  authDomain: "fir-authentication-341a8.firebaseapp.com",
  projectId: "fir-authentication-341a8",
  storageBucket: "fir-authentication-341a8.appspot.com",
  messagingSenderId: "595445677003",
};

const app = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
