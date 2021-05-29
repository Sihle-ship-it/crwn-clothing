import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDPej8o6rqgQCUki-7eBKsnQqxea80T2Eg",
    authDomain: "crwn-db-ef2a8.firebaseapp.com",
    projectId: "crwn-db-ef2a8",
    storageBucket: "crwn-db-ef2a8.appspot.com",
    messagingSenderId: "146907044649",
    appId: "1:146907044649:web:204f07446053219cd47538",
    measurementId: "G-MR6JESNQ1W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promp: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
