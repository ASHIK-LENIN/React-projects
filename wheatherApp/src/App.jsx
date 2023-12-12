import React, { useEffect, useState } from 'react'
import axios from 'axios'
import backgroundVideo from './assets/final.mp4';
import './App.css'



const App = () => {

  const [data, setData] = useState([]);
  const [location, setLocation] = useState('')


  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=delhi&units=imperial&appid=67764106ff8d596ed09750cc8d93c7f3`)
      .then((response) => {
        setData(response.data)
        console.log(data.weather);
      
      })

  }, [])

  const searchQuery = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value)
    console.log(`location: ${location}`);
  }
 const searchCity = () =>{

 }



  return (


    <>
      <div className='Navbar'>
        <input type="search" placeholder='Enter a City' className='searchbar' onChange={searchQuery} />
        <button className='button' onSubmit={searchCity}>Search</button>
      </div>


      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Kochi</p>
          </div>
          <div className="temp">
            <h1>45° C</h1>
          </div>
          <div className="description">Clouds</div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>35° C</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className='bold' >20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'> 12 MPH</p>
            <p>Wind Speed</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default App