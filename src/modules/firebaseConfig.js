import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC0iZYKqOYZGtqiM2mvl8yy8GnlRQzsZ2g",
  authDomain: "javascriptfirebase-c5827.firebaseapp.com",
  databaseURL: "https://javascriptfirebase-c5827-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "javascriptfirebase-c5827",
  storageBucket: "javascriptfirebase-c5827.appspot.com",
  messagingSenderId: "1099175448659",
  appId: "1:1099175448659:web:8a464c13e1087a2f57f6a6"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const usersRef = ref(db, 'users');