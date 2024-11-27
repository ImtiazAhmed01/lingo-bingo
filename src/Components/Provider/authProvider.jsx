// import React, { createContext, useState, useEffect } from "react";
// import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebase.init";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     const signInUser = async (email, password) => {
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             setUser(userCredential.user);
//             return userCredential.user;
//         } catch (error) {
//             console.error("Sign-in error:", error.message);
//             throw error;
//         }
//     };


//     // Example: AuthProvider.js
//     const createUser = (email, password, userDetails) => {
//         // After user creation logic
//         const user = {
//             email,
//             displayName: userDetails.displayName,
//             photoURL: userDetails.photoURL,
//             firstName: userDetails.firstName,  // Store first name
//             lastName: userDetails.lastName,    // Store last name
//         };
//         // Set user in context or state
//     };


//     const signOutUser = async () => {
//         try {
//             await signOut(auth);
//             setUser(null);
//         } catch (error) {
//             console.error("Sign-out error:", error.message);
//         }
//     };

//     return (
//         <AuthContext.Provider value={{ user, signInUser, createUser, signOutUser, loading }}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;




// import React, { createContext, useState, useEffect } from 'react';
// import { auth } from './firebaseConfig'; // Import your Firebase configuration
// import { createUser WithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     // Function to create a new user
//     const createUser = (email, password, userDetails) => {
//         return createUser WithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // User created successfully
//                 const user = userCredential.user;

//                 // Update user profile with additional information
//                 return user.updateProfile({
//                     displayName: userDetails.displayName,
//                     photoURL: userDetails.photoURL,
//                 }).then(() => {
//                     // Set user in context or state
//                     setUser({
//                         email: user.email,
//                         displayName: userDetails.displayName,
//                         photoURL: userDetails.photoURL,
//                         firstName: userDetails.firstName,
//                         lastName: userDetails.lastName,
//                     });
//                 });
//             })
//             .catch((error) => {
//                 console.error("Error creating user:", error);
//                 throw error; // Rethrow the error to be handled in the Register component
//             });
//     };

//     // Monitor authentication state
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             if (currentUser) {
//                 setUser({
//                     email: currentUser.email,
//                     displayName: currentUser.displayName,
//                     photoURL: currentUser.photoURL,
//                     // You may need to fetch firstName and lastName from your database
//                 });
//             } else {
//                 setUser(null);
//             }
//         });

//         // Cleanup subscription on unmount
//         return () => unsubscribe();
//     }, []);

//     return (
//         const signOutUser = async () => {
//             try {
//                 await signOut(auth);
//                 setUser(null);
//             } catch (error) {
//                 console.error("Sign-out error:", error.message);
//             }
//         };

//     return (
//         <AuthContext.Provider value={{ user, signInUser, createUser, signOutUser, loading }}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../../firebase.init'; // Import your Firebase configuration
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // To handle loading state

    // Function to create a new user
    const createUser = (email, password, userDetails) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User created successfully
                const user = userCredential.user;

                // Update user profile with additional information
                return user.updateProfile({
                    displayName: userDetails.displayName,
                    photoURL: userDetails.photoURL,
                }).then(() => {
                    // Set user in context or state
                    setUser({
                        email: user.email,
                        displayName: userDetails.displayName,
                        photoURL: userDetails.photoURL,
                        firstName: userDetails.firstName,
                        lastName: userDetails.lastName,
                    });
                });
            })
            .catch((error) => {
                console.error("Error creating user:", error);
                throw error; // Rethrow the error to be handled in the Register component
            });
    };

    // Monitor authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    email: currentUser.email,
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL,
                    // You may need to fetch firstName and lastName from your database
                });
            } else {
                setUser(null);
            }
            setLoading(false); // Set loading to false once the auth state is checked
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // Sign out the user
    const signOutUser = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Sign-out error:", error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, createUser, signOutUser, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
