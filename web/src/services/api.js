import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp(
  JSON.parse(process.env.REACT_APP_FIREBASE_ACCESS_KEY_API),
);

export const firestore = firebase.firestore();

export const auth = firebase.auth();
