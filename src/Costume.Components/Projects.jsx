import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/Projects-img/1.jpg';
import img2 from '../assets/Projects-img/2.jpg';
import img3 from '../assets/Projects-img/3.jpg';
import img4 from '../assets/Projects-img/4.jpg';
import img5 from '../assets/Projects-img/5.jpg';
import img6 from '../assets/Projects-img/6.jpg';
import img7 from '../assets/Projects-img/7.jpg';
import img8 from '../assets/Projects-img/8.jpg';
import img9 from '../assets/Projects-img/9.jpg';
import img10 from '../assets/Projects-img/10.jpg';
import img11 from '../assets/Projects-img/11.jpg';
import img12 from '../assets/Projects-img/12.jpg';
import img13 from '../assets/Projects-img/13.jpg';

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);
    
    // InView Hook for heading
    const { ref: headingRef, inView: headingInView } = useInView({
        triggerOnce: true, 
        threshold: 0.2, 
    });

    // InView Hook for cards
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true, 
        threshold: 0.2, 
    });

    // Generate Animated Circles
    const generateCircles = () => {
      const circles = [];
      for (let i = 0; i < 40; i++) {
        circles.push(
          <motion.div
            key={i}
            className="absolute w-[20px] h-[20px] rounded-full bg-[#d20072] opacity-50 shadow-xl shadow-[#ff088e]"
            initial={{ opacity: 0.3, scale: 0.2 }}
            animate={{ opacity: 0.2, scale: 0.9 }}
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

    const projectItems = [
        { id: 1, img: img1, title: 'Login UI Design', description: 'A modern and responsive login page built with HTML and CSS.', url: 'https://github.com/BasiratHamayoon/Class-Task-03.git' },
        { id: 2, img: img2, title: 'Online Bookstore', description: 'A fully responsive online bookstore with clean UI.', url: 'https://github.com/BasiratHamayoon/Class-Task-04-HTML-CSS-Responsive-Book-Store.git' },
        { id: 3, img: img3, title: 'Food Court Website', description: 'A beautiful and responsive design for a food court.', url: 'https://github.com/BasiratHamayoon/Web-Design-for-Food-Point.git' },
        { id: 4, img: img4, title: 'Coffee Ordering Site', description: 'Interactive coffee shop website with an ordering system.', url: 'https://github.com/BasiratHamayoon/Coffee-Shop-Class-Task.git' },
        { id: 5, img: img5, title: 'Theme Changer', description: 'A dynamic theme switcher using JavaScript.', url: 'https://github.com/BasiratHamayoon/task-04-Theme-Changer.git' },
        { id: 6, img: img6, title: 'React Portfolio', description: 'A personal portfolio website built using React.js.', url: 'https://github.com/BasiratHamayoon/My-Portfolio-Reactjs.git' },
        { id: 7, img: img7, title: 'Travel Exploration', description: 'A responsive website to explore travel destinations.', url: 'https://github.com/BasiratHamayoon/Explore-the-Beautiful-world-website-using-HTML-Css.git' },
        { id: 8, img: img8, title: 'Tuk Tuk Racer', description: 'An interactive racing game built with JavaScript.', url: 'https://github.com/BasiratHamayoon/Tuktuk-Racer.git' },
        { id: 9, img: img9, title: 'Basic Portfolio', description: 'A simple portfolio website using HTML, CSS, and JavaScript.', url: 'https://github.com/BasiratHamayoon/My-Portfolio-Website.git' },
        { id: 10, img: img10, title: 'Online Camera Store', description: 'An online camera shop using Bootstrap.', url: 'https://github.com/BasiratHamayoon/NAVTTIC-Bootstrap-Project.git' },
        { id: 11, img: img11, title: 'Login & Signup UI', description: 'A fully responsive login and signup page.', url: 'https://github.com/BasiratHamayoon/Login---Signup-design.git' },
        { id: 12, img: img12, title: 'Color Switcher', description: 'A JavaScript-powered dynamic color switcher.', url: 'https://github.com/BasiratHamayoon/Color-Switcher.git' },
        { id: 13, img: img13, title: 'Color Switcher', description: 'A JavaScript-powered dynamic color switcher.', url: 'https://github.com/BasiratHamayoon/Color-Switcher.git' },
    ];

    return (
        <div className='w-full py-20 relative overflow-hidden'>
             {/* Background Animated Circles */}
             {generateCircles()}
        <div ref={sectionRef} className="w-[80%] flex flex-col justify-center items-center mx-auto relative">
            {/* Animated Heading */}
            <motion.div
                ref={headingRef}
                initial={{ opacity: 0, y: -50 }} // Move from above
                animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Only animate heading
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="py-[100px] flex flex-col justify-center items-center w-[30%]"
            >
                <h1 className="font-sans font-semibold text-[28px] text-[#d20072] border-b-2 border-[#d20072] py-[8px] w-[200px] text-center">
                    My Projects
                </h1>
            </motion.div>

            {/* Animated Cards Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: sectionInView ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {projectItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                            index % 4 === 0 ? 'row-span-2' : ''
                        }`}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: sectionInView ? 1 : 0,
                            y: sectionInView ? 0 : 50,
                            scale: 1.05,
                            transition: {
                                type: 'spring',
                                stiffness: 100,
                                damping: 20,
                                delay: index * 0.2,
                            },
                        }}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                        >
                            <h1 className="text-white text-lg font-semibold border-l-4 pl-[5px]">{item.title}</h1>
                            <p className="text-gray-300 text-sm">{item.description}</p>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-[#d20072] font-bold underline"
                            >
                                View Project
                            </a>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        </div>
    );
};

export default Projects;
