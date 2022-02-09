import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const Config = {
  apiKey: 'AIzaSyBuVvTNrm2lDO8cdLaAJ__iQiIRxVSZTrI',
  authDomain: 'react-redux-fb943.firebaseapp.com',
  projectId: 'react-redux-fb943',
  storageBucket: 'react-redux-fb943.appspot.com',
  messagingSenderId: '391118812131',
  appId: '1:391118812131:web:f813be559d68d89041a6d6',
  measurementId: 'G-S36NMN9WVY',
};

firebase.initializeApp(Config);
firebase.firestore().settings({ timestampsInSnapshots: true ,merge:true});

export default firebase;
