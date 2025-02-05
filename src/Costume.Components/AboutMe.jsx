import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from "../assets/AboutMe-Imgs/1.png";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });

  return (
    <motion.div 
      ref={sectionRef}
      className="w-full py-20 relative overflow-hidden text-white px-6 md:px-16 "
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Background Circles Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[15px] h-[15px] md:w-[20px] md:h-[20px] rounded-full bg-[#d20072] opacity-40 shadow-lg shadow-[#ff088e]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.8, scale: 1 } : {}}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="flex flex-col w-[90%] md:w-[80%] justify-center items-center m-auto relative z-10">
        {/* Section Heading */}
        <motion.h1 
          className="font-sans font-semibold text-[28px] md:text-[32px] text-[#d20072] border-b-2 border-[#d20072] py-2 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          ABOUT ME
        </motion.h1>
        
        {/* Intro Text */}
        <motion.p 
          className="text-center mt-4 w-full md:w-[70%] text-gray-300 font-bubbler text-[12px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          Passionate about crafting elegant user interfaces, I am a front-end developer
          with an eye for detail and a drive for excellence. From designing interactive
          web applications to building smooth UI/UX experiences, I strive to create
          impactful digital solutions.
        </motion.p>

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row items-center my-10 gap-8 md:gap-12 lg:gap-16">
          {/* Image with Border Effect */}
          <div className="relative w-[220px] h-[300px] md:w-[250px] md:h-[330px]">
            <div className="absolute w-full h-full border-8 border-[#d20072] left-[15px] top-[15px] md:left-[20px] md:top-[20px] z-0"></div>
            <motion.img
              src={image}
              alt="Basirat Hamayoon"
              className="relative z-10 w-full h-full object-cover shadow-lg shadow-[#d20072] rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
          
          {/* Description */}
          <motion.div 
            className="text-left w-full md:w-[70%] max-w-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <h2 className="text-[#d20072] font-bold text-2xl font-bubbler">I'm Basirat Hamayoon</h2>
            <p className="text-gray-300 mt-3 leading-relaxed font-bubbler">
              A front-end developer and a BS IT student at the University of Agriculture, Peshawar.
              I specialize in modern web technologies and love to create user-friendly,
              responsive designs that bring ideas to life. My goal is to merge creativity
              with technical expertise to build seamless experiences for users.
            </p>
            
            {/* View CV Button */}
            <motion.a 
              href="https://drive.google.com/file/d/1fUqbchxF06Dk7EZgANQbxWf1OY5lqLQC/view?usp=sharing" 
              target="_blank"
              className="inline-block mt-5 px-4 py-2 text-[#d20072] border-2 border-[#d20072] shadow-lg hover:bg-[#d20072] hover:text-black transition duration-300 font-bubbler font-bold"
              initial={{ opacity: 0.4, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              View My CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
