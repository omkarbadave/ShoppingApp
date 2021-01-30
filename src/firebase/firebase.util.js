import firebase from 'firebase/app'
import  'firebase/auth';
import 'firebase/firestore';

const congfig = {
    apiKey: "AIzaSyDoavb1lMU_7Rd0LjSCFaMoBAKbaJn6adw",
    authDomain: "ecommerce-db-482bd.firebaseapp.com",
    projectId: "ecommerce-db-482bd",
    storageBucket: "ecommerce-db-482bd.appspot.com",
    messagingSenderId: "367245266331",
    appId: "1:367245266331:web:27c49055a4f25ca9dae53e",
    measurementId: "G-WTM70CK2VW"
  }

  firebase.initializeApp(congfig);

  export const auth = firebase.auth();
  export const  firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGooglke = () => auth.signInWithPopup(provider);

  export default firebase;

