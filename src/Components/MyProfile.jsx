import React, { useContext } from 'react';
import { AuthContext } from './Provider/authProvider';
AuthContext
const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Profile</h1>
            {user ? (
                <div className="bg-white p-4 shadow rounded">
                    <img src={user.photoURL || "default-avatar.png"} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
                    <p><strong>Name:</strong> {user.displayName || "N/A"}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ) : (
                <p>No user information available.</p>
            )}
        </div>
    );
};

export default MyProfile;
