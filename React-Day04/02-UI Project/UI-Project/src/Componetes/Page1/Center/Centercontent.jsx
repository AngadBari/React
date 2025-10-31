import React from 'react'
import Left from './Left'
import Right from './Right'
import Card from './Card'



function Centercontent(props) {
  return (
    <div className=' flex gap-15  h-[80vh] py-10 px-10'>
        <Left/>
         
         {props.user.map(function(elm,idx)
         {
              return <Card key={idx} id={idx} img={elm.img} tag={elm.tag} intro={elm.intro}/>
         })}
    </div>
  )
}

export default Centercontent