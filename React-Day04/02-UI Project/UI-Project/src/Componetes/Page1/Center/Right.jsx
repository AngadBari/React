import React from 'react'
import Card from './Card'


function Right(props) {
  return (
    <div className=' flex flex-nowrap gap-3 w-3/4 h-full p-4'>

        <Card user={users} />
        <Card/>
        <Card/>
    </div>
  )
}

export default Right