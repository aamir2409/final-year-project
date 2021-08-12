import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC9yU1aebin7o5ncjmBDfu3cUII67z7-WU",
    authDomain: "trademetria-6877e.firebaseapp.com",
    projectId: "trademetria-6877e",
    storageBucket: "trademetria-6877e.appspot.com",
    messagingSenderId: "987045004188",
    appId: "1:987045004188:web:bdff46350d1f2c2e28fe59",
    measurementId: "G-86C117KJF5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();

  export {db,auth};