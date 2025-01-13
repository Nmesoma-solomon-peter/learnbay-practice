import React from 'react'
import {Route, Routes ,Link} from 'react-router-dom'
// import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Error from './Error'
import Book from './Book'
import Mobiles from './Mobiles'

function App() {
  // const myRouter = createBrowserRouter([
  //   {
  //     path: "/contact",
  //     element: <Contact />
  //   },
  //   {
  //     path: "*",
  //     element: <Error />
  //   },
  //   {
  //     path: "/",
  //     element: <Home />
  //   }
  // ])
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact us</Link>
    <Link to="/mobiles/nokia/5000">Mobiles</Link>
    <Link to="/contact?name=nmesoma&address=kigali">View One Contact</Link>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/books/:id" element={<Book />}></Route>
        <Route path='/mobiles/:brand/:cost' element={<Mobiles />}/>
      </Routes>

      {/* method 2 */}
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
      <RouterProvider router={myRouter} /> */}
    </>
  )
}

export default App