import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAsS-mR4VfllIooanfNxqf4_rks8nfUzKw",
  authDomain: "crwn-db-c8656.firebaseapp.com",
  databaseURL: "https://crwn-db-c8656.firebaseio.com",
  projectId: "crwn-db-c8656",
  storageBucket: "crwn-db-c8656.appspot.com",
  messagingSenderId: "7026779646",
  appId: "1:7026779646:web:4f91021c365ca272940caf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
