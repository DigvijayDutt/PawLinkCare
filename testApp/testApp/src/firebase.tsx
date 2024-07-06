import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2RzvjoiLbXjJRx8llLfgb7D7Z2E0ZrUg",
  authDomain: "pawlinkcare-c569e.firebaseapp.com",
  projectId: "pawlinkcare-c569e",
  storageBucket: "pawlinkcare-c569e.appspot.com",
  messagingSenderId: "814651177762",
  appId: "1:814651177762:web:a9d022dba5b8386085837b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);