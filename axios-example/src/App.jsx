import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [state,setState] = useState([])


  const handleChange =() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
      
      setState(response.data)
    
  })
  
 
  }
  return (
    <>
    <h1>Users details</h1>
    <button onClick={handleChange}>Click me</button>
    {state.map((items,index) =>{
      return(
        <div key={index}>
      <h1>{index+1}</h1>
      <h3>{items.title}</h3>
      <h5>{items.body}</h5>
      </div>
      )
      
    })}
    
    </>
  )
}

export default App