import React from 'react'
import { useState } from 'react'

function App() {

  // const [num, setnum] = useState({user:"Angas",age:29})
  
  
  const [num, setnum] = useState(10)




  const onClicked=()=>{
       const newNum={user:"aNGAD"}
      //  console.log(newNum)
      //  setnum(newNum)
 //some above code 

//  setnum(prev=>({...prev,user:"angad"}))//Destrucred



 //Batch

 setnum(num+1)
 setnum(num+1)
 setnum(num+1)

 //This done using follwind code

    setnum(prev=>(prev+1))


    // console.log(num)//but show 10 asycn feature that why UI update bur back not

  }

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={onClicked}>Click</button>
    </div>
  )
}

export default App