import React from 'react';
import '../Header/Header.css';
import { Navlink } from '../Navlink/Navlink';

export const Header = () => {
  
  return (
    <>
      <header className="w-full h-full font-[poppins]">
      <Navlink></Navlink>
      </header>
    </>
    
  )
}
