import React, { useEffect, useState } from 'react'


function App() {
const [count,setCount] = useState(() =>{
  const storedCount = localStorage.getItem('counter');
  return storedCount ? parseInt(storedCount) :0;
});

useEffect(() =>{
  localStorage.setItem( 'counter' , count.toString());
},[count]);

const addCount = () =>{
  setCount(count+1)
}
const minusCount = () =>{
  setCount(count-1)
  
}
const resetCount = () =>{

  // localStorage.removeItem('counter');
  localStorage.clear();
  setCount(0)
}

  return (

    
    <>
    <h1>Counter : {count}</h1>
    <button onClick={addCount}>Increment</button>
    <button onClick={minusCount}>Decrement</button>
    <button onClick={resetCount}>Reset</button>

    
    
    </>
  )
}

export default App