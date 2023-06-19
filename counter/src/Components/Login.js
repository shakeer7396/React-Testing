import React, { useState } from 'react'

const Login = () => {
    const [error,setError] =useState(false);
    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");

    const handleClick = async (e)=>{
        e.preventDefault();
        try{

        }
        catch{
            setError(true)
        }
    }

  return (
    <div className='container'>
        <form>
            <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
            <button disabled={!username || !password} onClick={handleClick}>Login</button>
            <span data-testid="error" style={{visibility:error ?"visible" : "hidden"}}>Something Went Wrong</span>
        </form>

    </div>
  )
}

export default Login