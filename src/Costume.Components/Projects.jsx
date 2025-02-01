import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/Projects-img/p1.png';
import img2 from '../assets/Projects-img/p2.png';
import img3 from '../assets/Projects-img/p3.png';
import img4 from '../assets/Projects-img/p4.png';

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const projectItems = [
        {
            id: 1,
            img: img1,
            title: 'Portfolio Website in React.js',
            description: 'A fully responsive portfolio website built with React.js, showcasing dynamic components, smooth navigation, and modern UI design.',
            url: 'https://github.com/BasiratHamayoon/My-Portfolio-Reactjs.git'
        },
        {
            id: 2,
            img: img2,
            title: 'Tuk Tuk Racer',
            description: 'A thrilling 2D racing game developed with JavaScript and HTML Canvas. Features real physics and smooth gameplay.',
            url: 'https://github.com/BasiratHamayoon/Tuktuk-Racer.git'
        },
        {
            id: 3,
            img: img3,
            title: 'Portfolio Website Using JS',
            description: 'A static portfolio website with smooth animations, interactive UI, and a fully responsive layout for personal branding.',
            url: 'https://github.com/BasiratHamayoon/My-Portfolio-Website.git'
        },
        {
            id: 4,
            img: img4,
            title: 'Coffee Ordering Website',
            description: 'An interactive coffee shop website allowing users to browse, customize, and order their favorite coffee online.',
            url: 'https://github.com/BasiratHamayoon/Coffee-Shop-Class-Task.git'
        }
    ];

    return (
        <motion.div 
            className='relative w-full py-20 overflow-hidden' 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {/* Top Background Animation */}
            <motion.div 
                className='absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[300px] bg-gray-300 rounded-b-full'
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            />
            
            {/* Bottom Left Background Animation */}
            <motion.div 
                className='absolute bottom-0 left-[-10%] w-[500px] h-[300px] bg-gray-300 rounded-t-full'
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
            />
            
            <div className='relative flex flex-col w-[80%] justify-center items-center m-auto'>
                <h1 className='text-[30px] font-sans border-y w-[40%] text-center'>My Projects</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-6 my-[50px] px-[10px]'>
                    {projectItems.map((item) => (
                        <motion.div 
                        className={`relative flex flex-col justify-center items-center px-[10px] py-10 shadow-md gap-5 rounded-lg bg-gray-400 transition-all duration-300 cursor-pointer text-white
                            ${hoveredId === item.id ? 'z-10' : 'z-0'}`}
                        key={item.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.3 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        animate={{
                            scale: hoveredId === item.id ? 1.2 : 1,
                            boxShadow: hoveredId === item.id ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
                            transition: { duration: 0.2 }
                        }}
                    >
                            <div className='h-[150px] flex justify-center items-center w-full'>
                                <img src={item.img} className='w-[250px] h-[150px] object-cover' alt={item.title} />
                            </div>
                            <div className='flex flex-col justify-center items-start gap-2 px-[5px] h-[150px]'>
                                <h1 className='text-[20px] text-wrap font-bold font-bubbler border-l-4 pl-2 border-white'>{item.title}</h1>
                                <p className='text-[15px] font-bubbler'>{item.description}</p>
                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: 'white', color: 'gray' }}
                                    className='px-[10px] py-[5px] border-2 border-white m-auto rounded-md text-[18px] font-bold font-bubbler'
                                >
                                    <a href={item.url} target='_blank' rel='noopener noreferrer'>View Project</a>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
