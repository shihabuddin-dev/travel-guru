import React, { useEffect, useState } from 'react';
import { FirebaseAuthContext } from './FirebaseAuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create an user by using email and password (sign up)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login existing user 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
   const logOutUser=()=>{
    signOut(auth)
   }

    // keep it in this website like local storage after reload pages it will not go anywhere
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser

    }
    return (
        <FirebaseAuthContext value={userInfo}>
            {children}
        </FirebaseAuthContext>
    );
};

export default ContextProvider;