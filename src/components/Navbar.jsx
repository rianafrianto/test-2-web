import React, { useState } from 'react'
import logo from "../assets/react.svg"
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-scroll';
import ModalLogin from './ModalLogin';
import { SiArkecosystem } from "react-icons/si";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navItems = [
        { link: "Overview", path: 'home' },
        { link: "Feature", path: 'feature' },
        { link: "About", path: 'about' },
        { link: "Pricing", path: 'pricing' },
    ]

    return (
        <>
            <nav className={`bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 ${isModalOpen ? " bg-primary bg-opacity-50 border-none text-white"  : ""}`}>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-14 items-center'>
                        <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                            <SiArkecosystem className={`w-10 inline-block items-center ${isModalOpen ? "text-white" : ""}`} /><span className={`${isModalOpen ? "text-white"  : ""}`}>Home</span>
                        </a>
                        {/* showing using map */}
                        <ul className='md:flex space-x-12 hidden'>{navItems.map(({ link, path }) => <Link key={link} activeClass='active' spy={true} smooth={true} offset={-100} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)}</ul>
                    </div>
                    {/* login */}
                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href='/' className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2' /><span>Language</span></a>
                        <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600' onClick={openModal}>Login</button>
                    </div>
                    {/* menu button, only mobile */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {
                                isOpen ? (<FaXmark className="w-6 h-6 text-primary" />) : (<FaBars className="w-6 h-6 text-primary" />)
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* mobile menu */}
            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {navItems.map(({ link, path }) => <Link key={link} activeClass='active' spy={true} smooth={true} offset={-80} to={path} className='block text-white hover:text-gray-300' onClick={toggleMenu}>{link}</Link>)}
            </div>

            <ModalLogin isOpen={isModalOpen} onClose={closeModal} /> 
        </>
    )
}

export default Navbar
