import React from 'react'

import {Routes,Route} from 'react-router-dom'
import Signup from '../Components/Signup/Signup'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/home'
import Login from '../Components/Login/Login'
import { useState } from 'react'



function App() {



  return (
    <> 
    <Routes>

    <Route path='/'  element={<Navbar/>} >
        <Route  index element={<Home/>}/>
        <Route path='/signup'  element={<Signup/>}/>
        <Route path='/login'  element={<Login/>}/>

    </Route>
    </Routes>
    
    </>
  )
}

export default App