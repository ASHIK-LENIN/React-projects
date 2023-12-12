import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'

import Home from './Routes/Home/Home'
import Contact from './Routes/Contact/Contact'
import Projects from './Routes/Projects/Projects'
import About from './Routes/About/About'
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path ='/' element={<Home/>}/>
       
        <Route path ='/about' element={<About/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path ='/projects' element={<Projects/>}/>
       
      </Routes>
      <Hero/>
      <About/>
      

    </div>



    </>
  )
}

export default App