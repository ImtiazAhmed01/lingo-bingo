// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const MyProfile = () => {
//     const [user, setUser] = useState(null);



//     useEffect(() => {

//         const userData = JSON.parse(localStorage.getItem("userProfile"));
//         setUser(userData);
//     }, []);

//     if (!user) {
//         return <div>Loading...</div>;
//     }
//     document.title = `${user.displayName}'s profile - Lingo Bingo`;
//     return (
//         <div className="profile-container px-32 bg-green-200 ">
//             <h2 className="font-bold text-2xl text-center pt-5">Welcome, {user.displayName || "User"}!</h2>
//             <div className="flex gap-32 py-7 ml-60">
//                 <div>

//                     <img
//                         src={user.photoURL}
//                         alt="User Profile"
//                         className="profile-image mt-10"
//                         style={{ width: "200px", height: "200px", borderRadius: "50%" }}
//                     />
//                 </div>

//                 <div className="py-14 ">
//                     <p className="py-3 text-xl"><strong>Email:</strong> {user.email}</p>
//                     <p className="py-3 text-xl"><strong>First Name:</strong> {user.fname || "N/A"}</p>
//                     <p className="py-3 text-xl"><strong>Last Name:</strong> {user.lname || "N/A"}</p>
//                 </div>
//             </div>
//             <div className="text-center">
//                 <button className="btn btn-outline btn-success  mb-10"><Link to='/update-profile'>Update Profile </Link> </button>
//             </div>

//         </div>
//     );
// };

// export default MyProfile;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const MyProfile = () => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         // Fetch the updated user profile from localStorage
//         const userData = JSON.parse(localStorage.getItem("userProfile"));
//         setUser(userData);
//     }, []); // Runs on initial mount

//     if (!user) {
//         return <div>Loading...</div>;
//     }

//     document.title = `${user.displayName || "User"}'s Profile - Lingo Bingo`;

//     return (
//         <div className="profile-container px-32 bg-green-200">
//             <h2 className="font-bold text-2xl text-center pt-5">
//                 Welcome, {user.fname || "User"} {user.lname || ""}
//             </h2>
//             <div className="flex gap-32 py-7 ml-60">
//                 <div>
//                     <img
//                         src={user.photoURL}
//                         alt="User Profile"
//                         className="profile-image mt-10"
//                         style={{ width: "200px", height: "200px", borderRadius: "50%" }}
//                     />
//                 </div>

//                 <div className="py-14">
//                     <p className="py-3 text-xl"><strong>Email:</strong> {user.email}</p>
//                     <p className="py-3 text-xl"><strong>First Name:</strong> {user.fname || "N/A"}</p>
//                     <p className="py-3 text-xl"><strong>Last Name:</strong> {user.lname || "N/A"}</p>
//                 </div>
//             </div>
//             <div className="text-center">
//                 <button className="btn btn-outline btn-success mb-10">
//                     <Link to='/update-profile'>Update Profile</Link>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MyProfile;

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