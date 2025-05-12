import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaSass, FaFigma, FaCss3 } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, title: "HTML5" },
    { icon: <FaCss3Alt />, title: "CSS3" },
    { icon: <FaJs />, title: "JavaScript" },
    { icon: <FaReact />, title: "React" },
    { icon: <FaNodeJs />, title: "Node.js" },
    { icon: <FaBootstrap />, title: "Bootstrap" },
    { icon: <FaGitAlt />, title: "Git" },
    { icon: <FaSass />, title: "Tailwind" },
  ];

  return (
    <section className="p-8 md:p-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills & Tools</h2>
        <p className="text-lg text-gray-300">The tools that make the magic happen.</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card p-6 bg-transparent rounded-xl shadow-lg hover:bg-gradient-to-r from-blue-500 to-indigo-600 transform transition-all duration-300 hover:scale-105"
          >
            <div className="icon text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-bold text-white">{skill.title}</h3>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <div className="tools mt-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Tools I Use</h3>
        <div className="flex justify-center gap-10">
          <div className="tool-card text-4xl">
            <FaReact />
          </div>
          <div className="tool-card text-4xl">
            <FaNodeJs />
          </div>
          <div className="tool-card text-4xl">
            <FaBootstrap />
          </div>
          <div className="tool-card text-4xl">
            <FaSass />
          </div>
          <div className="tool-card text-4xl">
            <FaHtml5 />
          </div>
          <div className="tool-card text-4xl">
            <FaFigma />
          </div>
          <div className="tool-card text-4xl">
            <FaCss3 />
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="text-center justify-center flex mt-10">
        <a href="file:///C:/Users/Hp/Documents/RESUME%20FULLSTACK%20DEVELOPER.pdf" download>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-105 flex items-center justify-center">
            <FiDownload className="mr-2" />
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Skills;
