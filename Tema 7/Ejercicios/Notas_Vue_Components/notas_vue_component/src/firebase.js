import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

import { getStorage } from "firebase/storage";

import { getAuth } from 'firebase/auth'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyAfCXEkAVwEm8OsXi_SbFAVS8wBuqzXEcA",
  authDomain: "recordatoriosara.firebaseapp.com",
  projectId: "recordatoriosara",
  storageBucket: "recordatoriosara.appspot.com",
  messagingSenderId: "380212281999",
  appId: "1:380212281999:web:956b7571d0e1aa2dfbe6fa",
  measurementId: "G-P98YZ65W0N"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

// here we can export reusable database references
// export const todosRef = collection(db, 'todos')

export const storage = getStorage(app);