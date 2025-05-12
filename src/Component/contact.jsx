import React from 'react';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin, FaMedium, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 py-16 px-6 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-300 mb-10">Whether it’s a project, question, or vibe, drop it below👇</p>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          ></textarea>

          <button
            type="submit"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
          >
            <FaEnvelope className="mr-2" />
            Send Message
          </button>
        </form>

        {/* Socials */}
        <div className="mt-12 flex justify-center gap-8 text-3xl">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition transform hover:-translate-y-1">
            <FaTwitter />
          </a>
          <a href="https://github.com/code-with-fred" target="_blank" rel="noopener noreferrer" className="hover:text-white transition transform hover:-translate-y-1">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ezefavourchimereze/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:-translate-y-1">
            <FaLinkedin />
          </a>
          <a href="https://www.medium.com/in/ezefavourchimereze/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:-translate-y-1">
            <FaMedium />
          </a>
          <a href="https://www.facebook.com/in/ezefavourchimereze/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:-translate-y-1">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute -top-10 left-0 w-40 h-40 bg-indigo-600 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
    </section>
  );
};

export default Contact;
