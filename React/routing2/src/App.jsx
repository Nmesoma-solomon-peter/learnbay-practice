import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Student from './Student'
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom'
import ViewStudent from './ViewStudent'
import AddStudent from './AddStudent'
import ProtectedRoute from './ProtectedRoute'
import Login from './Login'



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  function pleaseLogout(){
    setIsLoggedIn(false);
    navigate("/login");
  }
  return (
    <div>{
      isLoggedIn ? <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/student">Student</NavLink>
        <button onClick={pleaseLogout}>Logout</button>
      </> :<NavLink to="/login">Login</NavLink>

    }
      <Routes>
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/student" element={<Student />}>
            <Route path="add" element={<AddStudent />}> </Route>
            <Route path='view' element={<ViewStudent />}> </Route>
          </Route>
        </Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  )
}

export default App