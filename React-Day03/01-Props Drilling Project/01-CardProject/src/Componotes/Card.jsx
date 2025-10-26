import React from 'react'
import {Bookmark} from 'lucide-react'

function Card(props) {
  return (
   
        <div className='card'>
          <div className='top'>
            <img src={props.brandLogo} alt="" />
            <button>Save <Bookmark  size={12}/> </button>
          </div>

          <div className='center'>
            <h2> {props.company} <span> 5 days age</span></h2>
            <h3>Graphic Designer</h3>
            <div>
              <h4>Full Time</h4>
              <h4>Remote</h4>
            </div>  
          </div>

          <div className='bottom'>
            <div>
             <h4>$85-120k</h4>
             <p>Dahanu ,Mumabi</p> 
            </div>
             <button>Apply Now</button>
          </div>   

       
  
  
       
</div>
  )
}

export default Card