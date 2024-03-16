import React from 'react'
import { useAuth } from './Context'

function Home() {

    let {data} = useAuth()
    console.log(data)

  return (
    <div>
        <h1>Home</h1>
        <h2>
            {data.isLoggedIn === false ? '' : JSON.stringify(data)}
        </h2>
    </div>
  )
}

export default Home