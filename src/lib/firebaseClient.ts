import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

function requirePublicEnv(name: string) {
  const v = process.env[name];
  // During `next build`, client modules may be evaluated on the server for
  // prerendering. Avoid throwing at import-time; we'll throw only in-browser.
  if (!v) return "";
  return v;
}

export function getFirebaseApp(): FirebaseApp {
  if (getApps().length) return getApps()[0]!;

  const apiKey = requirePublicEnv("VITE_FIREBASE_API_KEY");
  const authDomain = requirePublicEnv("VITE_FIREBASE_AUTH_DOMAIN");
  const projectId = requirePublicEnv("VITE_FIREBASE_PROJECT_ID");
  const storageBucket = requirePublicEnv("VITE_FIREBASE_STORAGE_BUCKET");
  const messagingSenderId = requirePublicEnv("VITE_FIREBASE_MESSAGING_SENDER_ID");
  const appId = requirePublicEnv("VITE_FIREBASE_APP_ID");

  if (typeof window !== "undefined") {
    const missing = [
      ["VITE_FIREBASE_API_KEY", apiKey],
      ["VITE_FIREBASE_AUTH_DOMAIN", authDomain],
      ["VITE_FIREBASE_PROJECT_ID", projectId],
      ["VITE_FIREBASE_STORAGE_BUCKET", storageBucket],
      ["VITE_FIREBASE_MESSAGING_SENDER_ID", messagingSenderId],
      ["VITE_FIREBASE_APP_ID", appId],
    ].filter(([, v]) => !v);

    if (missing.length) {
      const names = missing.map(([n]) => n).join(", ");
      throw new Error(
        `Missing environment variables: ${names}. Did you create .env.local from .env.example?`,
      );
    }
  }

  const app = initializeApp({
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || undefined,
  });

  return app;
}

export function getFirebaseAuth() {
  return getAuth(getFirebaseApp());
}

export function getFirestoreDb() {
  return getFirestore(getFirebaseApp());
}

