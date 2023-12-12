import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

const App = ()=> {
  // const [name , setName] = useState('ASHIK')
  const [name , setName] = useState([])

 
     useEffect (() =>{
      const url  =('https://jsonplaceholder.typicode.com/users')
     const response = fetch(url)
    .then(response => response.json())
    .then(response => setName(response))
    
    console.log(response);
     
     },[]);
     console.log(name)
  
 
     
  return (
    <div>
      <h1>Hello</h1>
    {/* <button onClick={() => {setName('Rahul')}}>Click</button> */}
    {name.map((item) =>
           <p>
            {item.name} <br />
            {item.username}/
            {item.email}
               
           </p>   
            
          )}
    </div>
  )
}

export default App
