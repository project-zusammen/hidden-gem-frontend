import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYD6huwV0UORRHC49zaBde93Zg2KtPqNY",
  authDomain: "hidden-gem-bfb98.firebaseapp.com",
  projectId: "idden-gem-bfb98",
  storageBucket: "hidden-gem-bfb98.appspot.com",
  messagingSenderId: "614180982148",
  appId: "1:614180982148:web:2446c051034dd329f3e1d1",
  measurementId: "G-8CHF89R8EE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp, `gs://${firebaseConfig.storageBucket}`);

export { storage };