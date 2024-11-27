import React, { useContext } from "react";
import { AuthContext } from "./Provider/authProvider";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container px-32">
            <h2>Welcome, {user.displayName || "User "}!</h2>
            <img
                src={user.photoURL}
                alt="User  Profile"
                className="profile-image"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>First Name:</strong> {user.firstName}</p>  {/* Display first name */}
            <p><strong>Last Name:</strong> {user.lastName}</p>    {/* Display last name */}
            <button
                onClick={() => navigate("/update-profile")}
                className="btn btn-outline btn-success my-5 ml-96 px-12"
            >
                Update Profile
            </button>
        </div>
    );
};
export default MyProfile;



// import React, { useContext } from 'react';
// import { AuthContext } from './Provider/authProvider';
// // import { AuthContext } from '../Provider/authProvider';
// AuthContext

// const MyProfile = () => {
//     const { user } = useContext(AuthContext); // Get the current user from context

//     return (
//         <div>
//             <h2>Welcome, {user?.displayName || "User"}!</h2>
//             <img
//                 src={user?.photoURL || "default-avatar.png"} // Fallback to default if photoURL is not set
//                 alt="User Profile"
//                 className="profile-image"
//                 style={{ width: "150px", height: "150px", borderRadius: "50%" }}
//             />
//         </div>
//     );
// };

// export default MyProfile;
