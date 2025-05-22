import React, { useState, useEffect } from "react";
import "../App.css";
import me from "../assets/IMG_E9079.JPG";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import logo from "../assets/logo.jpg";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-slate-950 text-black dark:text-white w-full min-h-screen font-sans">
      {/* Toggle */}
      <div className="flex justify-end px-6 py-4">
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`w-20 h-10 flex items-center ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          } rounded-full p-1 cursor-pointer transition`}
        >
          <motion.div
            className="w-8 h-8 bg-white rounded-full shadow-md"
            layout
            transition={spring}
            style={{ x: darkMode ? 40 : 0 }}
          />
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-10 rounded-full"
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-center gap-6 font-semibold text-lg text-black dark:text-gray-200">
              {["Home", "About", "Services", "Projects", "Skill", "Contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="hover:text-sky-400 dark:hover:text-sky-300 transition duration-200"
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div
              className="md:hidden flex items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="text-black dark:text-white text-2xl">☰</span>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="md:hidden flex flex-col items-center gap-4 py-4 font-semibold text-lg text-black dark:text-gray-200">
              {["Home", "About", "Services", "Projects", "Skill", "Contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="hover:text-sky-400 dark:hover:text-sky-300 transition duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center md:text-left flex flex-col md:flex-row items-center justify-center gap-12 p-10 dark:bg-gray-900 bg-gray-100 min-h-[80vh]">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
            <Typewriter
              options={{
                strings: [
                  "Hey there, welcome to my world.",
                  "I'm Fred Douglas.",
                  "Full Stack Developer.",
                  "Technical Writer.",
                  "Lifelong Learner.",
                  "Tech Instructor."
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30
              }}
            />
          </h1>
          <p className="text-lg mb-6 leading-relaxed">
            I'm a digital craftsman who builds immersive web experiences and writes about technology in a way anyone can understand. Passionate about clean code and strong coffee.
          </p>
          <button className="bg-blue-800 hover:bg-blue-700 text-white rounded-2xl px-6 py-3 transition duration-300">
            Explore my projects
          </button>

          
        </div>

        <div>
          <img
            src={me}
            alt="Fred Douglas portrait"
            className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-blue-800 dark:border-sky-400"
          />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
