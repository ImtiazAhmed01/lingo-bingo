import React, { useEffect, useState } from "react";

const MyProfile = () => {
    const [user, setUser] = useState(null);
    document.title = 'User profile - Lingo Bingo';


    useEffect(() => {

        const userData = JSON.parse(localStorage.getItem("userProfile"));
        setUser(userData);
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container px-32 bg-green-200">
            <div className="flex gap-10 py-10">
                <div>
                    <h2>Welcome, {user.displayName || "User"}!</h2>
                    <img
                        src={user.photoURL}
                        alt="User Profile"
                        className="profile-image mt-10"
                        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
                    />
                </div>

                <div className="py-14 ">
                    <p className="py-3 text-xl"><strong>Email:</strong> {user.email}</p>
                    <p className="py-3 text-xl"><strong>First Name:</strong> {user.fname || "N/A"}</p>
                    <p className="py-3 text-xl"><strong>Last Name:</strong> {user.lname || "N/A"}</p>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;
