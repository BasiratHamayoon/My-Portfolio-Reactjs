import React from 'react';
import profileImage from '../assets/Home-Images/profile-picture.png';
import { motion } from 'framer-motion';

const Home = () => {
  const text = "BASIRAT HAMAYOON";
  const words = text.split(" ");
  const specification = "A FRONTEND DEVELOPER";
  const specificationWords = specification.split(" ");

  return (
    <div className="flex justify-center items-center w-full lg:px-10 px-[40px]">
      <div className="lg:h-[90vh] w-full bg-cover bg-center grid lg:w-[70%] lg:grid-cols-[70%_30%]
       gap-4 pt-[100px]">
        <div className="flex flex-col justify-center items-start pl-[20px]">
          {/* Greeting and Name */}
          <motion.h1
            className="font-handwriting text-[18px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Hello, I am
          </motion.h1>

          <motion.h1
            className="text-[30px] font-bold font-bubbler"
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
            className="font-bold lg:text-[30px] md:text-[27px]"
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
                    style={{ display: "inline-block" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Introduction Paragraph */}
          <motion.p
            className="text-[12px] font-bubbler font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.5 }}
          >
            I am a student of Bachelor in Information Technology and Advance Web Application & Mobile Application Development. I consider myself a responsible and orderly person. I am looking forward to my first work experience.
          </motion.p>

          {/* Projects Button */}
          <motion.button
            className="border-2 font-bold font-bubbler border-black text-black px-[10px] py-[5px] my-[10px] rounded-md text-[14px] hover:bg-black hover:text-white"
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
        <div className="w-[280px] h-[280px] flex justify-center items-center m-auto">
          <motion.div
            animate={{ x: [0, 100, 0] }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <img src={profileImage} alt="Profile Image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
