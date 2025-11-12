import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function SmartConstructionIntegration() {
  const [active, setActive] = useState("planning");

  const features = [
    {
      id: "planning",
      name: "Intelligent Project Planning",
      short:
        "We use modern planning tools to ensure resource efficiency and timely delivery for every project.",
      points: [
        "Real-time schedule tracking and team coordination.",
        "Smart material allocation to reduce waste.",
        "Accurate budgeting with fixed per sq. ft. pricing.",
      ],
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "quality",
      name: "Quality & Safety Excellence",
      short:
        "Every site undergoes 440+ quality checks and safety inspections to maintain industry-leading standards.",
      points: [
        "Certified engineers supervising each project stage.",
        "Drone-assisted site inspections for accuracy.",
        "Digital quality assurance reports for transparency.",
      ],
      image:
        "https://images.unsplash.com/photo-1581090469600-1e7e3f9c9b48?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "execution",
      name: "Smart Site Execution",
      short:
        "Our advanced tools ensure smooth site execution, manpower efficiency, and material accuracy.",
      points: [
        "Live site dashboards accessible to clients.",
        "IoT sensors monitor site safety and temperature.",
        "AI-supported progress reports and checklists.",
      ],
      image:
        "https://images.unsplash.com/photo-1581091012184-7d1f0cb9b035?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "delivery",
      name: "On-Time Project Delivery",
      short:
        "We guarantee timely delivery backed by predictive tracking and automated progress analysis.",
      points: [
        "Dedicated project managers monitoring milestones.",
        "Instant client updates through dashboards.",
        "10-year structural warranty post completion.",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a67b33d5a?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "sustainability",
      name: "Sustainable Construction",
      short:
        "We’re committed to eco-friendly practices that reduce environmental impact and energy consumption.",
      points: [
        "Rainwater harvesting and solar-ready roofs.",
        "Green-certified materials and eco insulation.",
        "Waste reduction through smart material management.",
      ],
      image:
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const selected = features.find((f) => f.id === active) || features[0];

  return (
    <main className="bg-gray-50 text-gray-900">
      <Helmet>
        <title>Smart Construction Integration | Beena Construction</title>
        <meta
          name="description"
          content="Explore Thikedaar’s Smart Construction Integration — from intelligent planning and quality checks to sustainable site execution."
        />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-indigo-900 via-indigo-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a67b33d5a?auto=format&fit=crop&w=1920&q=80"
            alt="Construction Hero"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          >
            Smart Construction Integration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-indigo-200 max-w-3xl mx-auto text-lg"
          >
            Bringing together innovation, precision, and sustainability to redefine the modern construction experience.
          </motion.p>
          
        </div>
      </section>

      {/* ================= CORE STACK SECTION ================= */}
      <section
        id="stack"
        className="py-20 bg-gray-50 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
      >
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar */}
          <aside className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">
              Our Smart Construction Framework
            </h2>
            <p className="text-gray-600 mb-6">
              Each stage of construction is carefully monitored, blending human
              expertise with intelligent systems to ensure excellence and transparency.
            </p>

            <div className="space-y-3">
              {features.map((f) => (
                <motion.button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  whileHover={{ scale: 1.02 }}
                  className={`w-full text-left px-4 py-3 rounded-lg border ${
                    active === f.id
                      ? "border-indigo-600 bg-indigo-50 text-indigo-800"
                      : "border-gray-200 bg-white hover:border-indigo-300"
                  } transition-all`}
                >
                  <div className="font-semibold">{f.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{f.short}</div>
                </motion.button>
              ))}
            </div>
          </aside>

          {/* Right Content Panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {selected.name}
                </h3>
                <p className="text-gray-600 mb-4">{selected.short}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {selected.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>

              <div>
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="rounded-xl w-full object-cover shadow-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

 
      <section className="py-16 bg-indigo-700 text-white text-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "300+", label: "Projects Delivered" },
            { value: "25+", label: "Cities Covered" },
            { value: "98%", label: "On-Time Delivery" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-white/10 rounded-xl">
              <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
              <p className="text-indigo-200 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Build Smarter. Build With Us.
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          From concept to completion, Beena Construction ensures a
          seamless, transparent, and innovative construction journey.
        </p>
        
      </section>
    </main>
  );
}
