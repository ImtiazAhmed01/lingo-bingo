import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/authProvider";


const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);

    const [firstName, setFirstName] = useState(user?.displayName?.split(" ")[0] || "");
    const [lastName, setLastName] = useState(user?.displayName?.split(" ")[1] || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdate = async () => {
        try {
            const updatedUser = {
                displayName: `${firstName} ${lastName}`,
                photoURL,
            };

            await updateUserProfile(updatedUser);
            document.getElementById("my_modal_5").showModal();
        } catch (error) {
            console.error("Failed to update profile:", error);
        }
    };

    return (
        <div className="update-profile px-48 my-10">
            <h2 className="font-bold text-3xl text-center pb-8">Update Profile</h2>
            <div>
                <label htmlFor="firstName">Change First Name: </label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    className="border bg-green-300 rounded-xl p-1"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                />
                <br />
                <label htmlFor="lastName">Change Last Name: </label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    className="border bg-green-300 rounded-xl p-1 mt-2"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                />
                <br />
                <label htmlFor="photoURL">Change Photo: </label>
                <textarea
                    id="photoURL"
                    value={photoURL}
                    className="border bg-green-300 rounded-xl p-1 ml-8 mt-2"
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="Enter photo URL"
                />
                {photoURL && (
                    <img
                        src={photoURL}
                        alt="Profile Preview"
                        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
                    />
                )}
            </div>
            <button onClick={handleUpdate} className="btn btn-outline btn-success mt-5">
                Save Update
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Profile Updated!</h3>
                    <p className="py-4">Your profile has been updated successfully.</p>
                    <div className="modal-action">
                        <button className="btn btn-success">
                            <Link to="/myprofile">Go to Profile</Link>
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateProfile;
