import React, { useEffect } from 'react';
import { IoIosLink } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import projectData from '../assets/projectData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = (props) => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  const { isLight } = props;

  return (
    <div id='projects' className={`flex flex-col items-center md:px-20 px-5 py-20 h-max ${isLight ? "text=black" : 'text-white'}`} style={isLight ? { backgroundColor: "#FAF9F6" } : { backgroundColor: "#121212" }}>
      <h1 className="text-4xl font-bold">My Projects</h1>
      <p className='my-8 text-xl'>Where I applied my Skills</p>
      <div className={`grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-6 w-full`}>
        {
          projectData.map((project, index) => (
            
            <div key={index} className="flex flex-col justify-between items-center shadow-xl" style={isLight ? { backgroundColor: "#faf9f6", color: "#333333" } : { backgroundColor: "#2C2C2C", color: "#e5e4e2" }} data-aos='fade-up'>
              
              <img src={project.image} alt={project.title} className="bg-slate-500 h-80 w-full rounded-t" />
              
              <div className='m-6'>
                
                <h2 className="text-xl font-medium mb-2">{project.title}</h2>
                <p>{project.description}</p>
                <h5 className='font-medium my-2'>Tech Stack: {project.techStack}</h5>
                <hr className='my-3' />
                
                <span className='flex justify-around'>
                  <a href={project.sourceCode} target='_blank' rel="noreferrer"><IoIosLink className='text-2xl' /></a>
                  <a href={project.githubSrc} target='_blank' rel="noreferrer"><LuGithub className='text-2xl' /></a>
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;
