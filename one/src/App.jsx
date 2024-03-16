import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './ContextApi/Home'
import Profile from './ContextApi/Profile'
import Login from './ContextApi/Login'
import Navbar from './ContextApi/Navbar'



function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path ='/' element = {<Home/>}/>
      <Route path ='/profile' element = {<Profile/>}/>
      <Route path ='/login' element = {<Login/>}/>
     </Routes>
    
    </div>
  )
}

export default App