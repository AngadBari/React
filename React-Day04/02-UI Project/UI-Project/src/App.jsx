import React from 'react'
import Top from './Componetes/Page1/Top/Top'

import Centercontent from './Componetes/Page1/Center/Centercontent'

const users=[
  {
     img:'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2417',
     intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis velit at quasi. Nisi non, dolorem optio pari',
     tag:'Satisfiled'
  },
  {
     img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
     intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis velit at quasi. Nisi non, dolorem optio pari',
     tag:' Satisfiled'
  },
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
     intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis velit at quasi. Nisi non, dolorem optio pari',
     tag:'Satisfiled'
  }
]

function App() {
  return (
    <div>
      <Top/>
      <Centercontent user={users}/>
    </div>
  )
}

export default App