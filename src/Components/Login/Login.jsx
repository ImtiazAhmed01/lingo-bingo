// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Provider/authProvider';

// const Login = () => {
//     const { signInUser } = useContext(AuthContext);
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;

//         setError("");

//         try {
//             await signInUser(email, password);
//             navigate('/');
//         } catch (err) {
//             if (err.code === 'auth/wrong-password') {
//                 setError('Entered wrong password');
//             } else if (err.code === 'auth/user-not-found') {
//                 setError('User not found');
//             } else if (err.code === 'auth/invalid-email') {
//                 setError('Invalid email address');
//             } else {
//                 setError('An unexpected error occurred. Please check your password');
//             }
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword((prevState) => !prevState);
//     };

//     return (
//         <div>
//             <div className="hero bg-base-200 min-h-screen">
//                 <div className="hero-content flex-col">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now & learn the world!</h1>
//                     </div>
//                     <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
//                         <form onSubmit={handleLogin} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     placeholder="email"
//                                     name="email"
//                                     className="input input-bordered"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <div className="relative">
//                                     <input
//                                         type={showPassword ? 'text' : 'password'}
//                                         placeholder="password"
//                                         name="password"
//                                         className="input input-bordered w-full pr-10"
//                                         required
//                                     />
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth={1.5}
//                                         stroke="currentColor"
//                                         className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
//                                         onClick={togglePasswordVisibility}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d={
//                                                 showPassword
//                                                     ? 'M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
//                                                     : 'M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M2 12s2.75-5.5 10-5.5S22 12 22 12s-2.75 5.5-10 5.5S2 12 2 12z'
//                                             }
//                                         />
//                                     </svg>
//                                 </div>
//                             </div>
//                             {error && (
//                                 <div className="text-red-500 text-sm font-bold mt-2">
//                                     {error}
//                                 </div>
//                             )}
//                             <div className="form-control mt-6">
//                                 <button type="submit" className="btn btn-success">
//                                     Login
//                                 </button>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <h3 className="text-xl">
//                                     Don't have an account? <Link to="/register">Register now</Link>
//                                 </h3>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/authProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signInUser(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Login now & learn the world!</h1>
                {/* <form onSubmit={handleLogin} className="w-full max-w-md">
                    <div className="mb-4">
                        <label>Email</label>
                        <input type="email" name="email" required className="input input-bordered" />
                    </div>
                    <div className="mb-4">
                        <label>Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" required className="input input-bordered" />
                            <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3">
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="btn btn-success">Login</button>
                    <div className="mt-4">
                        Don't have an account? <Link to="/register">Register now</Link>
                    </div>
                </form> */}
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                name="password"
                                className="input input-bordered w-full pr-10"
                                required
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={
                                        showPassword
                                            ? 'M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
                                            : 'M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M2 12s2.75-5.5 10-5.5S22 12 22 12s-2.75 5.5-10 5.5S2 12 2 12z'
                                    }
                                />
                            </svg>
                        </div>
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm font-bold mt-2">
                            {error}
                        </div>
                    )}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-success">
                            Login
                        </button>
                    </div>
                    <div className="form-control mt-6">
                        <h3 className="text-xl">
                            Don't have an account? <Link to="/register">Register now</Link>
                        </h3>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
