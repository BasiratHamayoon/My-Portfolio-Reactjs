import { useState } from 'react'
import './App.css'
import Navbar from './Costume.Components/Navbar.jsx'
import Home from './Costume.Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Navbar Container Wraper */}
    <div className='w-[100%] absolute z-10'>
      <Navbar />
      </div>
      <div className='w-full h-[100vh]'>
       <Home />
      </div>
    </>
  )
}

export default App
