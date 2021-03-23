import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyDWrEpvbIvHoV-Yn6RJhyHw4abz5FhByZM",
  authDomain: "iclimb-db.firebaseapp.com",
  projectId: "iclimb-db",
  storageBucket: "iclimb-db.appspot.com",
  messagingSenderId: "750852129165",
  appId: "1:750852129165:web:dbf2b499cc52fcc07b3dc4",
  measurementId: "G-D99ENYFE7D",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;