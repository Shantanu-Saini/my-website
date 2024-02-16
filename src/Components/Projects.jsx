import React from 'react';
import { IoIosLink } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import todo from '../Images/todoList.png';
import textOpr from '../Images/textOpr.png';
import keyLog from '../Images/keyLog.png';
import learnLite from '../Images/learnLite.png';

const Projects = () => {
  return (
    <div id='projects' className="flex flex-col items-center md:px-20 px-5 py-20 h-max" style={{ backgroundColor: "#FAF9F6" }}>
      <h1 className="text-4xl font-bold">My Projects</h1>
      <p className='my-8 text-xl'>Where I applied my Skills</p>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-6 w-full'>
        <div className="flex flex-col justify-between items-center shadow-xl" style={{ backgroundColor: "#faf9f6", color: "#333333" }}>
          <img src={todo} className="bg-slate-500 h-80 w-full rounded-t" />
          <div className='m-6'>
            <h2 className="text-xl font-medium mb-2">TODO App</h2>
            <p>Efficient React-based ToDo list app for seamless task management and organization with a user-friendly interface.</p>
            <h5 className='font-medium my-2'>Tech Stack: ReactJS, TailwindCSS</h5>
            <hr className='my-3' />
            <span className='flex justify-around'>
              <a href="https://task-todo-now.netlify.app/" target='_blank' rel="noreferrer"><IoIosLink className='text-2xl'/></a>
              <a href="https://github.com/Shantanu-Saini/todo-app" target='_blank' rel="noreferrer"><LuGithub className='text-2xl'/></a>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center shadow-xl" style={{ backgroundColor: "#faf9f6", color: "#333333" }}>
          <img src={learnLite} className="bg-slate-500 h-80 w-full rounded-t" />
          <div className='m-6'>
            <h2 className="text-xl font-medium mb-2">Learn Lite</h2>
            <p>A boundless space for interactive quizzes, curated learning materials, and personalized scoring</p>
            <h5 className='font-medium my-2'>Tech Stack: ReactJS, NodeJS & MongoDB</h5>
            <hr className='my-3' />
            <span className='flex justify-around'>
              <a href="https://learn-lite.netlify.app/" target='_blank' rel="noreferrer"><IoIosLink className='text-2xl'/></a>
              <a href="https://github.com/Shantanu-Saini" target='_blank' rel="noreferrer"><LuGithub className='text-2xl'/></a>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center shadow-xl" style={{ backgroundColor: "#faf9f6", color: "#333333" }}>
          <img src={textOpr} className="bg-slate-500 h-80 w-full rounded-t" />
          <div className='m-6'>
            <h2 className="text-xl font-medium mb-2">Text Editor</h2>
            <p>React-based Text editor app with light & dark mode organization with a user-friendly interface.</p>
            <h5 className='font-medium my-2'>Tech Stack: ReactJS, Vanila CSS</h5>
            <hr className='my-3' />
            <span className='flex justify-around'>
              <a href="https://text-opr.netlify.app" target='_blank' rel="noreferrer"><IoIosLink className='text-2xl'/></a>
              <a href="https://github.com/Shantanu-Saini/text-Operation" target='_blank' rel="noreferrer"><LuGithub className='text-2xl'/></a>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center shadow-xl" style={{ backgroundColor: "#faf9f6", color: "#333333" }}>
          <img src={keyLog} className="bg-slate-500 h-80 w-full rounded-t" />
          <div className='m-6'>
            <h2 className="text-xl font-medium mb-2">Key Logger</h2>
            <p>Keylogger App companion for tracking keyboard activity. Keep tabs on keystrokes effortlessly. Simple, discreet, and powerful.</p>
            <h5 className='font-medium my-2'>Tech Stack: HTML, CSS & JavaScript</h5>
            <hr className='my-3' />
            <span className='flex justify-around'>
              <a href="https://keypress-logger.netlify.app/" target='_blank' rel="noreferrer"><IoIosLink className='text-2xl'/></a>
              <a href="https://github.com/Shantanu-Saini/key-logger" target='_blank' rel="noreferrer"><LuGithub className='text-2xl'/></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects