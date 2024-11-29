// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Provider/authProvider';

// const Register = () => {
//     const { createUser } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleRegister = e => {
//         e.preventDefault();
//         const fname = e.target.fname.value;
//         const lname = e.target.lname.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const imageURL = e.target.imageURL.value;

//         createUser(email, password, {
//             displayName: `${fname} ${lname}`,
//             photoURL: imageURL,
//             firstName: fname,
//             lastName: lname
//         })
//             .then(result => {
//                 console.log(result.user);
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.log("ERROR", error.message);
//             });
//     }

//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword((prevState) => !prevState);
//     };

//     return (
//         <div>
//             <form onSubmit={handleRegister} className="w-full max-w-lg mx-auto my-7">
//                 <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold mb-5 ml-2">Register here!</h1>
//                     </div>
//                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
//                             First Name
//                         </label>
//                         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="fname" placeholder="Your first name" />
//                         <p className="text-red-500 text-xs italic">Please fill out this field.</p>
//                     </div>
//                     <div className="w-full md:w-1/2 px-3">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
//                             Last Name
//                         </label>
//                         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="lname" placeholder="Doe" />
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full px-3">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                             Email
//                         </label>
//                         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="email" name="email" placeholder="Enter your email" />
//                     </div>
//                     <div className="w-full px-3">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                             Image URL
//                         </label>
//                         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" name="imageURL" placeholder="Enter your image url" />
//                     </div>
//                     <div className=" text-gray-700 text-xs ml-3">
//                         <label className="label">
//                             <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold">Password</span>
//                         </label>
//                         <div className="relative">
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 placeholder="password"
//                                 name="password"
//                                 className="input block w-[510px] bg-gray-200"
//                                 required
//                             />
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={1.5}
//                                 stroke="currentColor"
//                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
//                                 onClick={togglePasswordVisibility}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d={
//                                         showPassword
//                                             ? "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
//                                             : "M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M2 12s2.75-5.5 10-5.5S22 12 22 12s-2.75 5.5-10 5.5S2 12 2 12z"
//                                     }
//                                 />
//                             </svg>
//                         </div>
//                         <label className="label">
//                             <a href="#" className="label-text-alt link link-hover">
//                                 Forgot password?
//                             </a>
//                         </label>
//                     </div>
//                     <div className="form-control mt-6 ml-3">
//                         <h3 className="text-xl">
//                             Already have an account? <Link to="/login">Login now</Link>
//                         </h3>
//                     </div>
//                 </div>
//                 <button className="btn btn-outline btn-success" type='submit'>Register Now</button>
//             </form>
//         </div>
//     );
// };

// export default Register;


// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Provider/authProvider';

// const Register = () => {
//     const { createUser } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         const fname = e.target.fname.value;
//         const lname = e.target.lname.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const imageURL = e.target.imageURL.value;

//         try {
//             const result = await createUser(email, password, {
//                 displayName: `${fname} ${lname}`,
//                 photoURL: imageURL,
//                 fname, // Pass fname separately
//                 lname, // Pass lname separately
//             });
//             console.log("User created:", result.user);
//             navigate('/');
//         } catch (error) {
//             console.error("Error creating user:", error.message);
//         }
//     };


//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword((prevState) => !prevState);
//     };

//     return (
//         <div>
//             <form onSubmit={handleRegister} className="w-full max-w-lg mx-auto my-7">
//                 <h1 className="text-5xl font-bold mb-5 ml-2">Register here!</h1>
//                 <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
//                         <input type="text" name="fname" placeholder="Your first name" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                     </div>
//                     <div className="w-full md:w-1/2 px-3">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
//                         <input type="text" name="lname" placeholder="Your last name" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                     </div>
//                 </div>
//                 <div className="mb-6">
//                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
//                     <input type="email" name="email" placeholder="Enter your email" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Image URL</label>
//                     <input type="text" name="imageURL" placeholder="Enter your image URL" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Password</label>
//                     <div className="relative">
//                         <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                         <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3 text-gray-700">
//                             {showPassword ? "Hide" : "Show"}
//                         </button>
//                     </div>
//                 </div>
//                 <button type="submit" className="btn btn-success">Register Now</button>
//                 <div className="mt-6 text-xl">
//                     Already have an account? <Link to="/login">Login now</Link>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Register;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// const Register = () => {
//     const navigate = useNavigate();
//     const [showPassword, setShowPassword] = useState(false);

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         const fname = e.target.fname.value;
//         const lname = e.target.lname.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const imageURL = e.target.imageURL.value;

//         try {
//             const auth = getAuth();
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             await updateProfile(user, {
//                 displayName: `${fname} ${lname}`,
//                 photoURL: imageURL,
//             });


//             localStorage.setItem(
//                 "userProfile",
//                 JSON.stringify({
//                     displayName: `${fname} ${lname}`,
//                     photoURL: imageURL,
//                     email: user.email,
//                     fname,
//                     lname,
//                 })
//             );

//             console.log("User created:", user);
//             navigate("/");
//         } catch (error) {
//             console.error("Error creating user:", error.message);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword((prevState) => !prevState);
//     };

//     return (
//         <div>
//             <form onSubmit={handleRegister} className="w-full max-w-lg mx-auto my-7">
//                 <h1 className="text-5xl font-bold mb-5 ml-2">Register here!</h1>
//                 <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
//                         <input type="text" name="fname" placeholder="Your first name" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                     </div>
//                     <div className="w-full md:w-1/2 px-3">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
//                         <input type="text" name="lname" placeholder="Your last name" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                     </div>
//                 </div>
//                 <div className="mb-6">
//                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
//                     <input type="email" name="email" placeholder="Enter your email" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Image URL</label>
//                     <input type="text" name="imageURL" placeholder="Enter your image URL" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Password</label>
//                     <div className="relative">
//                         <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
//                         <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3 text-gray-700">
//                             {showPassword ? "Hide" : "Show"}
//                         </button>
//                     </div>
//                 </div>
//                 <button type="submit" className="btn btn-success">Register Now</button>
//                 <div className="mt-6 text-xl">
//                     Already have an account? <Link to="/login">Login now</Link>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Register;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/authProvider";

const Register = () => {
    const { signInWithGoogle } = useContext(AuthContext); // Access context
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle(); // Use context method
            navigate("/");
        } catch (error) {
            console.error("Google login failed:", error.message);
        }
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const imageURL = e.target.imageURL.value;

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: `${fname} ${lname}`,
                photoURL: imageURL,
            });

            // Save user profile in localStorage with fname and lname
            localStorage.setItem(
                "userProfile",
                JSON.stringify({
                    displayName: `${fname} ${lname}`,
                    photoURL: imageURL,
                    email: user.email,
                    fname,
                    lname,
                })
            );

            console.log("User created:", user);
            navigate("/");
        } catch (error) {
            console.error("Error creating user:", error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div>
            <form onSubmit={handleRegister} className="w-full max-w-lg mx-auto my-7">
                <h1 className="text-5xl font-bold mb-5 ml-2">Register here!</h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
                        <input type="text" name="fname" placeholder="Your first name" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
                        <input type="text" name="lname" placeholder="Your last name" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
                    <input type="email" name="email" placeholder="Enter your email" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Image URL</label>
                    <input type="text" name="imageURL" placeholder="Enter your image URL" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Password</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3 text-gray-700">
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Register Now</button>
                <div className="mt-3">
                    <hr />
                    <button onClick={handleGoogleSignIn} className="btn mt-5 btn-ghost">Login with Google</button>
                </div>
                <div className="mt-6 text-xl">
                    Already have an account? <Link to="/login">Login now</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
