// import React from 'react'
// import { useState } from 'react'




// function App() {

//   const [count, setCount] = useState(0)


//   const addCount = (() => {
//     setCount(count + 1)

//   })

//   const minusCount = (() => {
//     setCount(count -1)
//   })
//   const ResetCount = (() => {
//     setCount({count :0})
//   })
//   return (
//     <div>
//       <h1>Counter :{count}</h1>
//       <button onClick={addCount}>Add Count</button>
//       <button onClick={minusCount}>Minus Count</button>
//       <button onClick={ResetCount}>Reset Count</button>
//     </div>
//   )
// }

// export default App


//-------------------------------------------------//


import React from 'react'
import { useState } from 'react'

import Employee from './Employee.jsx'

function App() {
  const [embo, setEmbo] = useState([])

  const emp = [
    { name: 'Neymar', age: '24' },
    { name: 'Messi', age: '29' },
    { name: 'Ronaldo', age: '35' },
  ]
  console.log(emp);
  return (
    <div>
      {emp.map((item,index) => {

return(
  <Employee  key ={index} name={item.name} age={item.age}/>

)    })}

    </div>
  )
}

export default App