import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDnQAoEWWPBDoU59L_2dcjjYQHZy28BZ8U',
  authDomain: 'crwn-clothing-db-71c8d.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-71c8d.firebaseio.com',
  projectId: 'crwn-clothing-db-71c8d',
  storageBucket: 'crwn-clothing-db-71c8d.appspot.com',
  messagingSenderId: '785574871220',
  appId: '1:785574871220:web:42737bf583c76c5fa297e1',
  measurementId: 'G-PRM9BDMMVL'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

