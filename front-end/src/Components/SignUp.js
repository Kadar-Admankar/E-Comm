import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  //
  const [name, setName] = useState(""); // default set is empty
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate() // navigation hook

  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
        navigate('/')
    }
})

  const collectData = async() => {
    console.log(name, email, password);
    const result = await fetch("http://localhost:5000/register", {   // api integration with fetch api
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-type':'application/json'
      }
    });
    console.log("result----", result)
    const result1 = await result.json()
    console.log("result1", result1)

    localStorage.setItem("user", JSON.stringify(result1)) // for local storage

    if(result1){
     navigate('/')  // redirecting to / endpoint // it will drag or hook the / endpoint and display
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value); }}
        placeholder="Enter name"
      />{" "}
      {/* e for event, here value attribute is for empty the state */}
      <input className="inputBox" type="text" value={ email } onChange={(e) => { setEmail(e.target.value); }}
        placeholder="Enter Email"
      />
      <input className="inputBox" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }}
        placeholder="Enter password"
      />
      <button onClick={collectData} className="appButton" type="button">
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
