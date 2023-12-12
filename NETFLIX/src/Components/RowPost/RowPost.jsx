import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../Contants/Contants'
import Youtube from 'react-youtube';


function RowPost(props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        axios.get(props.url).then(response => {
           
            setMovies(response.data.results)
        }).catch((error) => {
            console.log(error);
        })


    }, [])
    return (
        <>
            <div className="row">
                <h2>{props.title}</h2>

                <div className="posters">

                    {movies.map((item) => {
                        console.log(imageUrl+item.backdrop_path);
                       return  <img className= { props.isSmall ? 'smallPoster' : 'poster' }src={`${imageUrl+item.backdrop_path}`} alt="posters" />

                    })}



                </div>
                <Youtube  />
            </div>



        </>
    )
}

export default RowPost