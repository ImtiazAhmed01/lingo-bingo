


import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const createUser = async (email, password, userDetails) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await user.updateProfile({
                displayName: userDetails.displayName,
                photoURL: userDetails.photoURL,
            });


            setUser({
                ...user,
                displayName: userDetails.displayName,
                photoURL: userDetails.photoURL,
            });

            return user;
        } catch (error) {
            console.error("Error creating user:", error.message);
            throw error;
        }
    };
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userProfile"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const updateUserProfile = (updatedUser) => {
        setUser(updatedUser); // Update the state
        localStorage.setItem("userProfile", JSON.stringify(updatedUser)); // Save to localStorage
    };

    const signOutUser = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Sign-out error:", error.message);
        }
    };
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            setUser(user);
            return user;
        } catch (error) {
            console.error("Google Sign-In error:", error.message);
            throw error;
        }
    };


    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, createUser, signInUser, signOutUser, signInWithGoogle, updateUserProfile }}>
            {!loading && children}
        </AuthContext.Provider>
    );


}

export default AuthProvider;
