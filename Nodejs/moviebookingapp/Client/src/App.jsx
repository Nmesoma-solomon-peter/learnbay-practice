import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Home from './components/Home'
import Signin from './components/Signin'
import Movies from './components/Movies'
import MovieInner from './components/MovieInner'
import Theatreandlocation from './components/Theatreandlocation'


function App() {
  // get single item
  const [singleMovieDetials, setSingleMovieDetails] = useState("")
  const [movieName, setMovieName] = useState("")

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/movies" element={<Movies info={setSingleMovieDetails}/>}></Route>
        <Route path="/movie/single" element={<MovieInner info={singleMovieDetials} setMovieName = {setMovieName}/>}></Route>
        <Route path="/theatreandlocation" element={<Theatreandlocation movieName={movieName}/>} ></Route>
      </Routes>
    </>
  )
}

export default App