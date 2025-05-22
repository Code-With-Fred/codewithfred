import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ formData });
    const BaseURL = "http://localhost:5050/api";

    try {
      const res = await axios.post(`${BaseURL}/contact`, formData);
      console.log({ res });

      toast.success(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-300 mb-8">
          Want to work together or ask something? Drop a message 👇
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 bg-gray-800 rounded-lg"
            required
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-4 bg-gray-800 rounded-lg"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="mt-12 flex justify-center gap-8 text-3xl">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition transform hover:-translate-y-1"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/code-with-fred"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition transform hover:-translate-y-1"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ezefavourchimereze/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition transform hover:-translate-y-1"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://medium.com/@ezefavourchimereze"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition transform hover:-translate-y-1"
        >
          <FaMedium />
        </a>
        <a
          href="https://www.facebook.com/ezefavourchimereze/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition transform hover:-translate-y-1"
        >
          <FaFacebook />
        </a>
      </div>
      <div className="absolute -top-10 left-0 w-40 h-40 bg-indigo-600 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
    </section>
  );
};

export default Contact;
