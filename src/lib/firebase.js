//firebase
import { initializeApp } from "firebase/app";
let firebaseConfig = {
  //config here
};
export const app = initializeApp(firebaseConfig);

//firestore
import { getFirestore } from "firebase/firestore";
export const firestore = getFirestore(app);

//auth
import { getAuth } from "firebase/auth";
export const auth = getAuth(app);
