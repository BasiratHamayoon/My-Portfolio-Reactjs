import React from 'react';
import { motion } from "framer-motion";
import image from '../assets/AboutMe-Imgs/1.png';

const AboutMe = () => {
    // Function to generate animated background circles
    const generateCircles = () => {
        const circles = [];
        for (let i = 0; i < 30; i++) {
            circles.push(
                <motion.div
                    key={i}
                    className="absolute w-[20px] h-[20px] rounded-full bg-[#d20072] opacity-50 shadow-xl shadow-[#ff088e] z-[-10]"
                    initial={{ opacity: 0.3, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 0.6 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            );
        }
        return circles;
    };

    return (
        <div className="w-full py-20 relative overflow-hidden">
            {/* Background Animated Circles */}
            <div className="absolute top-0 left-0 w-full h-full -z-0">
                {generateCircles()}
            </div>

            <div className="flex flex-col w-[80%] justify-center items-center m-auto relative z-10">
                {/* Section Heading */}
                <div className="flex justify-center items-center">
                    <h1 className="font-sans font-semibold text-[28px] text-[#d20072] border-b border-t border-[#d20072] py-[8px] w-[250px] text-center">
                        ABOUT ME
                    </h1>
                </div>

                {/* Image and Border Box */}
                <div className="relative my-9">
                    {/* Border Box - Behind Image */}
                    <div className="w-[250px] h-[330px] border-8 border-[#d20072] absolute ml-[180px] z-10"></div>

                    {/* Image - On Top */}
                    <img src={image} alt="Profile" className="relative z-20" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
