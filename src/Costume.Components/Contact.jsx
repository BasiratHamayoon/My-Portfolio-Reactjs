import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });
  const [activeSection, setActiveSection] = useState("Contact");

  const navItems = [
    { id: "home", title: "Home" },
    { id: "skills", title: "Services" },
    { id: "projects", title: "Projects" },
    { id: "about", title: "About Me" },
    { id: "contact", title: "Contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <motion.div
      ref={sectionRef}
      id="Contact"
      className="w-full py-20 relative overflow-hidden text-black px-6 md:px-16 bg-[#d20072]/70 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Layered Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#d20072] to-transparent opacity-50 z-0"></div>

      {/* Section Heading */}
      <motion.h1
        className="relative font-bubbler font-semibold text-[28px] md:text-[32px] text-black border-b-2 border-black py-2 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        CONTACT ME
      </motion.h1>

      {/* Navigation Links */}
      <div className="flex justify-center mt-6 gap-6 relative z-10">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.id)}
            className={`text-black font-bubbler font-bold text-lg hover:text-gray-300 transition ${
              activeSection === item.id ? "underline" : ""
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center mt-10 relative z-10">
        <motion.p
          className="text-black font-bold font-bubbler text-center text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Feel free to reach out to me through any of the platforms below.
        </motion.p>

        <div className="flex gap-6 mt-6">
          {[
            { href: "https://github.com/BasiratHamayoon", icon: <FaGithub /> },
            { href: "https://www.linkedin.com/in/basirat-humayun-a8083a259", icon: <FaLinkedin /> },
            { href: "https://mail.google.com/mail/u/0", icon: <FaEnvelope /> },
            { href: "https://www.instagram.com/basirat_humayun2", icon: <FaInstagram /> },
            { href: "https://www.facebook.com/share/15t4ktM36f/", icon: <FaFacebook /> },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-3xl hover:text-gray-300 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-10 text-white text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p>© 2025 Basirat Hamayoon. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
