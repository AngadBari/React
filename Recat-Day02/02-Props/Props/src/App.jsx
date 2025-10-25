import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crad from './Componotes/Crad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Crad user="Ayush"/>
      <Crad user="John"/>
    </>
  )
}

export default App
