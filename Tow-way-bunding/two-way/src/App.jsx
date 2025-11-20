import React from 'react'
import { useState } from 'react'
const App = () => {

  const [name, setName] = useState('')

const formHandler=(e)=>{
  e.preventDefault()
   console.log(name)
   setName("")

}

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter Your Name'
        onChange={
          (e)=>{
             setName(e.target.value)
          }
        }
         value={name}
         />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App