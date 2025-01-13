import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Movies(props) {
    const [movies, setMovies] = useState([]);
    let randImg = " "
    useEffect(() => {
        axios.get(props.url)
            .then((output) => {
                setMovies(output.data.results);
            }
            )
            .catch((error) => {
                console.log(error);
            })
    }, [])

   
    // console.log(heroImage);

    return (
        <div>
            
            <h3 className='movieTitle'>{props.title}</h3>
            <div className='movieImages'>
                {
                    movies.map((i) => {
                        return <img className='movieImg' src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} alt="movie image" style={{ width: '250px', height: '200px' }} key={i.poster_path} />
                    })
                }
            </div>
        </div>
    )
}

export default Movies