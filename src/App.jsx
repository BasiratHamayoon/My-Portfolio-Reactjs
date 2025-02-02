import { useState } from 'react'
import './App.css'
import Navbar from './Costume.Components/Navbar.jsx'
import Home from './Costume.Components/Home'
import Skills from './Costume.Components/Skills'
import Projects from './Costume.Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Navbar Container Wraper */}
    <div className='w-[100%] absolute z-10 bg-[#121313] lg:px-[52px] md:px-[20px]'>
      <Navbar />
      </div>
      <div className='bg-[#121314] h-[100vh]'>
       <Home />
      </div>
      <div className='bg-[#121313]'>
       <Skills />
      </div>
      <div className='h-[100vh] overflow-hidden'>
        <Projects />
      </div>
    </>
  )
}

export default App
