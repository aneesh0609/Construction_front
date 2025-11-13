import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import API from "../api.js"; 
import SafetyFeatures from "../components/SafetyFeature.jsx"; 
import SmartConstructionIntegration from "../components/SmartTech.jsx";

export default function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const { data } = await API.get("/features/all");
        if (data.success) setFeatures(data.features || []);
      } catch (error) {
        console.error("Error fetching features", error);
      }
    };
    fetchFeatures();
  }, []);

  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "BENNU Constructions",
      "url": "https://your-domain.com",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Features",
      "itemListElement": features.map((f) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": f.title,
          "description": f.description,
        },
      })),
    },
  };

  const colors = [
    "from-blue-500 to-blue-600",
    "from-emerald-500 to-emerald-600",
    "from-purple-500 to-purple-600",
    "from-amber-500 to-amber-600",
    "from-rose-500 to-rose-600",
    "from-cyan-500 to-cyan-600"
  ];

  return (
    <>
      <Helmet>
        <title>Our Features | BENNU Construction</title>
        <meta
          name="description"
          content="Explore the key features, safety protocols, and advantages of BEENA Constructions, highlighting our expertise and commitment to quality."
        />
        <link rel="canonical" href="https://your-domain.com/features" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        
          
          <SmartConstructionIntegration />

        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.length > 0 ? (
              features.map((feature, index) => (
                <motion.article
                  key={feature._id || index}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                 
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  <div className="absolute inset-0.5 bg-white rounded-2xl z-0"></div>

                 
                  <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center">
                  
                    {feature.icon && (
                      <div className="mb-6 relative">
                        
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 scale-110`}></div>
                        
                     
                        <div className={`relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                          <img
                            src={feature.icon}
                            alt={feature.title}
                            loading="lazy"
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter brightness-0 invert"
                          />
                        </div>
                      </div>
                    )}

                   
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {feature.title}
                    </h2>

                   
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[index % colors.length]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mb-4"></div>
                <p className="text-slate-600 text-lg">Loading features...</p>
              </div>
            )}
          </div>
        </section>


        <SafetyFeatures />

        
        <div className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Experience the Difference
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Let our features work for you - building excellence with every project
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}