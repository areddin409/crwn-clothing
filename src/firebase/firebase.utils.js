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
  measurementId: 'G-PRM9BDMMVL',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //return if user is not authenicated
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //documentRef returns a documentSnapshot object & performs CRUD methods
  //collectionRef returns a querySnapshot object
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
