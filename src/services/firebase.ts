import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { firebaseConfig } from './firebaseConfig'
import { useAuth } from '@/hooks/useAuth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export function getFirebaseApp() {
  return app
}

export function getFirestoreDB() {
  return db
}

export function getAuthInstance() {
  return auth
}

export async function getUniqueCategories() {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'))
    const categories = new Set<string>()

    querySnapshot.forEach((doc) => {
      const category = doc.data().itemGenre
      if (typeof category === 'string') {
        categories.add(category.toLowerCase())
      }
    })

    const uniqueCategories = Array.from(categories).map(
      (category) => category.charAt(0).toUpperCase() + category.slice(1)
    )

    return uniqueCategories
  } catch (error) {
    console.error('Error getting unique categories: ', error)
  }
}

export async function getCollection(collectionName: string) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName))
    const data = JSON.stringify(querySnapshot)
    return data
  } catch (error) {
    console.error('Error getting collection: ', error)
  }
}

export async function getDocument(collectionName: string, docId: string) {
  try {
    const docRef = collection(db, collectionName, docId)
    const docSnap = await getDocs(docRef)
    const data = JSON.stringify(docSnap)
    return data
  } catch (error) {
    console.error('Error getting document: ', error)
  }
}

export async function getSubCollection(collectionName: string, docId: string) {
  try {
    const docRef = collection(db, collectionName, docId, 'variants')
    const docSnap = await getDocs(docRef)
    const data = JSON.stringify(docSnap)
    return data
  } catch (error) {
    console.error('Error getting subcollection: ', error)
  }
}

export async function getSubDocument(
  collectionName: string,
  docId: string,
  subCollectionName: string,
  subDocId: string
) {
  try {
    const docRef = collection(
      db,
      collectionName,
      docId,
      subCollectionName,
      subDocId
    )
    const docSnap = await getDocs(docRef)
    const data = JSON.stringify(docSnap)
    return data
  } catch (error) {
    console.error('Error getting subdocument: ', error)
  }
}

export async function registerWithEmailAndPassword(
  email: string,
  password: string
) {
  try {
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, ' ', errorMessage)
    })
  } catch (error) {
    console.error('Error saving the user: ', error)
  }
}

export async function loginWithEmailAndPassword(
  email: string,
  password: string
) {
  try {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error.code, ' ', error.message)
    })
    useAuth
  } catch (error) {
    console.log('Error logging in: ', error)
  }
}
