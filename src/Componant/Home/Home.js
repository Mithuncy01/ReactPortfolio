import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import bg from '../../Images/BG2.jpg';
import { ToggleButton } from '../ToggleButton/ToggleButton';

export const Home = () => {
  

  return (
    <div className="lg:ml-[200px] md:ml-0 sm:ml-0 bg-midnight font-[montserrat]">
        <ToggleButton className="ml-8 mt-8"></ToggleButton>
      <div style={{backgroundImage: `url(${bg})`,padding:'0px 25px 0px 25px', backgroundRepeat:`no-repeat`, objectFit: 'cover', width:'100%', height:'100vh',}} 
        className="w-full relative sm:h-full lg:h-screen text-center sm:px-5 flex flex-col overflow-hidden justify-center gap-2">

              <div className="z-10"> 
                <h4 className="font-[700] text-purple text-lg">HELLO!</h4>
                <h1 className="lg:text-[75px] md:text-[50px] sm:text-[35px] text-white font-[700]">I'M MITHUN C-Y</h1>
                <p className="lg:text-[25px] sm:text-[20px] mb-4 text-white font-[700]">A Full Stack <span className="text-purple">Web Developer</span> and <span className="text-purple">Graphic Designer</span></p>
                <p className=" text-white font-medium">Who respects deadlines and always tries to make something unique.
                My best characteristic is that <br></br> I'm willing to go the extra mile  and put a lot of effort into your product. In the end, the most important thing for me is that my clients are happy.</p>
                <button className="ring-1 ring-mycolor2 hover:scale-110 transition-all duration-200  mt-8 px-[25px] py-[10px] text-white rounded-sm bg-purple">
                  <Link to='/contact'>Contact Me</Link>
                </button>
              <div>
            </div>

            </div>
      </div>
        
    </div>
  )
}
