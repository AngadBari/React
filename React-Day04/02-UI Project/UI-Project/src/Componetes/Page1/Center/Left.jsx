import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Left() {
  return (
    <div className=' w-1/4 h-full flex flex-col justify-between '>
        <div>
            <h3 className=' text-6xl font-bold leading-[1.1] '>Prospective <br/> <span className=' lowercase bg-gray-200 rounded-full px-3'>Customer</span> <br/> <span className=' lowercase '>Segmentation</span> </h3>
            <p className=' mt-10 font-medium text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est.</p>
        </div>
        <div><i className="ri-arrow-right-up-line text-5xl"></i></div>
    </div>
  )
}

export default Left