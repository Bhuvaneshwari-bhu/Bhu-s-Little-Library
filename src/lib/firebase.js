import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// ------------------------------------------------------------------
// Fill these in with your own Firebase project's config values.
// See README.md → "Firebase setup" for exact click-by-click steps.
// It is safe for these values to be public/committed — Firebase
// locks down access with Security Rules (also in the README), not
// by hiding this config.
// ------------------------------------------------------------------
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let app, db, auth;
if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}

const BOOKS_COLLECTION = 'books';

// Live-subscribe to the books collection, ordered by publish date (newest first).
export function subscribeToBooks(onChange) {
  if (!isFirebaseConfigured) return () => {};
  const q = query(collection(db, BOOKS_COLLECTION), orderBy('publishedAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const books = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    onChange(books);
  });
}

export async function addBook(book) {
  return addDoc(collection(db, BOOKS_COLLECTION), book);
}

export async function updateBook(id, book) {
  return updateDoc(doc(db, BOOKS_COLLECTION, id), book);
}

export async function removeBook(id) {
  return deleteDoc(doc(db, BOOKS_COLLECTION, id));
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function watchAuth(callback) {
  if (!isFirebaseConfigured) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}
