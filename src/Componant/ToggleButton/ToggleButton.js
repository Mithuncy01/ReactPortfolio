import React from 'react'
import { AiFillCloseCircle, AiOutlineAlignLeft } from 'react-icons/ai';
import { useState } from 'react';

import { NavLink, Link } from 'react-router-dom'
import logo  from '../../Images/cylogo.png';

export const ToggleButton = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  // const [open, setOpen] = useState(false)

  //             const showHide = () => setOpen(!open)
                  
  //             const closeDivFromeParent = () => setOpen(false)

              // {`open?<div>you content to be hide and shown</div>:null`}
  return (
        <div className=" lg:hidden">
          <div onClick={ ()=> setMobileMenuOpen(!mobileMenuOpen)}>
            
          {mobileMenuOpen? (<AiFillCloseCircle className="z-99 lg:hidden md:block sm:block w-8 h-8 ml-6 mt-6 fixed text-white text-[30px] cursor-pointer hover:text-mycolor2"
          />) 
        : (<AiOutlineAlignLeft className="z-99 lg:hidden md:block sm:block w-8 h-8 z-30 ml-6 mt-6 fixed text-white text-[30px] cursor-pointer hover:text-mycolor2" />)} 
          </div>

            <div className={mobileMenuOpen? "sm:block" : "absolute sm:hidden lg:hidden md:hidden"}>
            
              <div className="overflow-hidden pt-[75px] bg-purple">
              <div className="px-6 my-8">
              <Link to='/'>
              <img src={logo} alt='logo' className="w-[60px]"/>
              </Link>
            </div>
  
              <li>
              <NavLink activeclassname="active" className="mb-4 px-6 py-4 transition-all duration-200 font-semibold cursor-pointer text-white hover:bg-DarkBlue" to="/home">HOME</NavLink>
              </li>
              <li>
              <NavLink activeclassname="active" className="mb-4 px-6 py-4 transition-all duration-200 font-semibold cursor-pointer text-white hover:bg-DarkBlue" to="/about">SKILLS</NavLink>
              </li>
              <li>
              <NavLink activeclassname="active" className="mb-4 px-6 py-4 transition-all duration-200 font-semibold cursor-pointer text-white hover:bg-DarkBlue" to="/portfolio">PORTFOLIO</NavLink>
              </li>
              <li>
              <NavLink activeclassname="active" className="mb-4 px-6 py-4 transition-all duration-200 font-semibold cursor-pointer text-white hover:bg-DarkBlue" to="/contact">CONTACT</NavLink>
              </li>
            </div> 
             
            </div>

        </div>
  )
}
