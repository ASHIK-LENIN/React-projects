// import { Component } from 'react'

// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data : 'Hi...'
//     };
// this.initialState = this.state;
    

//   }

  

// updateData(){
//   this.setState({data :'Hello'})
// }

// resetData(){
//   const value = {...this.initialState}
//   this.setState(value)
// }
//   render() {

//     return (
//       <div>
//         <h1>{this.state.data}</h1>
//         <button onClick={ () => this.updateData()} >Press Here</button>
//         <button onClick={ () => this.resetData()} >Reset</button>

//       </div>
//     )
//   }

// }
// export default App


import React from 'react'
import { useState } from 'react'

function App() {

    const [data,setData] = useState(['Ashik','Devu' ,'Maani','Ashy'])
    const  [users,setUsers] = useState([
        {name :'Ashy' ,age : 21},
        {name :'Devu' ,age : 21},
        {name :'Ashik' ,age : 20},
        {name :'Maani' ,age : 22}
    ])


    
  return (

   
    
    <>
 
<div>
    
    
    <ul>
        
            {data.map((itm,index) => {
                return <li key={index}>{itm}</li>
            })}
       
    </ul>

    <table>
        <tr>
        <td>Name</td>
        <td>Age </td>
        </tr>

        {users.map((item,k) =>{
            return (
            <tr key={k}>
                <td>{item.name}</td>
                <td>{item.age}</td>
            </tr>
            )
        })}
    </table>
</div>

    </>
  )
}

export default App