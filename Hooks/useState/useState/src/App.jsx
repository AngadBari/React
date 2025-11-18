import React from 'react'
import { useState } from 'react'

function App() {

  const [num, setnum] = useState(10)

   const jaada=()=>{
       setnum(num+1)
   }

   const kam=()=>{
     setnum(num-1)
   }


  return (
    <>
       <h1>{num}</h1>
       <button onClick={jaada}>+</button>
       <button onClick={kam}>-</button>
  </>
  )
}

export default App