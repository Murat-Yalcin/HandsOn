import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { auth } from "./firebase-config";

export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = async (email, password, displayName) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName });
  } catch (error) {
    console.log(error.message);
  }
};

export const logOut = async () => {
  try {
    const response = await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
