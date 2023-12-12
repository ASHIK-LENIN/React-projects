// import React, { Component } from 'react'
// import './App.css'

// export class App extends Component {

//   constructor() {

//     super();
//     this.state = {
//       data: [],
//       filtered: [],
//       search: ''
//     };

//   }

//   componentDidMount() {
//     fetch('https://pokeapi.co/api/v2/pokemon')
//       .then(response => response.json())
//       .then(data => /*console.log(data.results))*/
//         this.setState({
//           data: data.results,
//           filtered: data.results
//         })
//       )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     const filtered = this.state.data.filter(item => item.name.includes(searchField));

//     this.setState({
//       search: searchField,
//       filtered: filtered
//     })
//   };

//   render() {
//     console.log('Render method is called :');
//     const { filtered } = this.state;


//     return (
//       <>


//         <h1>Pokeman</h1>
//         <div>
//           <input type="search" className='search-box' placeholder="Search Here" id="search" onChange={this.onSearchChange} />


//         </div>
//         <div className='card-list'>

//           {filtered.map((item,index) =>

//             <ul className='card-container' key={index}>
//               <li id='url' >{item.name}  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index+1}.png`} alt="img" /> </li>
//             </ul>
//           )}
//         </div>


//       </>
//     )
//   }


// }

// export default App




// Functional-component-----------------------

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function App() {

  let [data, setData] = useState([])
  let [filtered, setFiltered] = useState([])
  let [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results),
          setFiltered(data.results)
      })
  }, []);


  // const onSearchChange = (event) => {
  //   const searchField = event.target.value.toLowerCase();
  //   const filtered = data.filter(item =>
  //   item.name.includes(searchField));
  // }
   
  // setFiltered(filtered)
  // setSearch(searchField)
  
const onSearhChange = (event) => {
  
  const searchField = event.target.value.
  setSearch(searchField)
  const filtered =  data.filter(item => item.name.includes(searchField));
    setFiltered(filtered)
}

  return (
    <>
      <h1>Hello</h1>
      <input type="search" className='search-box' placeholder="Search Here" id="search" onChange={onSearchChange } />


      <div className='card-list'>

        {filtered.map((item, index) =>

          <ul className='card-container' key={index}>
            <li id='url' >{item.name}  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index + 1}.png`} alt="img" /> </li>
          </ul>
        )}
      </div>


    </>
  )
}
