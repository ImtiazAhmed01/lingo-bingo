import React, { createContext } from 'react';

const authContext = createContext(null)

const authProvider = () => {
    const authInfo = {
        name: something
    }
    return (
        <authContext.Provider value={authInfo}>

        </authContext.Provider >
    );
};

export default authProvider;