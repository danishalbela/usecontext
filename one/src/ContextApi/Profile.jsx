import React from 'react'
import {useAuth} from '../ContextApi/Context'

function Profile() {

    let getcon = useAuth()
    console.log(getcon)


  return (
    <div>
    <h1>Profile compo</h1>

    {
        getcon.data.isLoggedIn ? <h2>Welcome {getcon?.data?.userData?.Name}</h2> : ''
    }

{
    getcon.data.userData? <button onClick={ ()=>getcon.logOut()}>LogOut</button> : ''
}
    </div>
  )
}

export default Profile