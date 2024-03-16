import { createContext, useContext, useState } from "react";

let AuthUser= createContext()

export let AuthProvider = ({children})=>{

     let [data,setData] = useState({
        userData:null,isLoggedIn:false
     })

     let logOut= ()=>{
        setData({userData:null, isLoggedIn:false})
     }

    return <AuthUser.Provider value={{data,setData,logOut}}>
        {children}
    </AuthUser.Provider>
}

// useContext

export let useAuth  = ()=> useContext(AuthUser)