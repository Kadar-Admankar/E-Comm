import React, { useState } from "react";

const Login = ()=>{
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleLogin = ()=>{
        console.log(email, password)
    }

    return(
        <div className="login">
             <input type="text" className="inputBox" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter email" />
             <input type="password" className="inputBox" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter Password" />

             <button  className="appButton" onClick={handleLogin} type="button">Login</button>
        </div>
    )
} 

export default Login