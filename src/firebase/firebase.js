import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvl9vuJ_9yQys8HLrpGqZQ3Zkkfa85JTg",
  authDomain: "pigga-29297.firebaseapp.com",
  databaseURL: "https://pigga-29297-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pigga-29297",
  storageBucket: "pigga-29297.appspot.com",
  messagingSenderId: "439657428685",
  appId: "1:439657428685:web:a0638d6ec3365c1eae1b84",
  measurementId: "G-KQDNVDVELB"
};


export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);

