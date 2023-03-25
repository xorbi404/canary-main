import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseApp  = initializeApp({
  apiKey: "AIzaSyBKaAj5BYRrUJ9nriShOt0bfU--7Dg4960",
  authDomain: "canaryx-609af.firebaseapp.com",
  projectId: "canaryx-609af",
  storageBucket: "canaryx-609af.appspot.com",
  messagingSenderId: "991094311723",
  appId: "1:991094311723:web:a48dc46663fe9f9822936e",
  measurementId: "G-VSTWJN2PNF"
})
 const db = getFirestore(firebaseApp)
const auth =getAuth()


export {auth,db}