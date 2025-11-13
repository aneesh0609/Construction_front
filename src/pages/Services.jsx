import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import API from "../api"; 
import AnimatedTimeline from "../components/Timeline";
import CompanyStatsAndServices from "../components/CompanyStatsAndServices";
import TestimonialWithCards from "../components/ServiceFront";

export default function Services() {
  const [services, setServices] = useState([]);

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await API.get("/services/all");
        if (data.success) setServices(data.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Bennu Construction",
      "url": "https://your-domain.com"
    },
    "serviceType": services.map(s => s.title),
    "description": "Beenu offers residential, commercial, industrial, and renovation construction services."
  };

  return (
    <>
      <Helmet>
        <title>Our Services | Bennu Constructions</title>
        <meta
          name="description"
          content="Bennu offers residential, commercial, industrial, and renovation construction services with high-quality standards."
        />
        <meta
          name="keywords"
          content="construction services, builders, civil engineering, renovation, industrial projects, commercial projects"
        />
        <link rel="canonical" href="https://your-domain.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-slate-100 ">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
          <TestimonialWithCards />
          <CompanyStatsAndServices />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mb-4"></div>
                <p className="text-slate-600 text-lg">Loading services...</p>
              </div>
            ) : (
              services.map((service, index) => (
                <motion.article
                  key={service._id}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Accent border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div className="absolute inset-0.5 bg-white rounded-2xl z-0"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8">
                    {/* Icon Section */}
                    {service.icon && (
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                            <img
                              loading="lazy"
                              src={service.icon}
                              alt={service.title}
                              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-600 text-center text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    {service.link && (
                      <div className="flex justify-center">
                        <a
                          href={service.link}
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors duration-300 group/link"
                        >
                          <span>Learn More</span>
                          <svg 
                            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.article>
              ))
            )}
          </div>
        </div>

        <AnimatedTimeline />

        {/* Bottom CTA Section */}
        <div className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Let's bring your vision to life with our expert construction services
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}