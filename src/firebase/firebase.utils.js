import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBpG1KEjBMtMTXDDp_DycoPc0GqfrFitfo',
  authDomain: 'crwn-db-6ca0a.firebaseapp.com',
  projectId: 'crwn-db-6ca0a',
  storageBucket: 'crwn-db-6ca0a.appspot.com',
  messagingSenderId: '171841884111',
  appId: '1:171841884111:web:2fbeea3cbbd083115a0cba'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
