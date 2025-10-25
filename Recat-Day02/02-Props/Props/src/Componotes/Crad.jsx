import React from 'react'

function Crad(props ) {
  return (
    <div className='parent'>
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1761165308649-78e8f6d55b88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"></img>
            <h1>{props.user}</h1>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iste culpa mollitia enim quam eligendi beatae fugiat perspiciatis, odit reprehenderit labore ab ea animi, eos laboriosam corporis ducimus? Architecto,</p>
        </div>
        
    </div>
  )
}

export default Crad