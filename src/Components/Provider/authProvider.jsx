import React, { createContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    // Initialize auth

    const signInUser = (email, password) => {
        // Simulate user login
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setUser({ email });
                resolve({ user: { email } });
            }, 1000);
        });
    };

    const createUser = (email, password) => {
        // Simulate user registration
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setUser({ email });
                resolve({ user: { email } });
            }, 1000);
        });
    };

    const signOutUser = async () => {
        try {
            await signOut(auth);
            return setUser(null);
        } catch (error) {
            return console.error("Sign-out error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, signInUser, createUser, signOutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

