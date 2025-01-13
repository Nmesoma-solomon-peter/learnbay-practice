import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddNewContact from './AddNewContact'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Header/>}/>
        <Route path="/add" element={<AddNewContact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
