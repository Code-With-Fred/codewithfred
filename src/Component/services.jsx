import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLaptopCode, FaMobileAlt, FaServer, FaPaintBrush, FaCode, FaCogs } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />, title: "Web Development", desc: "Full-stack development with modern frameworks and technologies."
    },
    {
      icon: <FaMobileAlt />, title: "Mobile Development", desc: "Cross-platform mobile apps using Flutter and React Native."
    },
    {
      icon: <FaServer />, title: "Backend Engineering", desc: "Node.js, Express, MongoDB, and cloud deployment."
    },
    {
      icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Pixel-perfect, user-centered interface and experience design."
    },
    {
      icon: <FaCode />, title: "Smart Contracts", desc: "Secure, gas-optimized smart contracts for Web3 dApps."
    },
    {
      icon: <FaCogs />, title: "Automation Scripting", desc: "Task automation using Python, Shell, and backend logic."
    },
  ];

  return (
    <section className="p-8 md:p-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Services I Offer</h2>
        <p className="text-lg text-gray-300">
          Fred Douglas' Craft: Where code meets art, and innovation takes flight.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="flip-card flip-hover bg-transparent h-64">
              <div className="flip-inner">
                {/* Front of Card */}
                <div className="flip-front bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                  <div className="text-5xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                    Hover to see more →
                  </p>
                </div>

                {/* Back of Card */}
                <div className="flip-back bg-slate-700 text-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm">{service.desc}</p>
                  <span className="mt-4">🔥 Let's build it</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
