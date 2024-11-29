import React, { useState } from "react";
import { Link } from "react-router-dom";


const UpdateProfile = () => {
    const storedUser = JSON.parse(localStorage.getItem("userProfile")) || {};
    const [firstName, setFirstName] = useState(storedUser.fname || "");
    const [lastName, setLastName] = useState(storedUser.lname || "");
    const [photoURL, setPhotoURL] = useState(storedUser.photoURL || "");

    const handleUpdate = () => {
        const updatedUser = {
            ...storedUser,
            fname: firstName,
            lname: lastName,
            photoURL,
            displayName: `${firstName} ${lastName}`,
        };

        localStorage.setItem("userProfile", JSON.stringify(updatedUser));

        document.getElementById('my_modal_5').showModal();

        window.dispatchEvent(new Event("storage"));
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
            <button onClick={handleUpdate} className="btn btn-outline btn-success mt-5">Save Update</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Profile Updated!</h3>
                    <p className="py-4">Your profile has been updated successfully.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <ul className="border-1 btn btn-success"><Link to='/myprofile'>Got to Profile</Link></ul>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateProfile;
