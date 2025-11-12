import React from "react";
import { motion } from "framer-motion";

export default function TestimonialWithCompanyHighlights() {
  const highlights = [
    {
      title: "Precision-Driven Execution",
      desc: "Every project follows a data-backed workflow managed by certified engineers. From soil testing to structural audits, precision guides our process at every stage.",
    },
    {
      title: "Technology at the Core",
      desc: "We employ drone mapping, 3D visualization, and AI-powered project tracking to ensure transparency, speed, and accuracy throughout construction.",
    },
    {
      title: "Sustainable Growth Vision",
      desc: "Our projects are designed with sustainability at their foundation — implementing rainwater harvesting, energy-efficient systems, and green construction methods.",
    },
  ];

  return (
    <section className="relative bg-gray-700 text-white py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
       
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-gray-900/90"></div>
      </div>

      {/* Testimonial Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-snug">
            “Every brick we lay carries the weight of our promise — quality,
            precision, and trust.”
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            With over a decade of excellence, our team blends innovation with
            craftsmanship to redefine modern construction standards across
            India.
          </p>
          <p className="text-indigo-400 font-semibold text-lg mb-16">
            — Beena Construction Pvt. Ltd.
          </p>
        </motion.div>

        {/* Professional Cards (Now Fully Inside Section) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-[#111827]/95 border border-gray-700 rounded-2xl shadow-lg hover:shadow-indigo-500/20 text-gray-200 p-10 transform transition-all duration-500 hover:-translate-y-2 backdrop-blur-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-6 border-t border-gray-700 pt-4">
                <p className="text-xs text-indigo-400 uppercase tracking-widest font-semibold">
                  Excellence | Innovation | Integrity
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
