import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/authProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/start_learning'>Start Learning</NavLink></li>
            <li><NavLink to='/tutorials'>Tutorials</NavLink></li>
            <li><NavLink to='/aboutus'>About Us</NavLink></li>
            {user && (
                <>
                    <li><NavLink to='/myprofile'>My Profile</NavLink></li>
                    <li><NavLink to='/lessons'>Lessons</NavLink></li>
                </>
            )}
        </>
    );

    const handleLogout = async () => {
        try {
            await signOutUser();
            console.log("User logged out successfully");
        } catch (error) {
            console.error("Logout error:", error);
            alert("Failed to log out. Please try again.");
        }
    };

    return (
        <div>
            {user && (
                <div className="bg-gray-100 text-center py-2">
                    <span className="text-sm font-medium">Welcome, {user.displayName || user.email}!</span>
                </div>
            )}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Lingo Bingo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end gap-4">
                    {user?.photoURL && (
                        <img src={user.photoURL || 'default-avatar.png'} alt="User" className="w-8 h-8 rounded-full" />
                    )}
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {user ? (
                            <>
                                <span className="text-sm font-medium">
                                    {user.displayName || user.email}
                                </span>
                                <button className="btn btn-error" onClick={handleLogout}>
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <li className="list-none"><NavLink to='/register'>Sign Up</NavLink></li>
                                <li className="list-none"><NavLink to='/login'>Log In</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
