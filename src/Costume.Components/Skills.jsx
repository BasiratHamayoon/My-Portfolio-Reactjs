import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { AiOutlinePython } from "react-icons/ai";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

// Updated services data with icons
const servicesData = [
  {
    title: "HTML",
    description: "Craft structured and semantic web pages using the foundation of modern web development. It forms the backbone of every website, ensuring accessibility, SEO-friendliness, and proper document structure for seamless rendering across different devices and browsers.",
    icon: <AiOutlineHtml5 />
  },
  {
    title: "CSS",
    description: "Style websites with precision, ensuring responsive and visually appealing user experiences. It allows developers to implement animations, layout designs, and media queries, ensuring consistent aesthetics and fluid user interfaces across multiple screen sizes."
,
    icon: <TbBrandCss3 />
  },
  {
    title: "TAILWIND CSS",
    description: "Speed up UI development with a utility-first CSS framework that enhances design flexibility. Tailwind CSS removes the need for writing custom styles by providing pre-defined utility classes, making it efficient for creating modern, mobile-friendly interfaces.",
    icon: <RiTailwindCssFill />
  },
  {
    title: "BOOTSTRAP",
    description:"Build mobile-friendly and visually consistent web applications using a powerful CSS framework. Bootstrap comes with a responsive grid system, extensive pre-styled components, and JavaScript plugins that streamline the front-end development process.",
    icon: <RiBootstrapLine />
  },
  {
    title: "JAVASCRIPT",
    description: "Enhance web interactivity with dynamic and versatile programming capabilities. JavaScript is the core technology behind interactive UI elements, asynchronous data fetching, event handling, and modern frameworks that power single-page applications (SPAs) and progressive web apps (PWAs).",
    icon: <RiJavascriptLine />
  },
  {
    title: "REACT JS",
    description: "Develop high-performance and scalable user interfaces using a component-based JavaScript library. React simplifies UI development by utilizing a virtual DOM, state management, and reusable components, making it ideal for complex front-end applications."
,
    icon: <IoLogoReact />
  },
  {
    title: "JQUERY",
    description: "Simplify DOM manipulation and event handling with a fast and lightweight JavaScript library. jQuery provides an easy-to-use syntax for traversing, manipulating, and animating elements, making it useful for legacy projects and rapid front-end prototyping."
,
    icon: <DiJqueryLogo />
  },
  {
    title: "PYTHON",
    description: "Utilize a powerful and versatile programming language for web, data science, and automation. Python is known for its readability, vast ecosystem of libraries, and applications in machine learning, AI, cybersecurity, and backend web development with frameworks like Django and Flask.",
    icon: <AiOutlinePython />
  },
  {
    title: "C/C++",
    description: "Build high-performance applications with low-level memory control and efficient execution. C/C++ are widely used in system programming, game development, and embedded systems, offering fine-grained resource management and optimized performance for hardware-intensive applications.",
    icon: <TbBrandCpp />
  },
  {
    title: "JAVA",
    description: "Create robust, scalable, and cross-platform applications using an object-oriented approach. Java powers enterprise-level applications, Android development, cloud computing, and large-scale distributed systems with its powerful runtime environment and multi-threading capabilities.",
    icon: <FaJava />
  },
];


const Skills = () => {
  // Use the `useInView` hook to detect when the component is visible
  const [ref, inView] = useInView({
    threshold: 0.6, // Trigger animation when 60% of the component is visible
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <div ref={ref} className="w-full py-20">
      {/* Trigger animations based on `inView` */}
      <div className="border-b border-t w-[50%] m-auto my-[30px]">
        <h2 className="text-[35px] md:text-[24px] font-sans font-semibold text-center m-auto">
          My Skills
        </h2>
        <p className="text-[14px] text-gray-600 font-bubbler m-auto text-center">What I can offer</p>
        </div>

      {/* Services items */}
      <div className="w-[70%] grid lg:grid-cols-2 grid-cols-1 m-auto gap-10 px-[10px]
      justify-center items-center">

        {servicesData.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center px-[2]
          py-[20px]">
            <div className="text-[70px] text-gray-800 pb-[60px]">{item.icon}</div>


            <div className="flex flex-col justify-center items-center border-t text-justify">
            <h1 className="font-sanss text-[25px] absolute mt-[-150px] [@media(max-width:556px)]:mt-[-180px] bg-white
            px-[20px]">{item.title}</h1>
            <p className="py-[30px] font-bubbler text-[14px] text-center">{item.description}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
