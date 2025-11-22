import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


   

const App = () => {
  
  
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(0)

  // useEffect(() => {
  //   console.log("UseEffect Calling..")
  // },[])//No Display

  //  useEffect(() => {
  //   console.log("UseEffect Calling..")
  // },[num,num2])//When Click Both button Display

  //  useEffect(() => {
  //   console.log("UseEffect Calling..")
  // },[num])//Whwn Click Btn1 Display
  
  
  return (
    <>

      <h1>{num}</h1>
      <h1>{num2}</h1>

      <button onClick={()=>{
        setnum(num+1)
      }}>A Value +</button>
      
       <button onClick={()=>{
        setnum2(num2-1)
      }} > b Value -</button>
  </>
  )
}

export default App