import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = ()=>{
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
   const navigate = useNavigate()

   useEffect(()=>{
      const auth = localStorage.getItem('user')
      if(auth){
        navigate('/')
      }
   }, [] )

    const handleLogin = async ()=>{
        console.log(email, password)
        let result = await fetch('http://localhost:5000/login', {   // fetch returns promise hence we used async await
             method :"post",
             body : JSON.stringify( { email, password } ),
             headers : {
                'content-Type':'application/json'
             }
        })
        result  = await result.json()
        console.log(result)
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result))
             navigate('/')
        }else{
            alert('Please Enter correct details')
        }
    }

    return(
        <div className="login">
            <h1>Login</h1>
             <input type="text" className="inputBox" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter email" />
             <input type="password" className="inputBox" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter Password" />

             <button  className="appButton" onClick={handleLogin} type="button">Login</button>
        </div>
    )
} 

export default Login