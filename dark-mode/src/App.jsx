import React, { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(['light'])
  
const ChangeTheme =() =>{
  if(theme === 'light'){
    setTheme('dark')
  }else{
    setTheme('light')
  }
}


const themeClassName = theme === 'light Theme' ? 'light Theme' : 'dark';
  return (

    <>
    <div className={`App ${themeClassName}`}>
      <label class="switch">
 
    <input type="checkbox" name="checkbox" id="toggle" checked = {theme === 'dark'} onChange={ChangeTheme}/>
  <span class="slider round"></span>
</label>
<h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
</div>


    </>
  )
}

export default App 

