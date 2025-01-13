import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
  return (
    <div>
        {
            props.isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
        }

    </div>
  )
}

export default ProtectedRoute