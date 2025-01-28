import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaMobileAlt, FaFileExcel } from "react-icons/fa"; // Import React Icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaPython } from "react-icons/fa"; // Additional language icons

// Updated services data with icons
const servicesData = [
  {
    title: "Web Development",
    description: "Build scalable and responsive websites using modern technologies.",
    icon: <FaLaptopCode size={40} className="text-black mb-4 group-hover:text-white" />, // Web Development Icon
    languages: [
      <FaHtml5 key="html" size={30} className="text-orange-500 mb-2" />,
      <FaCss3Alt key="css" size={30} className="text-blue-500 mb-2" />,
      <FaJs key="js" size={30} className="text-yellow-500 mb-2" />,
      <FaReact key="react" size={30} className="text-blue-600 mb-2" />,
      <FaBootstrap key="bootstrap" size={30} className="text-purple-600 mb-2" />,
    ],
  },
  {
    title: "Mobile App Development",
    description: "Create cross-platform mobile applications for Android.",
    icon: <FaMobileAlt size={40} className="text-black mb-4 group-hover:text-white" />, // Mobile App Icon
  },
  {
    title: "MS Office Service",
    description: "Efficiently manage and optimize your workflow using MS Office tools like Word, Excel, and PowerPoint.",
    icon: <FaFileExcel size={40} className="text-black mb-4 group-hover:text-white" />, // MS Office Icon
  },
];

const Services = () => {
  // Use the `useInView` hook to detect when the component is visible
  const [ref, inView] = useInView({
    threshold: 0.6, // Trigger animation when 60% of the component is visible
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <div ref={ref} className="w-full py-20">
      {/* Trigger animations based on `inView` */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when inView
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="lg:text-[40px] md:text-[30px] font-bold font-handwriting border-b w-[30%] m-auto">
          My Services
        </h2>
        <p className="text-lg text-gray-600 font-bubbler">What I can offer</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}} // Animate only when inView
            whileHover={{
              scale: 1.05,
              rotateX: 10,
              rotateY: -10,
            }} // Add 3D tilt animation on hover
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-gray-100 p-6 rounded-lg shadow-lg w-[300px] text-center flex flex-col items-center group hover:bg-[#404040] hover:text-white cursor-pointer"
          >
            <div className="flex flex-col items-center">
              {service.icon} {/* Static centered icon */}
            </div>
            <motion.div
              whileHover={{ y: -10 }} // Slide text and description upwards on hover
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-xl font-bold font-bubbler">{service.title}</h3>
              <p className="text-gray-500 mt-2 font-bubbler group-hover:text-gray-200">
                {service.description}
              </p>
              {/* Display the languages if it's Web Development */}
              {service.languages && (
                <div className="flex justify-center mt-4 gap-4">
                  {service.languages}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
