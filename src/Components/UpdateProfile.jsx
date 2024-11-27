import React, { useContext, useState } from "react";
import { AuthContext } from "./Provider/authProvider";
import { updateProfile } from "firebase/auth"; // Adjust for your backend if not using Firebase

const UpdateProfile = () => {
    const { user } = useContext(AuthContext); // Assume this provides the current user
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdate = async () => {
        try {
            // Update profile dynamically (Firebase example)
            await updateProfile(user, {
                displayName,
                photoURL,
            });

            // Trigger UI refresh if needed
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile.");
        }
    };

    return (
        <div className="update-profile">
            <h2>Update Profile</h2>
            <div>
                <label htmlFor="displayName">Display Name:</label>
                <input
                    type="text"
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter display name"
                />
            </div>
            <div>
                <label htmlFor="photoURL">Photo URL:</label>
                <textarea
                    id="photoURL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="Enter photo URL"
                />
            </div>
            <div>
                {photoURL && (
                    <img
                        src={photoURL}
                        alt="Profile Preview"
                        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                    />
                )}
            </div>
            <button onClick={handleUpdate}>Save Update</button>
        </div>
    );
};

export default UpdateProfile;
