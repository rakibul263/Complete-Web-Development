import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyles = ({ isActive }) =>
        `font-semibold rounded-full px-4 py-2 mx-2 transition-all duration-300 ${
            isActive
                ? 'bg-info text-white shadow-md'
                : 'text-info border border-info hover:bg-info hover:text-white'
        }`;

    const links = (
        <>
            <li><NavLink className={navLinkStyles} to="/">Home</NavLink></li>
            <li><NavLink className={navLinkStyles} to="/login">Login</NavLink></li>
            <li><NavLink className={navLinkStyles} to="/register">Register</NavLink></li>
            <li><NavLink className={navLinkStyles} to="/signup">Sign Up</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md">
            {/* Start */}
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <button tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-3 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case text-2xl font-extrabold">
                    <span className="text-orange-500">Empty</span><span className="text-info ml-1">Stack</span>
                </NavLink>
            </div>

            {/* Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            {/* End */}
            <div className="navbar-end">
                <a className="btn btn-accent font-semibold px-6 rounded-full hover:scale-105 transition-transform">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;
