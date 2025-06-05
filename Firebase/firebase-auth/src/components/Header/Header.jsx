import React from 'react';
import { NavLink } from 'react-router';


const Header = () => {
    return (
        <nav>
            <ul>
                <NavLink className="m-5 btn btn-outline btn-info rounded-full" to="/">Home</NavLink>
                <NavLink className="m-5 btn btn-outline btn-info rounded-full" to="/login">Login</NavLink>
            </ul>
        </nav>
    );
};

export default Header;