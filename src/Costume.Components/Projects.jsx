import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const projectItems = [
        {
            id: 1,
            img: img1,
            title: 'LogIn Design',
            description: 'A Responsive LOGIN Design using HTML and CSS',
            url: 'https://github.com/BasiratHamayoon/Class-Task-03.git'
        },
        
        {
            id: 2,
            img: img2,
            title: 'Online Book Store',
            description: 'A Responsive Online book store using HTML and Css.',
            url: 'https://github.com/BasiratHamayoon/Class-Task-04-HTML-CSS-Responsive-Book-Store.git'
        },
        {
            id: 3,
            img: img3,
            title: 'Food Court',
            description: 'Responsive design for a food court using HTML and CSS',
            url: 'https://github.com/BasiratHamayoon/Web-Design-for-Food-Point.git'
        },
        {
            id: 4,
            img: img4,
            title: 'Coffee Ordering Website',
            description: 'An interactive coffee shop website allowing users to browse, customize, and order their favorite coffee online.',
            url: 'https://github.com/BasiratHamayoon/Coffee-Shop-Class-Task.git'
        },
        {
            id: 5,
            img: img5,
            title: 'Dynamic Theme Changer',
            description: 'An interactive Dynamic Theme Changer using HTML CSS and JAVASCRIPT',
            url: 'https://github.com/BasiratHamayoon/task-04-Theme-Changer.git'
        },
        {
            id: 6,
            img: img6,
            title: 'Portfolio Website in React.js',
            description: 'A fully responsive portfolio website built with React.js, showcasing dynamic components, smooth navigation, and modern UI design.',
            url: 'https://github.com/BasiratHamayoon/My-Portfolio-Reactjs.git'
        },
        {
            id: 7,
            img: img7,
            title: 'Explore Beautiful world',
            description: 'An iteractive and Responsive design for Explore beautiful world travelling using HTML CSS and JAVASCRIPT.',
            url: 'https://github.com/BasiratHamayoon/Explore-the-Beautiful-world-website-using-HTML-Css.git'
        },
        {
            id: 8,
            img: img8,
            title: 'TUK TUK Racer',
            description: 'An iteractive and user friendly game using HTML CSS and JAVASCRIPT.',
            url: 'https://github.com/BasiratHamayoon/Tuktuk-Racer.git'
        },
        {
            id: 9,
            img: img9,
            title: 'Portfolio Website',
            description: 'A portfolio website using HTML CSS and JAVAscript',
            url: 'https://github.com/BasiratHamayoon/My-Portfolio-Website.git'
        },
        {
            id: 10,
            img: img10,
            title: 'Online Camera Shop',
            description: 'A Bootsrap project that is online camera shop',
            url: 'https://github.com/BasiratHamayoon/NAVTTIC-Bootstrap-Project.git'
        },
        {
            id: 11,
            img: img11,
            title: 'Login Signup Design',
            description: 'A responsive login signup design using HTML CSS and JAVASCRIPT',
            url: 'https://github.com/BasiratHamayoon/Login---Signup-design.git'
        },
        {
            id: 12,
            img: img12,
            title: 'Color Switcher',
            description: 'A Dynamic Color switcher using HTML CSS and JAVASCRIPT',
            url: 'https://github.com/BasiratHamayoon/Color-Switcher.git'
        },



    ];

    return (
       <div className='my-[30px] w-[80%] flex flex-col justify-center items-center m-auto'>
            <div className='grid grid-cols-4'>
                {projectItems.map((item, index) => (
                    <div className='text-[#d20072]'>
                        <img src={item.img} />
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <a href={item.url}>Veiw Project</a>
                    </div>
                ))}
            </div>
       </div>
    );
};

export default Projects;
