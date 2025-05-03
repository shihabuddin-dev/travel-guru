import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
    return (
        <div className='background-img '>
               <div>
               <Navbar/>
               <Hero/>
               </div>
        </div>
    );
};

export default Header;