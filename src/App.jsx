import { useState } from 'react'
import './App.css'
import Navbar from './Costume.Components/Navbar.jsx'
import Home from './Costume.Components/Home'
import Services from './Costume.Components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Navbar Container Wraper */}
    <div className='w-[100%] absolute z-10 bg-gray-200 lg:px-[52px] md:px-[20px]'>
      <Navbar />
      </div>
      <div className='bg-gray-200'>
       <Home />
      </div>
      <div className=''>
      <Services />
      </div>
    </>
  )
}

export default App
