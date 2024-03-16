import React from 'react'
import Login from './Login'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 border border-4 w-75 p-2 d-flex justify-content-between navlists">
        <li className="nav-item">
         <NavLink to = '/' >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to = '/profile'>Profile</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to = '/login'>Login</NavLink>
        </li>
      </ul>        
    </div>
  </div>
</nav>
    

    
  )
}

export default Navbar