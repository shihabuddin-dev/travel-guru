import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png'
import { NavLink } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = <>
        <NavLink to='/news' className="hover:text-yellow-400">News</NavLink>
        <NavLink to='/destination' className="hover:text-yellow-400">Destination</NavLink>
        <NavLink to='/blogs' className="hover:text-yellow-400">Blogs</NavLink>
        <NavLink to='/contact' className="hover:text-yellow-400">Contact</NavLink>
    </>

    return (
        <nav className="w-full text-white">
            <div className="w-11/12 mx-auto px-4 py-3 flex items-center justify-center gap-36 md:gap-12">
                {/* Logo */}
                <div >
                    <img src={logo} alt="Logo" className="w-24" />
                    {/* <span className="text-xl font-bold">Travel <span className="text-yellow-400">Guru</span></span> */}
                </div>

                {/* Search Box (hidden on mobile) */}
                <div className="flex-1 mx-6 max-w-md hidden md:block">
                    <input
                        type="text"
                        placeholder="Search your Destination..."
                        className="w-full px-4 py-2 rounded-lg text-white border-gray-300 text-black outline-none border-2"
                    />
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-6">
                    {links}
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded">
                        Login
                    </button>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black/90 px-4 py-4 space-y-3">
                    <input
                        type="text"
                        placeholder="Search your Destination..."
                        className="w-full px-4 text-white py-2 rounded-lg  outline-none border-2 "
                    />
                    <div className="grid gap-2">
                        {links}
                    </div>
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
