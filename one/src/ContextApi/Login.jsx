import React, { useState } from 'react'
import { useAuth } from './Context'
import { useNavigate } from 'react-router-dom'

function Login() { 

     let [loginData,setLoginData] = useState({

        Name:'', Email:'',Password:''
     })

     let handleChange =(e)=>{
        setLoginData(
            {...loginData, [e.target.name]:e.target.value}
        )
     }

     let getData = useAuth()
     console.log(getData)


     let navigate =useNavigate()

     let handleSubmit = (e)=>{
          e.preventDefault()
        //   console.log(loginData)

          getData.setData({
            userData:loginData,isLoggedIn:true
          })
          navigate('/profile')
     }

  


  return (
   <form onSubmit={handleSubmit} >
    <input
        type='text'
        className='form-control my-3 w-50 m-auto'
        placeholder='Username'
        value={loginData.Name}
        name='Name'
        onChange={handleChange}
    />
    <input
        type='text'
        className='form-control my-3 w-50 m-auto'
        placeholder='MyEmail'
        value={loginData.Email}
        name='Email'
        onChange={handleChange}
    />
    <input
        type='text'
        className='form-control my-3 w-50 m-auto'
        placeholder='MyPassword'
        value={loginData.Password}
        name='Password'
        onChange={handleChange}
    />
    <button type='submit' className='w-100 bg-danger'>Submit</button>
   </form>
  )
}

export default Login