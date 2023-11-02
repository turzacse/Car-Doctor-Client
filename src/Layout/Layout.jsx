import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import NavBer from '../Shared/NavBer';

const Layout = () => {
    return (
        <div className='mx-4'>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;