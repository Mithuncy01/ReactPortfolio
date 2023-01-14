import React from 'react'
import mainBg from '../../Images/BG.jpg'
import { ToggleButton } from '../ToggleButton/ToggleButton';
import site1 from '../../Images/Portfolio 11.jpg'
import site2 from '../../Images/Portfolio 12.jpg'
import site3 from '../../Images/Portfolio 13.jpg'
import site4 from '../../Images/Portfolio 8.jpg'
import site5 from '../../Images/Get-Ride.jpg'
import site6 from '../../Images/Movie-site.jpg'
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  return (
    <div className="lg:ml-[200px] md:ml-0 sm:ml-0 bg-midnight font-[poppins]">
        <ToggleButton className=""></ToggleButton>
        <div style={{backgroundImage: `url(${mainBg})`, backgroundRepeat:`no-repeat`, objectFit: 'cover',}} 
         className="w-full lg:h-screen md:h-full relative text-center flex flex-col overflow-hidden items-center justify-center gap-2">
          
          <h1 className="lg:text-[35px] sm:mt-24 md:mt-24 sm:text-[30px] sm:my-6 text-white font-bold ">My Development Work</h1>
          <span className="bg-purple h-[3px] w-[100px] mb-10"></span>
          
          <div className="flex flex-wrap gap-10 z-20 items-center text-center justify-center">
            <div className="lg:h-[250px] lg:w-[450px] z-10 sm:h-[250px] sm:w-[250px] relative hover:scale-110 transition-all duration-200 cursor-pointer gap-3 flex-col  ring-1 ring-mycolor2 bg-DarkBlue rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold ">Agency Website</p>
                <span className="h-[2px] w-[40px] bg-purple "></span>
                <p className="text-mycolor2 px-8 z-10">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
                <img className="absolute w-[450px] h-[250px]  opacity-20 hover:opacity-40 overflow-hidden transition-all duration-200" src={site1} alt='site'></img>
            </div>
            <div className="lg:h-[250px] lg:w-[450px] z-10 sm:h-[250px] sm:w-[250px] relative hover:scale-110 transition-all duration-200 cursor-pointer gap-3 flex-col  ring-1 ring-mycolor2 bg-DarkBlue rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold ">Business Website</p>
                <span className="h-[2px] w-[40px] bg-purple "></span>
                <p className="text-mycolor2 px-8 z-10">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
                <img className="absolute w-[450px] h-[250px]  opacity-20 hover:opacity-40 overflow-hidden transition-all duration-200" src={site2} alt='site'></img>
            </div>
            <Link to='/portfolio/view'>
            <div className="lg:h-[250px] lg:w-[450px] z-10 sm:h-[250px] sm:w-[250px] relative hover:scale-110 transition-all duration-200 cursor-pointer gap-3 flex-col  ring-1 ring-mycolor2 bg-DarkBlue rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold ">Bike Store</p>
                <span className="h-[2px] w-[40px] bg-purple "></span>
                <p className="text-mycolor2 px-8 z-10">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
                <img className="absolute w-[450px] h-[250px]  opacity-20 hover:opacity-40 overflow-hidden transition-all duration-200" src={site3} alt='site'></img>
            </div>
            </Link>
            <div className="lg:h-[250px] lg:w-[450px] z-10 sm:h-[250px] sm:w-[250px] relative hover:scale-110 transition-all duration-200 cursor-pointer gap-3 flex-col  ring-1 ring-mycolor2 bg-DarkBlue rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold ">GYM Website</p>
                <span className="h-[2px] w-[40px] bg-purple "></span>
                <p className="text-mycolor2 px-8 z-10">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
                <img className="absolute w-[450px] h-[250px]  opacity-20 hover:opacity-40 overflow-hidden transition-all duration-200" src={site4} alt='site'></img>
            </div>
            <div className="lg:h-[250px] lg:w-[450px] z-10 sm:h-[250px] sm:w-[250px] relative hover:scale-110 transition-all duration-200 cursor-pointer gap-3 flex-col  ring-1 ring-mycolor2 bg-DarkBlue rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold ">WordPress Website</p>
                <span className="h-[2px] w-[40px] bg-purple "></span>
                <p className="text-mycolor2 px-8 z-10">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
                <img className="absolute w-[450px] h-[250px]  opacity-20 hover:opacity-40 overflow-hidden transition-all duration-200" src={site5} alt='site'></img>
            </div>
            <div className="lg:h-[250px] lg:w-[450px] z-10 sm:h-[250px] sm:w-[250px] relative hover:scale-110 transition-all duration-200 cursor-pointer gap-3 flex-col  ring-1 ring-mycolor2 bg-DarkBlue rounded-sm flex justify-center items-center">
                <p className="text-white text-xl font-bold ">Movie Site</p>
                <span className="h-[2px] w-[40px] bg-purple "></span>
                <p className="text-mycolor2 px-8 z-10">Lorem ipsum consectee dolor sit amet consectetur adipisicing elit. In, sapiente!</p>
                <img className="absolute w-[450px] h-[250px]  opacity-20 hover:opacity-40 overflow-hidden transition-all duration-200" src={site6} alt='site'></img>
            </div>
            
          </div>
          <div className=" flex text-purple justify-center">
              
            </div>
            {/* <div>
              <button className=" mt-8 px-[25px] py-[10px] text-white rounded-sm bg-purple">Contact Me</button>
            </div> */}
        </div>
        
        
    </div>
  )
}
