import app from '@/configs/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(app);

export const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const tokenResponse = (result as any)._tokenResponse;

    // Extract details
    const firstName = tokenResponse?.firstName ?? '';
    const lastName = tokenResponse?.lastName ?? '';
    const email = user.email ?? '';
    const photoURL = user.photoURL ?? '';
    const uid = user.uid;
    const displayName = user.displayName ?? '';

    return {
      ...result,
      firstName,
      lastName,
      email,
      photoURL,
      uid,
      displayName,
    };
  } catch (error) {
    console.error('Error during Google Sign-In:', error);
    throw error;
  }
};
