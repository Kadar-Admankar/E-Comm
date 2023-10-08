import React, { useState } from 'react';

const SignUp = ()=>{
    const [name, setName] = useState('') // default set is empty
    const [ email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const collectData = ()=>{
        console.log(name, email, password)
    }
    return(
        <div className='register'> 
            <h1>Register</h1>
            <input className='inputBox' type='text' 
            value={ name } onChange={ (e)=>{setName(e.target.value)} } 
            placeholder='Enter name' /> {/* e for event, here value attribute is for empty the state */}

            <input className='inputBox' type='text' 
            value={ email } onChange={ (e)=>{setEmail(e.target.value)} } 
            placeholder='Enter Email' />

            <input className='inputBox' type='password' 
            value={ password } onChange={ (e)=>{setPassword(e.target.value)} } 
            placeholder='Enter password' />

            <button onClick ={ collectData } className='appButton' type='button'>SignUp</button>
        </div>
    )
}

export default SignUp