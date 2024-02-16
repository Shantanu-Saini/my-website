import React from 'react';
import { FaSquareInstagram, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const iconSize = 30; // Adjust the size as per your requirement
    const iconColor = '#fff'; // Adjust the color as per your requirement

    return (
        <>
            <div className='bottom-0 left-0 right-0 flex justify-between items-center h-20 px-9 text-slate-50 md:text-lg text-medium bg-gray-800'>
                <div className='flex justify-between items-center'>
                    <p className="text-center text-muted">&copy; 2024 Made With ♥ by Shantanu Saini</p>
                </div>
                <div className='flex justify-around items-center'>
                    <a href="https://www.instagram.com/whoshantanu_/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noopener noreferrer" className='transform hover:scale-110 transition-transform duration-200 mx-4'>
                        <FaSquareInstagram size={iconSize} style={{ color: iconColor }} />
                    </a>
                    <a href="https://github.com/Shantanu-Saini" target="_blank" rel="noopener noreferrer" className='transform hover:scale-110 transition-transform duration-200 mx-4'>
                        <FaSquareGithub size={iconSize} style={{ color: iconColor }} />
                    </a>
                    <a href="https://www.linkedin.com/in/shantanu-saini-525a9a27a/" target="_blank" rel="noopener noreferrer" className='transform hover:scale-110 transition-transform duration-200 mx-4'>
                        <FaLinkedin size={iconSize} style={{ color: iconColor }} />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;
