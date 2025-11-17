import React from 'react'



function App() {
   const btnOnclicked=()=>{
  console.log("Hello Cool Boy ")
}

  return (
    <div  onWheel={(e)=>{
      console.log("Scrolling page...",e)//page Scrolling
    }}>


      <button onClick={btnOnclicked}>Clicked</button>  
   
   

    <input type="text" onChange={function(elem){
        console.log(elem.target.value) //Change
    }} />

    </div>
  )
}

export default App