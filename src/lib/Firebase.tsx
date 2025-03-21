import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics, Analytics } from 'firebase/analytics';

// Load environment variables (using a library like dotenv if needed)
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;
const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

// Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

// Initialize Firebase (only once)
let app: FirebaseApp;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully!");
} catch (error: unknown) {
  console.error("Firebase initialization error:", (error as Error).message);
  throw new Error("Firebase initialization failed. Check your configuration.");
}

// Initialize Firestore
let db: Firestore;
try {
  db = getFirestore(app);
  console.log("Firestore initialized successfully!");
} catch (error: unknown) {
  console.error("Firestore initialization error:", (error as Error).message);
  throw new Error("Firestore initialization failed. Check your configuration.");
}

// Initialize Analytics (only in production)
let analytics: Analytics | null = null;
if (import.meta.env.PROD) {
  try {
    analytics = getAnalytics(app);
    console.log("Analytics initialized successfully!");
  } catch (error: unknown) {
    console.error("Analytics initialization error:", (error as Error).message);
  }
}

export { db, analytics };
