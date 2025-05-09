import React from 'react';
import Header from '../Header/Header.jsx';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer.jsx';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;