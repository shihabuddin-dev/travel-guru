import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const Root = () => {
    return (
        <>
        <header>
         <Header/>
        </header>
          <div className='w-11/12 mx-auto px-4'>
          <Outlet />
          </div>
        </>
    );
};

export default Root;