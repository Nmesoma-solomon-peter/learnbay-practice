import React from 'react'
import Movies from './Movies'
import Hero from './Hero'

function Homepage() {
    return (
        <div>
            <Hero url='https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=ec0431e6630836f47008140df36fdb1b' />
            <Movies title="Trending" url='https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=ec0431e6630836f47008140df36fdb1b' />
            <Movies title="Popular" url='https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=ec0431e6630836f47008140df36fdb1b'/>
            <Movies title="Top rated" url='https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=ec0431e6630836f47008140df36fdb1b'/>

        </div>
    )
}

export default Homepage