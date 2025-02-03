import React from 'react'
import { motion } from "framer-motion";

const AboutMe = () => {

    const generateCircles = () => {
        const circles = [];
        for (let i = 0; i < 30; i++) {
          circles.push(
            <motion.div
              key={i}
              className="absolute w-[20px] h-[20px] rounded-full bg-[#d20072] opacity-50 shadow-xl shadow-[#ff088e]"
              initial={{ opacity: 0.3, scale: 0.2 }}
              animate={{ opacity: 1, scale: 0.6 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
              style={{
                top: `${Math.random() * 100}%`, // Random vertical position
                left: `${Math.random() * 100}%`, // Random horizontal position on left side (0 to 50%)
              }}
            />
          );
        }
        return circles;
      };
  return (
    <div className=''>

        {/* Background Animated Circles */}
        {generateCircles()}
        <div className=''>
            <h1 className='text-[#d20072]'>ABOUT ME</h1>
        </div>
        
    </div>
  )
}

export default AboutMe
