import React, { useState } from 'react';
import logo from '../Images/logo.png';
import logoDark from '../Images/logo_dark.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { LuSunMedium, LuMoonStar } from "react-icons/lu";


const Navbar = (props) => {
    const { toggleMode, isLight } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`flex justify-between items-center px-9 h-20 top-0 sticky ${isLight ? 'bg-white' : 'bg-black'} ${isLight ? 'text-black' : 'text-white'} opacity-90 z-50`}>
                <div>
                    <img src={isLight ? logo : logoDark} alt="logo" className='h-10' />
                </div>
                <div className='md:flex space-x-8 font-normal text-xl'>
                    <a href="#home" className='hidden md:block relative after:bottom-0 hover:text-red-700 after:border-b-2 after:border-red-700 after:absolute after:w-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:hover:w-full'>Home</a>
                    <a href="#about" className='hidden md:block relative after:bottom-0 hover:text-red-700 after:border-b-2 after:border-red-700 after:absolute after:w-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:hover:w-full'>About</a>
                    <a href="#skills" className='hidden md:block relative after:bottom-0 hover:text-red-700 after:border-b-2 after:border-red-700 after:absolute after:w-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:hover:w-full'>Skills</a>
                    <a href="#projects" className='hidden md:block relative after:bottom-0 hover:text-red-700 after:border-b-2 after:border-red-700 after:absolute after:w-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:hover:w-full'>Projects</a>
                </div>
                <div className='flex justify-center items-center space-x-4'>
                    <a href="#contact" className="text-white md:block hidden bg-red-700 rounded px-4 py-2 hover:bg-slate-700 hover:rounded-bl hover:rounded-3xl duration-300 hover:-translate-y-1">Contact Me</a>
                    <button onClick={toggleMode}>
                        {isLight ? <LuSunMedium className='text-3xl' /> : <LuMoonStar className='text-3xl' />}
                    </button>

                </div>


                <div className="md:hidden">
                    <button onClick={toggleMenu} className="block text-gray-800 focus:outline-none">
                        {
                            isMenuOpen ? (<RxCross2 className='text-3xl' />) : (<GiHamburgerMenu className='text-2xl' />)
                        }
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white">
                        <div className="flex flex-col items-center space-y-4 py-4">
                            <a href="#home" className="text-black hover:text-red-700">Home</a>
                            <a href="#about" className="text-black hover:text-red-700">About</a>
                            <a href="#skills" className="text-black hover:text-red-700">Skills</a>
                            <a href="#projects" className="text-black hover:text-red-700">Projects</a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
