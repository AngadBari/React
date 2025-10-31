import React from 'react'
import 'remixicon/fonts/remixicon.css'


function Card(props) {
  return (
    <div className=' h-full  w-90  overflow-hidden relative rounded-2xl'>
         <img className=' h-full w-full  object-cover ' src={props.img} alt="" />

         <div className=' absolute top-0 left-0 h-full w-full flex flex-col justify-between p-7'>
             <h3 className='flex  justify-center items-center bg-white w-10 h-10 rounded-full  '>{props.id+1}</h3>
             <div>
                <p className=' mb-8 leading-7  font-bold'> {props.intro}</p>

                <div className=' flex justify-between'>
             <button className=' bg-blue-700 px-10 rounded-full p-2 text-white '>{props.tag}</button>
             <button className='bg-blue-700 rounded-full p-2 text-white'><i className="ri-arrow-right-line"></i></button>
             </div>

                </div>
            
         </div>
    </div>
  )
}

export default Card