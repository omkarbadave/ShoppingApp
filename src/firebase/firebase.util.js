import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const congfig = {
  apiKey: "AIzaSyDoavb1lMU_7Rd0LjSCFaMoBAKbaJn6adw",
  authDomain: "ecommerce-db-482bd.firebaseapp.com",
  projectId: "ecommerce-db-482bd",
  storageBucket: "ecommerce-db-482bd.appspot.com",
  messagingSenderId: "367245266331",
  appId: "1:367245266331:web:27c49055a4f25ca9dae53e",
  measurementId: "G-WTM70CK2VW",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(congfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
