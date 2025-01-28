import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import logo from '../assets/Home-Images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      id: 1,
      title: 'Home',
      url: '',
    },
    {
      id: 2,
      title: 'Services',
      url: '',
    },
    {
      id: 3,
      title: 'Projects',
      url: '',
    },
    {
      id: 4,
      title: 'About Me',
      url: '',
    },
    {
      id: 5,
      title: 'Contact',
      url: '',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center py-[10px] w-full sm:px-[10px] lg:px-[100px]">
      {/* Logo Section */}
      <img src={logo} className="w-[150px] h-[40px] lg:w-[200px] lg:h-[50px]" alt="Logo" />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-10">
        <ul className="flex justify-center items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="w-[80px] h-[50px] flex justify-center items-center">
              <Link
                to={item.url}
                className="relative text-[15px] font-bubbler font-bold hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center md:pr-[100px] pr-[20px]">
        {/* Burger Icon */}
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4 }}
          className="absolute top-[60px] right-0 w-full bg-gray-100 z-50">
          <ul className="flex flex-col items-center py-4 bg-gray-200">
            {navItems.map((item) => (
              <li key={item.id} className="py-2 w-full text-center">
                <Link
                  to={item.url}
                  className="relative text-[15px] font-bubbler font-bold hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"
                  onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
