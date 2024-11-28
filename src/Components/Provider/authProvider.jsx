// import React, { createContext, useState, useEffect } from 'react';
// import { auth } from '../../firebase.init';
// import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);


//     const createUser = (email, password, userDetails) => {
//         return createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {

//                 const user = userCredential.user;


//                 return user.updateProfile({
//                     displayName: userDetails.displayName,
//                     photoURL: userDetails.photoURL,
//                 }).then(() => {

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
//                 throw error;
//             });
//     };


//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             if (currentUser) {
//                 setUser({
//                     email: currentUser.email,
//                     displayName: currentUser.displayName,
//                     photoURL: currentUser.photoURL,

//                 });
//             } else {
//                 setUser(null);
//             }
//             setLoading(false);
//         });


//         return () => unsubscribe();
//     }, []);


//     const signOutUser = async () => {
//         try {
//             await signOut(auth);
//             setUser(null);
//         } catch (error) {
//             console.error("Sign-out error:", error.message);
//         }
//     };

//     return (
//         <AuthContext.Provider value={{ user, createUser, signOutUser, loading }}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, userDetails) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await user.updateProfile({
                displayName: userDetails.displayName,
                photoURL: userDetails.photoURL,
            });

            // Refresh user data from Firebase
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


    const signOutUser = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Sign-out error:", error.message);
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
        <AuthContext.Provider value={{ user, createUser, signInUser, signOutUser }}>
            {!loading && children}
        </AuthContext.Provider>
    );


}

export default AuthProvider;
