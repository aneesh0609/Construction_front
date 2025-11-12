import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import API from "../api"; // axios instance for backend
import ProjectShowcaseTestimonial from "../components/ProjectFront"
import HeroAndMap from "../components/ProjectHero"

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await API.get("/projects");
        if (data.success) setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://your-domain.com/projects/${project.slug}`,
      "name": project.title,
      "description": project.description,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Our Projects | BuildRight Construction</title>
        <meta
          name="description"
          content="Explore our residential, commercial, industrial, and renovation projects completed by BuildRight Construction."
        />
        <meta
          name="keywords"
          content="construction projects, residential projects, commercial projects, industrial projects, renovation"
        />
        <link rel="canonical" href="https://your-domain.com/projects" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        {/* Hero Section */}
        <HeroAndMap />
        <ProjectShowcaseTestimonial />
        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mb-4"></div>
                <p className="text-slate-600 text-lg">Loading projects...</p>
              </div>
            ) : (
              projects.map((project, index) => (
                <motion.article
                  key={project._id}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/projects/${project.slug}`} className="block">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-slate-100 aspect-4/3">
                      {project.images && project.images[0] ? (
                        <>
                          <img
                            loading="lazy"
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* View Project Button */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <span className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                              View Project
                              <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6">
                      {/* Category Badge */}
                      {project.category && (
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-slate-700 bg-slate-100 rounded-full">
                            {project.category}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h2>

                      {/* Location */}
                      {project.location && (
                        <div className="flex items-center gap-2 text-slate-600">
                          <svg 
                            className="w-4 h-4 flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm">{project.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                </motion.article>
              ))
            )}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your construction vision to reality
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
