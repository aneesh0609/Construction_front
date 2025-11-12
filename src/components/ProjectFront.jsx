import React from "react";
import { motion } from "framer-motion";

export default function ProjectShowcaseTestimonial() {
  return (
    <section className="relative bg-gray-950 text-white py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091012184-7d1f0cb9b035?auto=format&fit=crop&w=1920&q=80"
          alt="Project Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-indigo-950/80"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT — Project Data Card */}
        <motion.div
          className="relative bg-gray-900 border border-gray-800 p-10 rounded-3xl shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Skyline Commercial Tower — Qatar
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Our premium commercial complex featuring 28 floors, green-certified
            construction, and an integrated AI-powered building management
            system — completed 3 months ahead of schedule.
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-800 rounded-2xl p-4 text-center shadow-md">
              <p className="text-3xl font-bold text-indigo-400">3.2M+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Sq.Ft Built
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 text-center shadow-md">
              <p className="text-3xl font-bold text-indigo-400">28</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Floors Completed
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 text-center shadow-md">
              <p className="text-3xl font-bold text-indigo-400">11%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Energy Saved
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 text-center shadow-md">
              <p className="text-3xl font-bold text-indigo-400">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Client Satisfaction
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-2">Project Completion</p>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-indigo-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2 }}
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Testimonial Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <h2 className="text-4xl font-extrabold leading-snug mb-6 text-white">
              “Delivering the impossible — transforming skylines with precision
              and passion.”
            </h2>
            <p className="text-gray-300 max-w-xl leading-relaxed">
              The Skyline Tower project marked a new milestone for Thikedaar
              Construction, proving our ability to combine futuristic
              architecture, sustainable design, and unmatched efficiency. Our
              in-house project management AI reduced construction time by 18%.
            </p>
            <p className="text-indigo-400 mt-4 font-semibold">
              — Project Division, Beena Construction Pvt. Ltd.
            </p>
          </div>

          {/* Floating Stats */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { label: "Awards Won", value: "07" },
              { label: "Safety Audits Passed", value: "54" },
              { label: "Green Rating", value: "LEED Gold" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex-1 min-w-[150px] bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-3xl font-bold text-indigo-400">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
