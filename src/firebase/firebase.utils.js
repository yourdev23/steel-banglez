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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();


    if(!snapShot.exists) {
        const{ displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData    
            })
        }   catch (error){
            console.log('error creating user, error.message')
        }
    }

    return userRef;

};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = ()  => auth.signInWithPopup(provider);

export default firebase;

