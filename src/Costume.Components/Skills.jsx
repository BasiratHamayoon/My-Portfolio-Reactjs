import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandCpp } from "react-icons/tb";
import { RiJavascriptLine, RiTailwindCssFill, RiBootstrapLine } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { AiOutlinePython } from "react-icons/ai";
import { FaJava } from "react-icons/fa";

// Services data
const servicesData = [
  { title: "HTML", description: "Craft structured and semantic web pages.", icon: <AiOutlineHtml5 /> },
  { title: "CSS", description: "Style websites with precision.", icon: <TbBrandCss3 /> },
  { title: "TAILWIND CSS", description: "Speed up UI development.", icon: <RiTailwindCssFill /> },
  { title: "BOOTSTRAP", description: "Build mobile-friendly applications.", icon: <RiBootstrapLine /> },
  { title: "JAVASCRIPT", description: "Enhance web interactivity.", icon: <RiJavascriptLine /> },
  { title: "REACT JS", description: "Develop scalable UI applications.", icon: <IoLogoReact /> },
  { title: "JQUERY", description: "Simplify DOM manipulation.", icon: <DiJqueryLogo /> },
  { title: "PYTHON", description: "Utilize Python for web and automation.", icon: <AiOutlinePython /> },
  { title: "C/C++", description: "Build high-performance applications.", icon: <TbBrandCpp /> },
  { title: "JAVA", description: "Create scalable applications.", icon: <FaJava /> },
];

const Skills = () => {
  return (
    <div className="w-full py-20 relative">
     

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b border-t w-[50%] m-auto my-[30px] relative z-10"
      >
        <h2 className="text-[35px] md:text-[24px] font-sans font-semibold text-center">My Skills</h2>
        <p className="text-[14px] text-gray-600 font-bubbler text-center">What I can offer</p>
      </motion.div>

      {/* Skills Grid */}
      <div className="w-[70%] m-auto px-[10px] grid gap-10 relative z-10">
        {/* Loop through rows (each row has 2 items) */}
        {Array.from({ length: Math.ceil(servicesData.length / 2) }, (_, rowIndex) => {
          const rowItems = servicesData.slice(rowIndex * 2, rowIndex * 2 + 2);
          
          // Detect when the row is in view
          const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

          return (
            <motion.div
              ref={ref}
              key={rowIndex}
              className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.3 },
                },
              }}
            >
              {rowItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col justify-center items-center px-[2] py-[20px]"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  variants={{ visible: { opacity: 1, scale: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Icon */}
                  <div className="text-[70px] text-gray-800 pb-[60px]">{item.icon}</div>
                  
                  {/* Title & Description */}
                  <motion.div className="flex flex-col justify-center items-center border-t text-justify">
                    <h1 className="font-sans text-[25px] absolute mt-[-150px] [@media(max-width:556px)]:mt-[-180px]px-[20px]">
                      {item.title}
                    </h1>
                    <p className="py-[30px] font-bubbler text-[14px] text-center">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
