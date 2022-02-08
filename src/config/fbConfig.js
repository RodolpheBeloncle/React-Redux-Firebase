import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBuVvTNrm2lDO8cdLaAJ__iQiIRxVSZTrI',
  authDomain: 'react-redux-fb943.firebaseapp.com',
  projectId: 'react-redux-fb943',
  storageBucket: 'react-redux-fb943.appspot.com',
  messagingSenderId: '391118812131',
  appId: '1:391118812131:web:f813be559d68d89041a6d6',
  measurementId: 'G-S36NMN9WVY',
};

firebase.initialiseApp(firebaseConfig);
firebase.firestore().settings({ timesstampInSnapshot: true });

export default firebase;
