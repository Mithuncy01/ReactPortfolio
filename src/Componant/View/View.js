import React from 'react'
import { Link } from 'react-router-dom';
import site1 from '../../Images/Biycle.jpg'
import { ToggleButton } from '../ToggleButton/ToggleButton';

export const View = () => {
  return (
    <div className="lg:ml-[200px] sm:ml-0">
        <ToggleButton className=""></ToggleButton>
        <div className="bg-DarkBlue w-screen h-full">
            <img className="w-[1700px] relative " src={site1} alt='site1'></img>
            <Link className="absolute flex justify-center items-center">
                <button className="py-3 px-10 bg-purple text-white rounded-sm 
                ">Visit Site</button>
            </Link>
        </div>
    </div>
  )
}
