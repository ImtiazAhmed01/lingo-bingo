import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/authProvider";


const MyProfile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-green-300">
            <h2 className="font-bold text-3xl text-center mt-5">My Profile</h2>
            <div className="my-8 flex gap-52 justify-center">
                {user.photoURL && (
                    <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-48 h-48 rounded-full"
                    />
                )}
                <div className="mt-16">
                    <h3 className="text-xl">
                        <strong>Name:</strong> {user.displayName || "N/A"}
                    </h3>
                    <p className="text-xl">
                        <strong>Email:</strong> {user.email || "N/A"}
                    </p>
                </div>
            </div>
            <div className="text-center">

                <Link to="/update-profile"><button className="btn btn-outline btn-success mb-10">Update Profile</button></Link>

            </div>
        </div>
    );
};

export default MyProfile;
