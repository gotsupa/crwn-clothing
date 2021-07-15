import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCIFuC76kTbrXRqTtzysxQJ0Fcq2sK2IRU",
    authDomain: "crwn-db-a0a87.firebaseapp.com",
    projectId: "crwn-db-a0a87",
    storageBucket: "crwn-db-a0a87.appspot.com",
    messagingSenderId: "788643772948",
    appId: "1:788643772948:web:ea3050505e66e88eecc501"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore =firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase