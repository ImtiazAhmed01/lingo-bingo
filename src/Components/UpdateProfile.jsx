// // import React, { useContext, useState } from "react";
// // import { AuthContext } from "./Provider/authProvider";
// // import { updateProfile } from "firebase/auth"; // Adjust for your backend if not using Firebase

// // const UpdateProfile = () => {
// //     const { user } = useContext(AuthContext); // Assume this provides the current user
// //     const [displayName, setDisplayName] = useState(user?.displayName || "");
// //     const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

// //     const handleUpdate = async () => {
// //         try {

// //             await updateProfile(user, {
// //                 displayName,
// //                 photoURL,
// //             });


// //             alert("Profile updated successfully!");
// //         } catch (error) {
// //             console.error("Error updating profile:", error);
// //             alert("Failed to update profile.");
// //         }
// //     };

// //     return (
// //         <div className="update-profile">
// //             <h2>Update Profile</h2>
// //             <div>
// //                 <label htmlFor="displayName">Display Name:</label>
// //                 <input
// //                     type="text"
// //                     id="displayName"
// //                     value={displayName}
// //                     onChange={(e) => setDisplayName(e.target.value)}
// //                     placeholder="Enter display name"
// //                 />
// //             </div>
// //             <div>
// //                 <label htmlFor="photoURL">Photo URL:</label>
// //                 <textarea
// //                     id="photoURL"
// //                     value={photoURL}
// //                     onChange={(e) => setPhotoURL(e.target.value)}
// //                     placeholder="Enter photo URL"
// //                 />
// //             </div>
// //             <div>
// //                 {photoURL && (
// //                     <img
// //                         src={photoURL}
// //                         alt="Profile Preview"
// //                         style={{ width: "100px", height: "100px", borderRadius: "50%" }}
// //                     />
// //                 )}
// //             </div>
// //             <button onClick={handleUpdate}>Save Update</button>
// //         </div>
// //     );
// // };

// // export default UpdateProfile;

// import React, { useState } from "react";

// const UpdateProfile = () => {
//     const storedUser = JSON.parse(localStorage.getItem("userProfile")) || {};
//     const [displayName, setDisplayName] = useState(storedUser.displayName || "");
//     const [photoURL, setPhotoURL] = useState(storedUser.photoURL || "");
//     const [email] = useState(storedUser.email || "");

//     const handleUpdate = () => {
//         const updatedUser = {
//             ...storedUser,
//             displayName,
//             photoURL,
//         };

//         // Update localStorage with new user details
//         localStorage.setItem("userProfile", JSON.stringify(updatedUser));
//         alert("Profile updated successfully!");
//     };

//     return (
//         <div className="update-profile px-48">
//             <h2 className="font-bold text-2xl text-center">Update Profile</h2>
//             <div className="flex">
//                 <div>
//                     <label htmlFor="displayName">Change first Name: </label>
//                     <input
//                         type="text"
//                         id="displayName"
//                         value={displayName}
//                         className="border bg-gray-300 rounded-xl p-1"
//                         onChange={(e) => setDisplayName(e.target.value)}
//                         placeholder="Enter first name"
//                     />
//                     <label htmlFor="displayName">Change last Name: </label>
//                     <input
//                         type="text"
//                         id="displayName"
//                         value={displayName}
//                         className="border bg-gray-300 rounded-xl p-1"
//                         onChange={(e) => setDisplayName(e.target.value)}
//                         placeholder="Enter last name"
//                     />
//                 </div>
//                 <div >
//                     <label htmlFor="photoURL">Change Photo:</label>
//                     <textarea
//                         id="photoURL"
//                         value={photoURL}
//                         className="border bg-gray-300 rounded-xl p-1"
//                         onChange={(e) => setPhotoURL(e.target.value)}
//                         placeholder="Enter photo URL"
//                     />
//                 </div>
//             </div>
//             <div>
//                 {photoURL && (
//                     <img
//                         src={photoURL}
//                         alt="Profile Preview"
//                         style={{ width: "100px", height: "100px", borderRadius: "50%" }}
//                     />
//                 )}
//             </div>
//             <button onClick={handleUpdate}>Save Update</button>
//         </div>
//     );
// };

// export default UpdateProfile; working
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
            displayName: `${firstName} ${lastName}`, // Update displayName
        };

        localStorage.setItem("userProfile", JSON.stringify(updatedUser));
        // alert("Profile updated successfully!");
        document.getElementById('my_modal_5').showModal();

        // Dispatch a storage event to notify other components
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
