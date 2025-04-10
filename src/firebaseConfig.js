// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserSessionPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxc8ilweECDSbid_96yI9YSxrzAnVzuXs",
  authDomain: "login-8330f.firebaseapp.com",
  projectId: "login-8330f",
  appId: "1:962072417782:web:dbbb07aa553f9bcf7523d7",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "consent select_account"  // ✅ always ask account
  });
// Set session persistence (tab-based login only)
setPersistence(auth, browserSessionPersistence);

export { auth, provider };
