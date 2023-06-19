import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)
  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
        <button onClick={()=>setCounter(counter-1)}>Decrease</button>
        <h2>{counter}</h2>

    </div>
  )
}

export default Counter