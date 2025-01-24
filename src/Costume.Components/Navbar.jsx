import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navItems = [
        {
            id: 1,
            title: "Home",
            url: "",
        },
        {
            id: 2,
            title: "Services",
            url: "",
        },
        {
            id: 3,
            title: "Projects",
            url: "",
        },
        {
           id: 4,
           title: "About Me",
           url: "",
        },
        {
           id: 5,
           title: "Contact",
           url: "",
        },

    ]
  return (
    <div className='flex justify-center items-center py-[10px] w-full'>
          <div className='flex gap-10 justify-between items-center text-white w-[90%]'>
            <h1 className='text-[25px] font-bold'>BasiratHamayun</h1>
            <div className='flex px-[10px]'>
              <ul className='flex gap-10 justify-center items-center'>
                {navItems.map((item, index) => (
                  <li key={item.id}
                  className='w-[100px] h-[50px] flex justify-center items-center'>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    </div>
  )
}

export default Navbar;
