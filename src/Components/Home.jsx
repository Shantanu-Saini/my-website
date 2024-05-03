import React from 'react';
import myImage from '../Images/myImage.png';
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight, BsBoxArrowInDown } from "react-icons/bs";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import myCV from '../Images/ShantanuCV.pdf';

const Home = (props) => {
    const { isLight } = props;
    return (

        <div id='home' className="flex md:flex-row flex-col md:justify-between items-center md:px-10  px-4 md:h-screen h-max" style={isLight ? { backgroundColor: "#FAF9F6" } : { backgroundColor: "#121212" }}>
            <div className={`md:w-1/2 md:px-16 px-8 py-8 ${isLight ? 'text-black' : 'text-white'}`}>
                <h1 className={`md:text-4xl text-2xl font-bold mb-4 ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>Hi, I'm</h1>
                <span className='text-red-700 md:text-6xl text-4xl font-bold italic'>Shantanu Saini</span>
                <br /><br />
                <h1 class={`animate-typing overflow-hidden whitespace-nowrap border-r-4 ${isLight ? 'border-r-gray-800' : 'border-r-gray-200'} md:text-5xl text-3xl ${isLight ? 'text-gray-800' : 'text-gray-200'} mb-5`}>I'm a programmer.</h1>
                <div className='space-y-6 mb-10'>
                    <div className='flex space-x-6'>
                        <div className={`h-12 w-12 flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-gray-700'} rounded-full`}>
                            <a href="https://www.linkedin.com/in/shantanu-saini-525a9a27a/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className='text-2xl' /></a>
                        </div>
                        <div className={`h-12 w-12 flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-gray-700'} rounded-full`}>
                            <a href="https://www.instagram.com/whoshantanu_/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noreferrer"><FaInstagram className='text-2xl' /></a>
                        </div>
                        <div className={`h-12 w-12 flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-gray-700'} rounded-full`}>
                            <a href="https://github.com/Shantanu-Saini" target="_blank" rel="noreferrer">
                                <FaGithub className='text-2xl' />
                            </a>
                        </div>
                        <div className={`h-12 w-12 flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-gray-700'} rounded-full`}>
                            <a href="https://auth.geeksforgeeks.org/user/whoshantanu/" target="_blank" rel="noreferrer">
                                <SiGeeksforgeeks className="text-2xl" />
                            </a>
                        </div>
                        <div className={`h-12 w-12 flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-gray-700'} rounded-full`}>
                            <a href="https://leetcode.com/whoshantanu/" target="_blank" rel="noreferrer">
                                <SiLeetcode className='text-2xl' />
                            </a>
                        </div>

                    </div>
                </div>

                <a href={myCV} download="ShantanuCV.pdf"><button className="bg-red-700 inline text-white px-4 py-2 mr-4 hover:bg-slate-700 transition duration-300 hover:scale-110">
                    <span className='flex items-center'>Download CV <BsBoxArrowInDown className='ml-2' /> </span>
                </button></a>
                <a href="#contact"><button className="bg-red-700 text-white px-4 py-2 mr-4 hover:bg-slate-700 transition duration-300 hover:scale-110">
                    <span className='flex items-center'>Contact Me  <BsBoxArrowUpRight className='ml-2' />
                    </span>
                </button></a>
            </div>

            <div className="md:w-1/2 rounded-full flex items-center justify-center">
                <img src={myImage} alt='Shantanu' className="md:h-96 h-72 w-auto hover:-translate-y-4 duration-300" />
            </div>

        </div>
    );
};

export default Home;
