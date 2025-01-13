import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import ViewStudent from './ViewStudent'

function Student() {
  return (
    <div>
        <NavLink to="add">add student</NavLink>
        <NavLink to="view"> view student</NavLink>

        <Outlet />
    </div>
  )
}

export default Student