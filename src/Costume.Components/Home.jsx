import React from 'react';
import profileImage from '../assets/Home-Images/pro.png';
import { motion } from 'framer-motion';

const Home = () => {
  const text = "BASIRAT HAMAYOON";
  const words = text.split(" ");
  const specification = "A FRONTEND DEVELOPER";
  const specificationWords = specification.split(" ");

  // Circle Animation Settings
  const generateCircles = () => {
    const circles = [];
    for (let i = 0; i < 5; i++) {
      circles.push(
        <motion.div
          key={i}
          className="absolute w-[20px] h-[20px] rounded-full bg-[#d20072] opacity-50"
          initial={{ bottom: '-50px', opacity: 0 }}
          animate={{ bottom: '100%', opacity: 1 }}
          transition={{
            delay: i * 0.5,
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{ left: `${Math.random() * 80 + 10}%`, animationTimingFunction: 'ease-in-out' }}
        />
      );
    }
    return circles;
  };

  return (
    <div className="flex justify-center items-center w-full lg:px-10 px-[40px]">
      <div className="lg:h-[450px] w-full bg-cover bg-center grid lg:w-[80%] lg:grid-cols-[70%_30%] gap-10 
      bg-[#121313] mt-[120px] px-10 justify-center items-center relative">
        {/* Circle Animation */}
        {generateCircles()}

        {/* Main Content */}
        <div className="flex flex-col justify-center items-start pl-[20px] z-0">
          {/* Greeting and Name */}
          <motion.h1
            className="font-handwriting text-[18px] text-[#d20072]" // Green color
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Hello, I am
          </motion.h1>

          <motion.h1
            className="text-[30px] font-bold font-bubbler text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }} // Delay for each word
                style={{ display: "inline-block", marginRight: "0.5rem" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Job Title */}
          <motion.h1
            className="font-bold lg:text-[30px] md:text-[27px] text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            {specificationWords.map((word, wordIndex) => (
              <span key={wordIndex} style={{ marginRight: "20px" }}>
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: wordIndex * 0.6 + letterIndex * 0.1, // Delay for each word and letter
                      duration: 0.3,
                    }}
                    style={{
                      display: "inline-block",
                      color: (word.toLowerCase() === "a" || word.toLowerCase() === "developer") ? "#d20072 " : "", // Green for "A" and "developer"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Introduction Paragraph */}
          <motion.p
            className="text-[12px] font-bubbler font-semibold my-[5px] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.5 }}
          >
            I am a student of Bachelor in Information Technology and Advance Web Application & Mobile Application Development. I consider myself a responsible and orderly person. I am looking forward to my first work experience.
          </motion.p>

          {/* Projects Button */}
          <motion.button
            className=" font-bold font-bubbler  px-[10px] py-[5px] my-[20px] rounded-md text-[16px] bg-[#d20072] text-black hover:bg-[#d20072]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            <a href="https://github.com/BasiratHamayoon?tab=overview&from=2024-01-01&to=2024-01-21" target="_blank">
              View My Projects
            </a>
          </motion.button>
        </div>

        {/* Profile Image with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // Initially hidden and small
          animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and size
          transition={{ delay: 2.5, duration: 1 }} // Delay and duration of the animation
        >
          <div className="w-[250px] h-[180px] flex justify-center items-center m-auto bg-[#d20072]
          rounded-full z-0">
            <div className=' bg-[#d20072] relative mt-[-50px] w-[250px] h-[200px] ml-[-100px] rounded-full'>
              <motion.div
                animate={{ x: [0, 100, 0] }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                <img src={profileImage} alt="Profile Image"
                  className="absolute mt-[-35px] w-[350px] ml-[50px]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
