import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)
const googlProvider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] =useState(null);
  const [loading, setLoading] =useState(true);

  // Create new user with email and password >>>
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }


  // SignIn with email and password >>>
const signIn = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
}

// Update User Profiles >>>
const updateUser = (userInfo) => {
  return updateProfile(auth.currentUser, userInfo);
}

// Google SignIn method>>>
const googleSignIn = () => {
  setLoading(true)
  return signInWithPopup(auth, googlProvider);
}

// Sign Out >>>

const logOut = () => {
  setLoading(true)
  return signOut(auth)
}

// Obgerber state change set
useEffect( () => {
  const unsubsribe = onAuthStateChanged(auth, currentUser => {
    // console.log("User observing");
    setUser(currentUser)
    setLoading(false)
  })
  return () => unsubsribe()
}, [])


// Auth provider all information share>>>>>>
  const authInfo = {
    user,
    createUser,
    updateUser,
    signIn,
    googleSignIn,
    logOut,
    loading

  }


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;