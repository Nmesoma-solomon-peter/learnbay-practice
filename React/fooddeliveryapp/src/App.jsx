import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ShoppinCart from './ShoppinCart'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/shopincart" element={<ShoppinCart />} />
        </Routes>
        <Navbar />
        <HomePage />
      </BrowserRouter>

    </>
  )
}

export default App