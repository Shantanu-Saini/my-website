import React from 'react';
import { FaMobileAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { BsBoxArrowInDown } from "react-icons/bs";
import { RiMailAddLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { LuSend } from "react-icons/lu";
import myCV from '../Images/ShantanuCV.pdf';

const Contact = (props) => {
  const { isLight } = props;
  return (
    <>
      <div id='contact' className={`flex flex-col justify-center items-center md:py-16  md:px-14 px-4 ${isLight ? "text-black" : 'text-white'}`} style={isLight ? { backgroundColor: "#FAF9F6" } : { backgroundColor: "#121212" }}>
        <div className={`${isLight ? 'bg-white' : 'bg-slate-900'} rounded-3xl md:px-8 md:py-8 p-7 w-full drop-shadow-2xl`}>

          <h2 className="font-extrabold text-4xl mb-5">Contact Me</h2>
          <p>Let's Get in Touch</p>

          <div className='flex md:flex-row flex-col mt-14'>
            {/* Left Section */}
            <div className='flex flex-col justify-between md:w-1/2 w-full'>
              <div className='space-y-6'>
                <div>
                  <p className='flex items-center'>
                    <FaMobileAlt className='mr-2 text-2xl' />
                    <a href='tel:+916395853395'>+91 6395853395</a>
                  </p>
                  <p className='flex items-center'>
                    <MdOutlineMail className='mr-2 text-2xl' />
                    <a href='mailto:shantanusaini7000@gmail.com'>shantanusaini7000@gmail.com</a>
                  </p>
                </div>

                <a href={myCV} download="ShantanuCV.pdf"><button className="bg-red-700 inline text-white px-4 py-2 my-5 mr-4 hover:bg-slate-700 transition duration-300 hover:scale-110">
                  <span className='flex items-center'>Download CV <BsBoxArrowInDown className='ml-2' /> </span>
                </button></a>
              </div>
              <div className='space-y-6 mb-16'>
                <p className='font-semibold text-2xl'>Social Media </p>
                <div className='flex space-x-6'>
                  <div className={`h-12 w-12 flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-gray-700'} rounded-full`}>
                    <a href="https://www.linkedin.com/in/shantanu-saini-525a9a27a/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className='text-2xl' /></a>
                  </div>
                  <div className={`h-12 w-12 flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-gray-700'} rounded-full`}>
                    <a href="https://www.instagram.com/whoshantanu_/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noreferrer"><FaInstagram className='text-2xl' /></a>
                  </div>
                  <div className={`h-12 w-12 flex items-center justify-center ${isLight ? 'bg-gray-200' : 'bg-gray-700'} rounded-full`}>
                    <a href="https://github.com/Shantanu-Saini" target="_blank"
                      rel="noopener noreferrer"><FaGithub /></a>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className='space-y-5 md:w-1/2 w-full'>
              <p className='font-semibold md:text-2xl text-lg'>leave a Message for me</p>
              <div className='flex items-center rounded-3xl h-16 text-base border px-5 py-2 space-x-3 md:w-4/5'>
                <FaRegUser className='text-2xl' /><input type="text" placeholder='Enter Your Name' className={`w-full h-full text-2xl font-light ${isLight?'bg-white':'bg-slate-900'}`}/>
              </div>
              <div className='flex items-center rounded-3xl h-16 text-base border px-5 py-2 space-x-3 md:w-4/5'>
                <RiMailAddLine className='text-2xl' /><input type="email" placeholder='Enter Your Email' className={`w-full h-full text-2xl font-light ${isLight?'bg-white':'bg-slate-900'}`}/>
              </div>

              <div className='flex rounded-3xl text-base border px-5 py-2 space-x-3 md:w-4/5 w-full'>
                <CgDetailsMore className='text-2xl' />
                <textarea rows="4" placeholder='Type Your Message' className={`w-full h-full text-2xl font-light resize-none ${isLight?'bg-white':'bg-slate-900'}`}></textarea>
              </div>

              <button className="bg-red-700 text-white px-4 py-2 mr-4 hover:bg-slate-700 transition duration-300 hover:scale-110">
                <span className='flex items-center'>Send <LuSend className='ml-2 text-xl' /> </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
