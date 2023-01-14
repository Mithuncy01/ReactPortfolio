import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import mainBg from '../../Images/BG.jpg'
import './Contact.css';
import { ToggleButton } from '../ToggleButton/ToggleButton';


export const Contact = () => {
  const [ email , setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
 
  const inputElement = useRef(null);
  useEffect(()=>{
    if(inputElement.current){
      inputElement.current.focus();
    }
  },[]);

  const Validate =()=>{
  const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  
  if(!regExEmail.test(email)){
    setEmailErr(true);
    console.log('Not valid email')
  }else{
    console.log('email valid')

  }
}

  return (
    <div className="lg:h-screen md:h-screen lg:ml-[200px] md:ml-0 sm:h-full sm:ml-0 bg-midnight font-[poppins]">
        <ToggleButton className=""></ToggleButton>
        <div style={{backgroundImage: `url(${mainBg})`, backgroundRepeat:`no-repeat`, objectFit: 'cover', height:'100vh',}} 
        className=" w-full relative lg:h-screen md:h-full sm:h-full flex flex-col items-center justify-center">
          <div className="sm:mt-[250px] md:mt-0 lg:mt-0">
              <div className="cat">
              <div className="ear ear--left"></div>
              <div className="ear ear--right"></div>
              <div className="face">
                <div className="eye eye--left">
                  <div className="eye-pupil"></div>
                </div>
                <div className="eye eye--right">
                  <div className="eye-pupil"></div>
                </div>
                <div className="muzzle"></div>
              </div>
            </div>
          </div>
            <h1 className="text-white lg:text-[30px] sm:text-[20px] sm:px-6 text-center font-bold mb-10">Contact Me / Tell Me About Yourself</h1>
            <form action='' className=" flex flex-col lg:w-[800px] sm:w-[300px] md:w-[500px] sm:gap-5 gap-8">
                <input className="focus:outline-purple ring-1 ring-mycolor2 text-white py-3 px-6 bg-DarkBlue border-none rounded-sm" type='text' ref={inputElement} required placeholder='Type Your Name'></input>
                <input  className= "focus:outline-purple ring-1 ring-mycolor2 text-white py-3 px-6 bg-DarkBlue border-none rounded-sm" onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Type Your Email">
                  
                </input>
                <textarea className="focus:outline-purple ring-1 ring-mycolor2 text-white h-40 py-3 px-6 bg-DarkBlue border-none rounded-sm" type='text' placeholder="Description"></textarea>
                <input className="py-3 px-2 bg-purple text-white text-lg font-medium rounded-sm ring-1 ring-mycolor2 cursor-pointer"  onClick={Validate} type='submit'></input>
            </form>
            <div className="h-8 text-center gap-3 mt-5 flex flex-col p-4">
              { emailErr && <h1 className="text-red">You have entered invalid email</h1>}
              
            </div>
            
           
        </div>
    </div>
  )
}
