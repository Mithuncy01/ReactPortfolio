import React from 'react'
import { Link } from 'react-router-dom';
import mainBg from '../../Images/BG.jpg'
import { ToggleButton } from '../ToggleButton/ToggleButton';

export const About = () => {
  return (
    <div className="lg:h-screen md:h-screen lg:ml-[200px] md:ml-0 sm:ml-0 bg-midnight font-[poppins]">
        <ToggleButton className=""></ToggleButton>
        <div style={{backgroundImage: `url(${mainBg})`, backgroundRepeat:`no-repeat`, objectFit: 'cover',}} 
         className="w-full lg:h-screen md:h-full relative text-center flex flex-col overflow-hidden items-center justify-center  gap-2">
          
          <h1 className="lg:text-[35px] sm:mt-24 md:mt-24 sm:text-[30px] sm:my-6 text-white font-bold ">My Expertise</h1>
          <span className="bg-purple h-[3px] w-[100px] mb-10"></span>
          
          <div className="flex flex-wrap gap-10 z-20 items-center text-center justify-center">
            <Link to='/portfolio'>
            <div className="h-[250px] w-[320px] hover:scale-105 transition-all duration-200 cursor-pointer gap-3 flex-col hover:bg-purple ring-1 ring-mycolor2 bg-DarkBlue rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold ">Web Design</p>
                <span className="h-[2px] w-[40px] bg-purple"></span>
                <p className="text-mycolor2 px-8">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
            </div>
            </Link>
            <Link to='/portfolio'>
            <div className="h-[250px] w-[320px] hover:scale-105 transition-all duration-200 cursor-pointer gap-3 flex-col hover:bg-purple bg-DarkBlue ring-1 ring-mycolor2 rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold">Web Development</p>
                <span className="h-[2px] w-[40px] bg-purple"></span>
                <p className="text-mycolor2 px-8">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
            </div>
            </Link>
            <Link to='/portfolio'>
            <div className="h-[250px] w-[320px] hover:scale-105 transition-all duration-200 cursor-pointer gap-3 flex-col hover:bg-purple bg-DarkBlue ring-1 ring-mycolor2 rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold">Wordpress</p>
                <span className="h-[2px] w-[40px] bg-purple"></span>
                <p className="text-mycolor2 px-8">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
            </div>
            </Link>
            <Link to='/portfolio'>
            <div className="h-[250px] w-[320px] hover:scale-105 transition-all duration-200 cursor-pointer gap-3 flex-col hover:bg-purple bg-DarkBlue ring-1 ring-mycolor2 rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold">Graphic Design</p>
                <span className="h-[2px] w-[40px] bg-purple"></span>
                <p className="text-mycolor2 px-8">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
            </div>
            </Link>
          </div>
          <div className=" flex text-purple z-20 gap-10 mt-14 mb-8 flex-wrap justify-center">
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">HTML</span>
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">CSS</span>
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">Java Script</span>
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">PHP</span>
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">WordPress</span>
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">React</span>
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">Next JS</span>
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">Node Js</span>
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">MongoDB</span>
              <span className="text-[25px] text-md font-medium cursor-pointer hover:text-white transition-all duration-100">SQL</span>
            </div>
            {/* <div>
              <button className=" mt-8 px-[25px] py-[10px] text-white rounded-sm bg-purple">Contact Me</button>
            </div> */}
        </div>
        
        
    </div>
  )
}
