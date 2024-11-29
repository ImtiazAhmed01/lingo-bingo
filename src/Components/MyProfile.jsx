import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userProfile"));
        setUser(userData);

        const handleStorageChange = () => {
            const updatedUser = JSON.parse(localStorage.getItem("userProfile"));
            setUser(updatedUser);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-green-300">
            <h2 className="font-bold text-3xl text-center mt-5">My Profile</h2>
            <div className=" my-8 flex gap-52 justify-center">
                <img src={user.photoURL} alt="Profile" className="w-48 h-48 rounded-full" />
                <div className="mt-16">
                    <h3 className="text-xl"><strong>Name:</strong> {user.displayName}</h3>
                    <p className="text-xl"><strong>Email:</strong> {user.email}</p>
                </div>

            </div>
            <div className="text-center">
                <button className="btn btn-outline btn-success mb-10">
                    <Link to='/update-profile'>Update Profile</Link>
                </button>
            </div>
        </div>
    );
};

export default MyProfile;