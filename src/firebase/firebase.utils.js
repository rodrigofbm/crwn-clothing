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

export const createProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user: ", error);
    }
  }

  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectToAdd.forEach(obj => {
    const objRef = collectionRef.doc();

    batch.set(objRef, obj);
  });

  return await batch.commit();
};

export const transformCollectionsSnapshotToMap = collections => {
  /* const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  }); */

  let objects = {};

  collections.forEach(doc => {
    const { title, items } = doc.data();

    objects[title.toLowerCase()] = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return objects;

  /* return transformedCollections.reduce((prev, collection) => {
    prev[collection.title.toLowerCase()] = collection;
    return prev;
  }, {}); */
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
