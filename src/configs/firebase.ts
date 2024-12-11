import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFSHtkz4SA81e6pY5gBI9D6BCSHTSYDwM',
  authDomain: 'ezy-mart-7b476.firebaseapp.com',
  projectId: 'ezy-mart-7b476',
  storageBucket: 'ezy-mart-7b476.firebasestorage.app',
  messagingSenderId: '696788173684',
  appId: '1:696788173684:web:8cb3c493565cf3bc3da221',
  measurementId: 'G-5TVVCRQXYS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('Firebase App initialized:', app.name);
console.log('Firebase Analytics initialized:', analytics.app.name);

export default app;
