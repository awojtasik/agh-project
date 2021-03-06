import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDtIVOmDpm-BdJp7Y1gu0E5XdlC05WDiQc",
    authDomain: "agh-project.firebaseapp.com",
    databaseURL: "https://agh-project.firebaseio.com",
    projectId: "agh-project",
    storageBucket: "agh-project.appspot.com",
    messagingSenderId: "757314896195",
    appId: "1:757314896195:web:94c7b44b9d8d09b764eff6"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      });
      return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = collections => {
      const transformedCollections = collections.docs.map(doc => {
          const {title, items} = doc.data();
          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          };
      });
      return transformedCollections.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      }, {});
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;