import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAcUmYmuIHZGZOgahrjelSdqdteubsWZA0",
    authDomain: "slack-clone-df2af.firebaseapp.com",
    projectId: "slack-clone-df2af",
    storageBucket: "slack-clone-df2af.appspot.com",
    messagingSenderId: "413592387657",
    appId: "1:413592387657:web:162218a74ca42833cbff98"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db }
