import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { firebaseConfig } from './firebaseConfig'
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