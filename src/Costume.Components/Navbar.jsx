import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', title: 'Home' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'about', title: 'About Me' },
    { id: 'contact', title: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center py-[10px] w-full sm:px-[10px] px-[38px]">
      <h1 className='font-handwriting text-[#d20072] lg:pl-[143px] md:pl-[70px] pl-[60px] lg:font-bold md:font-bold lg:text-[22px] md:text-[22px] text-[20px]'>
        B@$|rat Hamay00n
      </h1>
      
      <div className="hidden lg:flex gap-10">
        <ul className="flex justify-center items-center">
          {navItems.map((item) => (
            <li key={item.id} className="w-[80px] h-[50px] flex justify-center items-center">
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative text-[15px] text-white font-bubbler font-bold hover:text-[#d20072] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#d20072] after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden flex items-center md:pr-[100px] pr-[20px]">
        <button onClick={toggleMenu} className="text-2xl text-[#d20072] z-20">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4 }}
          className="absolute top-0 right-0 w-[50%] h-screen bg-[#242223] z-10"
        >
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item.id} className="py-2 w-full text-center">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-[15px] text-white font-bubbler font-bold hover:text-[#d20072] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#d20072] after:transition-all after:duration-200 hover:after:w-full"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
