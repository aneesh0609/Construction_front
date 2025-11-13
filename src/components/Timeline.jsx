import React from "react";
import { motion } from "framer-motion";


const timelineItems = [
  {
    title: "Technical Consultation",
    subtitle: "Work with skilled architects",
    text: `Share your vision for your dream home with our experienced architects. Leveraging advanced technology and extensive design & construction expertise, we provide tailored solutions that meet your specific requirements and budget, transforming your vision into a reality.`,
    img: "/construction/3.jpg",
  },
  {
    title: "Booking",
    subtitle: "Book your home construction with Beena Construction",
    text: `Secure your building construction project with us by paying a nominal booking fee of just 0.5% of the total construction cost. This ensures a fixed per square foot price, protecting you from any fluctuations until project completion. Once booked, you’ll receive an Order ID and gain access to a cutting-edge project dashboard, where you can monitor progress and receive regular updates from our skilled building construction team.`,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Design and Planning",
    subtitle: "Bennu construction company ",
    text: `Collaborate with our highly skilled architects to design your home that reflects your personal style and functional needs. Our design process incorporates the latest technology to develop precise architectural plans, which are then handed over to our experienced Civil Engineers for Structural and MEP Drawings. Upon approval of these plans, Our AI seamlessly schedules the project and transitions it to the construction phase.`,
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Home Construction & Move-in",
    subtitle: "Building contractors",
    text: `Experience the construction of your dream home with our skilled team, utilizing state-of-the-art technology to ensure the highest standards of quality and safety. Benefit from continuous inspections with over 440+ quality checks, and stay informed with regular updates through your real-time construction project dashboard. Move into your new home with a 10-year structural warranty and optional advanced maintenance package for long-term peace of mind.`,
    img: "/construction/8.jpg",
  },
];

const containerVars = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function AnimatedTimeline() {
  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          How It Works
        </h2>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVars}
        >
          {/* center vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          <div className="space-y-12">
            {timelineItems.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  variants={itemVars}
                  className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between"
                >
                  {/* Image column */}
                  <div
                    className={`md:w-1/2 w-full md:px-6 order-1 md:order-${isLeft ? 1 : 2}`}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-lg w-full">
                      <img
                        src={item.img}
                        alt={`${item.title} illustration`}
                        className="w-full h-56 md:h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* timeline content */}
                  <div className={`md:w-1/2 w-full md:px-6 mt-6 md:mt-0 order-2 md:order-${isLeft ? 2 : 1}`}>
                    <div className="relative md:pl-8 md:pr-8">
                      {/* Connector dot on center line for md+ screens */}
                      <div className="hidden md:block absolute -left-8 top-6 w-0 flex items-center justify-center">
                        <div className="relative">
                          <span className="inline-block bg-white border-4 border-indigo-500 rounded-full w-6 h-6 shadow" />
                          <span className="absolute -left-2 -top-2 w-10 h-10 rounded-full opacity-10 bg-indigo-500 blur-md"></span>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-1 text-sm text-indigo-600 font-medium">{item.subtitle}</p>
                        <p className="mt-4 text-gray-600 leading-relaxed text-sm">{item.text}</p>

                        <div className="mt-4 flex items-center gap-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium">
                            Step {idx + 1}
                          </span>
                    
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
