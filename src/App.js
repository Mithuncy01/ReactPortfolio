import React from 'react'
import { Route, Routes } from 'react-router-dom';
import  '../src/App.css';
import { Header } from './Componant/Header/Header'
import { Home } from './Componant/Home/Home';
import {About } from './Componant/About/About';
import { Contact} from './Componant/Contact/Contact';
import { Portfolio } from './Componant/Portfolio/Portfolio';
import { View } from './Componant/View/View';



export default function App() {
  return (
    <>
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/portfolio/view' element={<View/>}></Route>
      </Routes>
    </>
  )
}
