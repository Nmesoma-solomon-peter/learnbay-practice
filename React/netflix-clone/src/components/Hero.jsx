import React, { useEffect, useState } from 'react';
import './Hero.css';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Hero(props) {
    const [randomMovie, setRandomMovie] = useState(null);

    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                const movies = response.data.results;
                const randomIndex = Math.floor(Math.random() * movies.length);
                setRandomMovie(movies[randomIndex]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [props.url]);

    const [youtubeVidId, setYoutubeVidId] = useState("");
    function playSelected(mTitle){
        movieTrailer(mTitle)
        .then((info)=>{
            let vid = new URLSearchParams(new URL(info).search).get("v");
            setYoutubeVidId(vid);
        })
        .catch((error)=>{
            console.log(error);
        })


    }
    return (
        <div>
            {randomMovie ? (
                <div className='hero' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`, width: "100%", height: "60vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                    <h1 className='heroH1'>{randomMovie.title}</h1>
                    <p className='heroP'>{randomMovie.overview}</p>
                    <button className='playBtn' onClick={()=>playSelected(randomMovie.title)}><i className="fa-solid fa-play"></i> Play</button>
                    <button className='moreBtn'>More Info</button>
                </div>
            ) : (
                <div>Loading...</div> // Optionally, display a loading message or spinner
            )
            }
            {
                            youtubeVidId?
                            <YouTube videoId={youtubeVidId}  opts={{width:"100%", height:"500px"}}/>
                            : null
            }
        </div>
    );
}

export default Hero;
