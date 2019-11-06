import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyBzoRaduQT7Gp827vTLN3vn_8nfg7IEsKo",
    authDomain: "steel-banglez.firebaseapp.com",
    databaseURL: "https://steel-banglez.firebaseio.com",
    projectId: "steel-banglez",
    storageBucket: "steel-banglez.appspot.com",
    messagingSenderId: "816382404191",
    appId: "1:816382404191:web:0938e5edaa3599f2019dea",
    measurementId: "G-0DEREQ9JDV"
    
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = ()  => auth.signInWithPopup(provider);

export default firebase;

