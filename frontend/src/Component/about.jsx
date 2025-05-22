import React from "react";
import { motion } from "framer-motion";
import me from "../assets/IMG_E9079.JPG"; // replace with your image

const About = () => {
  return (
    <div
      id="About"
      className="bg-gradient-to-br from-slate-100 to-slate-300 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-sky-500"
        >
          <img
            src={me}
            alt="Fred Douglas"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5, duration: 1.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4">
            Who is <span className="text-sky-600 dark:text-sky-400">Fred Douglas?</span>
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            I’m a passionate <strong>Full Stack Developer</strong> and <strong>Technical Writer</strong>, creating clean code and meaningful content. I mix logic with creativity—writing APIs by day and breaking down complex tech into simple knowledge at night.
          </p>
          <p className="text-md italic text-gray-700 dark:text-gray-300">
            Whether it's on the frontend with React, the backend with Node.js, or deep in the blockchain trenches with Sui and Web3—I build, write, and teach.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-xl shadow-md transition duration-300"
          >
            Let’s build the future together 🚀
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
