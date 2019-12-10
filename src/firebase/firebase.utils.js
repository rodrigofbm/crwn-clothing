import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOhD6wQlpAljmSmHHwXZ5Z7eGO7TCqfLA",
  authDomain: "crwn-clothing-4a497.firebaseapp.com",
  databaseURL: "https://crwn-clothing-4a497.firebaseio.com",
  projectId: "crwn-clothing-4a497",
  storageBucket: "crwn-clothing-4a497.appspot.com",
  messagingSenderId: "173277225995",
  appId: "1:173277225995:web:f4f845929c96d6f00bd30e"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
