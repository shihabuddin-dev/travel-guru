import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <>
        <header>
         <Navbar/>
        </header>
          <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <Outlet />
          </div>
        </>
    );
};

export default Root;