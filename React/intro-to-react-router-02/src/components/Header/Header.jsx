import React from 'react';
import { Link } from 'react-router';
import './Header.css'; 

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/mobiles">Mobiles</Link>
                <Link to="/laptops">Laptops</Link>
                <Link to="/users">Users</Link>
                {/* <Link to="/users2">Users2</Link> */}
            </nav>
        </div>
    );
};

export default Header;