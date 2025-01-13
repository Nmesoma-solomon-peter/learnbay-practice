import React from 'react'
import "./MovieInner.css"
import { Link, useNavigate } from 'react-router-dom';

function MovieInner(props) {
    const navigate = useNavigate();
    console.log(props.info);
    const navigateToLocation = ()=>{
        props.setMovieName(props.info.movie_name)
        navigate("/theatreandlocation")
    }

    return (
        <>
            <div className='py-8 px-24 relative'
                style={{ backgroundImage: `url(${props.info.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className='blur-bg'></div>
                <div className='relative z-10 flex'>
                    <div>
                        <img src={props.info.image_url} alt="movie image" className='cardImage' />
                    </div>
                    <div className='md:pl-9 md:py-20  text-white'>
                        <h2 className='font-bold text-3xl '>{props.info.movie_name}</h2>
                        <p className='w-96 mt-3'>{props.info.description}</p>
                        {/* <Link to="/theatreandlocation"> */}
                            <button className="bg-red-500 w-44 h-12 rounded-md mt-14" onClick={navigateToLocation}>
                                Book Ticket
                            </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>

            <div className='ml-40 mt-10'>
                <h3 className='text-2xl font-bold my-7'>About the movie</h3>
                <p className='w-9/12'>{props.info.description}</p>
            </div>
        </>
    )
}

export default MovieInner