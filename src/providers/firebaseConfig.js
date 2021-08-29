import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FIREBASE_CONFIG } from '../keys/FirebaseConfig';

const firebaseConfig = FIREBASE_CONFIG;

export const firebaseApp = initializeApp(firebaseConfig);
export const firestorage = getStorage();
export const fireStore = getFirestore();
export const auth = getAuth();
