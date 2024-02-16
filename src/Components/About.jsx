import React, { useState } from 'react';
import anime from '../Images/anime.gif';
import { GiGraduateCap } from "react-icons/gi";
import { HiBriefcase } from "react-icons/hi";

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const openTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id='about' className="flex flex-col items-center md:px-10 md:py-20 px-4 py-8 h-max" style={{ backgroundColor: "#FAF9F6" }}>
      <h1 className='text-4xl font-bold'>About Me</h1>
      <p className='my-8 text-xl'>Brief Introduction to me</p>
      <div className='flex md:flex-row flex-col justify-center items-center mt-4'>
        <div className='md:w-1/2 flex items-center justify-center'>
          <img src={anime} alt="image" className='w-auto md:h-fit h-max rounded-md' />
        </div>


        <div className='md:w-1/2 flex flex-col items-center justify-around md:px-8 px-4 bg-red-700 text-white md:-ml-16 md:opacity-80 md:text-lg text-base' style={{ height: "600px" }}>
          <div className='h-1/2 flex items-center'>
            <p>
              I am a passionate computer science engineering student dedicated to the art of problem-solving. With a strong foundation in languages like C++, Java, and Python. I thrive on challenges and collaboration. Committed to exploring emerging technologies, I aspire to be a catalyst for positive change in the tech world. Explore my portfolio to discover my journey and projects.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center mt-8 h-1/2'>
            <div className="flex md:space-x-8 space-x-8">
              <button className={`relative after:bottom-0 hover:text-slate-200 ${activeTab === 'education'
                ? 'active-link after:border-b-2 after:border-white after:absolute after:w-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-500 after:hover:w-full'
                : ''
                }`}
                onClick={() => openTab('education')}>
                <span className='flex items-center'><GiGraduateCap className='mr-2' />Education</span>
              </button>
              <button className={`relative after:bottom-0 hover:text-slate-200 ${activeTab === 'experience'
                ? 'active-link after:border-b-2 after:border-white after:absolute after:w-0 after:-translate-x-1/2 after:transition-all after:duration-500 after:hover:w-full'
                : ''
                }`}
                onClick={() => openTab('experience')}>
                <span className='flex items-center'>Experience<HiBriefcase className='ml-2' /></span>
              </button>
            </div>
            <div className={`mt-8 h-full grid grid-cols-2 gap-4 ${activeTab === 'education' ? 'grid' : 'hidden'}`}>
              <div>
                <p><b>Highschool (2016)</b></p>
                <p>S.D.M Inter College</p>
                <p>Percentage: 85.83%</p>
              </div>
              <div>
                <p><b>Intermediate (2018)</b></p>
                <p>S.D.M Inter College</p>
                <p>Percentage: 85.60%</p>
              </div>
              <div>
                <p><b>Graduation (2018-2021)</b></p>
                <p>M.J.P Rohilkhand University</p>
                <p>Percentage: 60.51%</p>
              </div>
              <div>
                <p><b>Post Graduation (2022-2024)</b></p>
                <p>Kamla Nehru Institute of Technology</p>
                <p>Pursuing...</p>
              </div>
            </div>
            <div className={`mt-8 h-full ${activeTab === 'experience' ? 'block' : 'hidden'}`}>
              <p>
                <b>Web Developer Intern @ CodeSoft</b>
              </p>
              <p>September 2023 - October 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
