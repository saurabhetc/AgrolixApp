import * as firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import '@firebase/auth';
import '@firebase/firestore';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'your-project-id-1234',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};


 const app= initializeApp(firebaseConfig);


export const authentication = getAuth(app);