// lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// 1. config object
const firebaseConfig = {
    apiKey:     process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId:  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId:      process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  }

// 2. Initialize or grab existing app
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp()

// 3. Initialize services
// Firestore and Storage work on both server & client
const db = getFirestore(app)
const storage = getStorage(app)

// Auth only on the client
// (calling getAuth on server can sometimes lead to “no-app” errors)
const auth = typeof window !== 'undefined'
  ? getAuth(app)
  : null

// 4. Export references
export { app, auth, db, storage }