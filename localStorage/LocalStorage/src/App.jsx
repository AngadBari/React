import React from 'react'

const App = () => {
 
 //Local Strorage 4 IMP METHOD

 //+++1..setItem

//  const user =localStorage.setItem("user","Angad")
//  const age =localStorage.setItem("age",18)


 //++++2.getItem
    
  // console.log(localStorage.getItem('user'))
 
 //++++3.removeItem

//  localStorage.removeItem('user')

 //+++clear

 localStorage.clear()


//Object and LocatStronage

const user={
  name:'Angad',
  age:20
}

  // localStorage.setItem('user',user//---->local strage need string fromate data

  //First Convert to String

  // localStorage.setItem('user',JSON.stringify(user))
  
  //Neeed TO Convert Orinal Formate JSON

  // const usera=JSON.parse(localStorage.getItem(('user')))
  // console.log(usera)
 
  return (
    <div></div>
  )
}

export default App