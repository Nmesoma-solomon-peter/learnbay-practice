import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import MainApp from './components/MainApp'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/app/*' element={<MainApp/>}/>
      </Routes>
    </div>
  )
}

export default App