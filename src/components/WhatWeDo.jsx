import { useState } from "react";

const servicesData = [
  {
    title: "Buildings",
    image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/21/a4/c2/6f/6b/v1_E10/E103QUGP.jpg?w=500&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=91d8c7372febfa63eb1c4ec1e51b8d0e14424ee4dcef5c3359eff17f049011a7",
    description: [
      "We specialize in designing and constructing modern residential, commercial, and high-rise buildings. Our expertise ensures every project is delivered with the highest standards of quality, safety, and aesthetics. We focus on creating spaces that are not only functional but also architecturally impressive and sustainable.",
      "Modern Architectural Design: Innovative and aesthetically appealing designs tailored to client needs.",
      "Structural Integrity: Use of advanced engineering techniques and high-quality materials to ensure durability and safety.",
      "Energy Efficiency: Implementation of green building practices, sustainable materials, and energy-efficient systems.",
      "Project Management Excellence: Timely execution with meticulous planning, resource allocation, and monitoring.",
    ],
  },
  {
    title: "Civil Infrastructure",
    image: "https://img.freepik.com/premium-photo/construction-site-busy-operate-beginning-building-new-complex-infrastructure-project_35927-104.jpg",
    description: [
      "Our civil infrastructure division specializes in the design, construction, and maintenance of essential urban and regional facilities, ensuring that every project contributes to long-term economic growth and public well-being. We focus on delivering robust, safe, and sustainable infrastructure solutions that enhance connectivity and improve the quality of life for communities.",
      "We use cutting-edge engineering techniques and high-quality materials to ensure durability and functionality.",
      "Contributing to sustainable city growth and enhanced public infrastructure.",
      "Urban Development Projects: Comprehensive urban planning and execution, including streetscapes, drainage systems, parks, and public amenities, aimed at sustainable city growth.",
      "Quality and Safety Compliance: Strict adherence to engineering standards, safety regulations, and environmental guidelines to ensure each project meets the highest benchmarks."
    ],
  },
  {
    title: "Heavy Industrial",
    image: "https://img.freepik.com/free-photo/heavy-machinery-used-construction-industry-engineering_23-2151307800.jpg?semt=ais_hybrid&w=740",
    description: [
      "Our heavy industrial division specializes in the planning, construction, and commissioning of large-scale industrial facilities, including factories, power plants, warehouses, and manufacturing hubs. We focus on delivering projects that meet the highest standards of safety, efficiency, and operational excellence, ensuring that industrial operations run smoothly and sustainably.",
      "Safety, precision, and regulatory compliance are the core of every industrial project.",
      "Factories and Production Facilities: Design and construction of modern manufacturing plants tailored to client-specific production processes, ensuring workflow optimization and scalability.",
      "We leverage advanced equipment and skilled workforce to ensure successful project delivery.",
    ],
  },
  {
    title: "Special Projects",
    image: "https://img.freepik.com/free-photo/people-working-together-as-team_23-2149366692.jpg",
    description: [
      "We specialize in handling a wide range of unique construction projects, from personal luxury homes and renovations to landmark structures.",
      "We provide innovative solutions to bring complex designs to life.",
      "Renovations & Upgrades: Transforming existing spaces into modern, functional, and visually striking environments while maintaining structural integrity.",
      "Personal Homes: Designing and building custom residences tailored to individual lifestyles, combining comfort, functionality, and aesthetic appeal.",
      "Maintaining quality, safety, and aesthetic excellence throughout every project.",
    ],
  },
];

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState("Buildings");

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">What We Do</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          We have a vision for the future of construction. Explore our expertise across different sectors.
        </p>

        {/* Tabs Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {servicesData.map((service) => (
            <button
              key={service.title}
              onClick={() => setActiveTab(service.title)}
              className={`px-4 py-2 rounded font-medium transition border-2 ${
                activeTab === service.title
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content */}
        {servicesData
          .filter((service) => service.title === activeTab)
          .map((service) => (
            <div key={service.title} className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-md md:text-lg">
                  {service.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
