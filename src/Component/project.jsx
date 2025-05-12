import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Cryptop tracker",
    desc: "A React-based viewer to fetch and display the current price of cryptocurrencies.",
    tech: ["React", "Tailwind"],
    live: "#",
    code: "#"
  },
  {
    title: "Lost & Found Backend",
    desc: "Node.js + MongoDB backend for campus lost and found system.",
    tech: ["Node.js", "Express", "MongoDB"],
    live: "#",
    code: "#"
  },
  {
    title: "Weather App",
    desc: "A simple weather checker using API integration.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    live: "#",
    code: "#"
  },
  {
    title: "Fintech App",
    desc: "A simple transactional website.",
    tech: ["react", "tailwind css", "node js"],
    live: "#",
    code: "#"
  },
  {
    title: "Fintech App",
    desc: "A simple transactional website.",
    tech: ["react", "tailwind css", "node js"],
    live: "#",
    code: "#"
  },
  {
    title: "Fintech App",
    desc: "A simple transactional website.",
    tech: ["react", "tailwind css", "node js"],
    live: "#", 
    code: "#"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ProjectSection = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Projects
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400">
          A collection of my wildest builds and tech madness.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 hover:rotate-1"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-black text-white dark:bg-white dark:text-black text-xs px-2 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center gap-1">
                Live <FaExternalLinkAlt />
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:underline text-sm flex items-center gap-1">
                Code <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
