import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDExl-Ci2ha_9UAxXsDKclD7ixGVDPJIWU",
  authDomain: "movie-app-f111f.firebaseapp.com",
  projectId: "movie-app-f111f",
  storageBucket: "movie-app-f111f.appspot.com",
  messagingSenderId: "384159984472",
  appId: "1:384159984472:web:478aa89a23e98ab676532d",
  measurementId: "G-RG4E64KNPZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
