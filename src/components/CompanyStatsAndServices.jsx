import React from "react";
import { motion } from "framer-motion";

export default function CompanyStatsAndServices() {
  const stats = [
    { label: "Projects Completed", value: "300+" },
    { label: "Happy Clients", value: "290+" },
    { label: "Years of Experience", value: "15+" },
    { label: "Average Project Efficiency", value: "93%" },
    { label: "Quality Inspections", value: "2,500+" },
  ];

  const services = [
    {
      title: "Architectural Design",
      desc: "Our architects craft innovative and practical designs that merge aesthetics with structural strength, ensuring every home reflects your personality and lifestyle.",
      icon: "🏗️",
    },
    {
      title: "Turnkey Construction",
      desc: "From concept to completion, we manage every aspect of your home construction, providing transparency, fixed pricing, and on-time delivery.",
      icon: "🏠",
    },
    {
      title: "Structural Engineering",
      desc: "Our engineers implement robust frameworks and cutting-edge techniques, ensuring safety, durability, and compliance with all construction standards.",
      icon: "🧱",
    },
    {
      title: "Renovation & Interiors",
      desc: "Revamp your space with our interior design and remodeling services — blending functionality with modern finishes to create inspiring living spaces.",
      icon: "🛋️",
    },
  ];

  return (
    <section className="bg-slate-100 py-16 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Building Trust. Delivering Excellence.
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We bring your dream home to life through expertise, precision, and commitment.
          Our focus on quality and innovation ensures that every project exceeds expectations.
        </p>
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition-all duration-300"
          >
            <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600">
              {stat.value}
            </p>
            <p className="text-gray-700 text-sm mt-2 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto">
        

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-start bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
            >
              <div className="text-3xl mr-4">{service.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h4>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
       
      </div>
    </section>
  );
}
