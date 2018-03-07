import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDD_4MW8hYuM5br92zfnvFKF5-alkjngqg',
  authDomain: 'rlsl-2fa45.firebaseapp.com',
  databaseURL: 'https://rlsl-2fa45.firebaseio.com',
  projectId: 'rlsl-2fa45',
  storageBucket: 'rlsl-2fa45.appspot.com',
  messagingSenderId: '59844772377',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
