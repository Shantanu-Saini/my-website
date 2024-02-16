import React from 'react'
import c_ico from '../Images/c_ico.jpeg';
import cpp from '../Images/c++_ico.png'
import java from '../Images/java_ico.png'
import html from '../Images/html_ico.png'
import css from '../Images/css_ico.png'
import js from '../Images/js_ico.png'
import react from '../Images/react_ico.png'
import tailwind from '../Images/tailwindCSS.png'
import node from '../Images/node_ico.png'
import express from '../Images/express_ico.png'
import git from '../Images/git.png'
import github from '../Images/github.png'
import mysql from '../Images/mysql.png'

const Skills = () => {
  return (
    <>
      <div id='skills' className="flex flex-col items-center md:px-20 px-5 py-20 h-max" style={{ backgroundColor: "#FAF9F6" }}>
        <h1 className="text-4xl font-bold">Skills</h1>
        <p className='my-8 text-xl'>What I Know</p>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-40 md:gap-y-16 gap-y-14">
          <div>
            <h1 className="text-2xl mb-8">Languages</h1>
            <div className="grid grid-cols-3 md:gap-x-1 md:gap-y-8 gap-y-7">
              <img src={c_ico} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
              <img src={cpp} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
              <img src={java} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl mb-8">Frontend</h1>
            <div className="grid grid-cols-3 md:gap-x-1 md:gap-y-8 gap-y-7">
              <img src={html} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
              <img src={css} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
              <img src={js} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
              <img src={react} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
              <img src={tailwind} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl mb-8">Tools</h1>
            <div className="grid grid-cols-3 md:gap-x-1 md:gap-y-8 gap-y-7">
              <img src={git} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
              <img src={github} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
              <img src={mysql} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl mb-8">Backend</h1>
            <div className="grid grid-cols-3 md:gap-x-1 md:gap-y-8 gap-y-7">
              <img src={node} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
              <img src={express} alt="c" className="h-20 hover:-translate-y-3 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
