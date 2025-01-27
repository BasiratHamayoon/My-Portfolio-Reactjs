import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Home-Images/logo.png"

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
    <div className='flex justify-center items-center py-[10px] w-full lg:px-[100px]'>
          <div className='flex gap-10 justify-between items-center w-[90%]'>
            <img src={logo}
            className='w-[270px] h-[50px]' />
            <div className='flex px-[5px]'>
              <ul className='flex justify-center items-center'>
                {navItems.map((item, index) => (
                  <li key={item.id}
                  className='w-[80px] h-[50px] flex justify-center items-center'>
                    <Link to={item.url}
                    className="relative text-[15px] font-bubbler font-bold hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full
                    ">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    </div>
  )
}

export default Navbar;
