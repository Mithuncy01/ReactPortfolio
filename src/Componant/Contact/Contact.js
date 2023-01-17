import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import mainBg from '../../Images/BG.jpg'
import './Contact.css';
import { ToggleButton } from '../ToggleButton/ToggleButton';


export const Contact = () => {
  const [ email , setEmail] = useState("");
  const [ name, setName] = useState("");
  const [ emailErr, setEmailErr] = useState(null);
  const [ fromErr, setFromErr] = useState(null);
  const [ text, setText] = useState("");
  const [ textErr, setTextErr] = useState("");
 

  const inputElement = useRef(null);
  useEffect(()=>{
    if(inputElement.current){
      inputElement.current.focus();
    }
  },[]);

  // From Control function
  const handleSubmit = (e)=>{
    e.preventDefault();
    setEmailErr(null)
    const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const value = e.target.email.value;
    console.log(value)
    if(regExEmail.test(value) && text !== "" && text.length > 10){
      setFromErr('I will contact with you soon')
      setName("") 
      setEmail("")
      setText("")
    }else{
      setFromErr('Something wrong(Not Submitted)')
      
      setText("error here");
    }
  }

  // Email Control
  const handleChange = (e)=>{
    const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const value = e.target.value;
    
    if(regExEmail.test(value)){
      setEmailErr('')
    }else{
      setEmailErr('Please Enter a Valid Email')
    }
    setEmail(value)
  }

  // Name Control
  const handleName = (e)=>{
    const value = e.target.value;
    setName(value)
  }

  // Text Area Control
  const handleText = (e)=>{
    const value = e.target.value;
    if(value.length > 200){
      setTextErr("Please Write Within 200 Words")
    }else{
      setTextErr("")
    }
    setText(value) 
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTime('Timeout called!');
  //   }, 5000);
  //   setTime('') 
  // }, []);
 
  return (
    <div className="lg:h-screen md:h-screen lg:ml-[200px] md:ml-0 sm:h-full sm:ml-0 bg-midnight font-[poppins]">
        <ToggleButton className=""></ToggleButton>
        <div style={{backgroundImage: `url(${mainBg})`, backgroundRepeat:`no-repeat`, objectFit: 'cover',}} 
        className=" w-full relative lg:h-screen md:h-full sm:h-full flex flex-col items-center justify-center">
          <div className="sm:mt-[50px] md:mt-0 lg:mt-0">
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
            <form action='' onSubmit={handleSubmit} className=" flex flex-col lg:w-[800px] sm:w-[320px] md:w-[500px] sm:gap-5 gap-8">
                <input className="focus:outline-purple ring-1 ring-mycolor2 text-white py-3 px-6 bg-DarkBlue border-none rounded-sm" type='text'ref={inputElement} value={name} onChange={handleName}  required placeholder='Type Your Name'></input>
                <input  className= "focus:outline-purple ring-1 ring-mycolor2 text-white py-3 px-6 bg-DarkBlue border-none rounded-sm" onChange={handleChange} value={email} name='email' required placeholder="Type Your Email">
                  
                </input>
                <textarea className="focus:outline-purple ring-1 ring-mycolor2 text-white h-40 py-3 px-6 bg-DarkBlue border-none rounded-sm" type='text' value={text} onChange={handleText} placeholder="Description"></textarea>
                <input className="py-3 px-2 bg-purple hover:bg-mycolor2 hover:text-DarkBlue text-white text-lg font-medium rounded-sm ring-1 ring-mycolor2 cursor-pointer"type='submit'></input>
            </form>
            <div className="h-[85px] text-center gap-2 mt-4 w-ful flex flex-col p-4">
              {<h1 className="text-red ">{emailErr}</h1>}
              {<h1 className={setFromErr ? 'text-purple' : 'text-red'}>{fromErr} </h1>}
              {<h1 className={setTextErr ? 'text-red' : ""}>{textErr}</h1>}
            </div>
            
           
        </div>
    </div>
  )
}
