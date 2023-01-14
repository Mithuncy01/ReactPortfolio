import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo  from '../../Images/cylogo.png';

export const Navlink = () => {
  return (
    
        <nav className="w-[200px] h-full z-99 bg-DarkBlue fixed lg:block md:hidden sm:hidden xsm:hidden ">
          <div className="px-10 my-8">
            <Link to='/'>
            <img src={logo} alt='logo' className="w-28"/>
            </Link>
          </div>
 
          <div className="overflow-hidden">
            <li className="">
            <NavLink activeclassname="active" className="mb-4 px-10 py-4 transition-all duration-200 font-semibold cursor-pointer text-white hover:bg-purple hover:scale-110" to="/home">HOME</NavLink>
            </li>
            <li>
            <NavLink activeclassname="active" className="mb-4 px-10 py-4 transition-all duration-200 font-semibold cursor-pointer text-white hover:bg-purple hover:scale-110" to="/about">SKILLS</NavLink>
            </li>
            <li>
            <NavLink activeclassname="active" className="mb-4 px-10 py-4 transition-all duration-200 font-semibold cursor-pointer text-white hover:bg-purple hover:scale-110" to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li>
            <NavLink activeclassname="active" className="mb-4 px-10 py-4 transition-all duration-200 font-semibold cursor-pointer text-white hover:bg-purple hover:scale-110" to="/contact">CONTACT</NavLink>
            </li>
          </div> 
        </nav>
   
  )
}
