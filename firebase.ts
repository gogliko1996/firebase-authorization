import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
// process.env.EXPO_FIREBASE_API_KEY)

const firebaseConfig = {
  apiKey: process.env.EXPO_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_FIREBASE_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
