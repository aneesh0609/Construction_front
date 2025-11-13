import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import API from "../api.js";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data } = await API.get("/gallery/all");
        if (data.success) {
          setImages(data.items || []);
        }
      } catch (error) {
        console.error("Error fetching gallery", error);
        setImages([]);
      }
    };
    fetchGallery();
  }, []);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "BEENU CONSTRUCTION",
    "description": "Explore our completed residential, commercial, and industrial construction projects.",
    "image": images.map((img) => img.imageUrl),
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen]);

  return (
    <>
      <Helmet>
        <title>Project Gallery | BEENU Construction</title>
        <meta
          name="description"
          content="View our latest construction projects – residential, commercial, industrial, road construction and renovation works."
        />
        <meta
          name="keywords"
          content="construction gallery, project gallery, building photos, architecture gallery, renovation gallery"
        />
        <link rel="canonical" href="https://your-domain.com/gallery" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our Project Gallery
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto px-4">
                A visual journey through our finest work - where vision meets reality
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        </div>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {images.length > 0 ? (
              images.map((img, index) => (
                <motion.article
                  key={img._id || index}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                    <img
                      src={img.imageUrl}
                      alt={img.title || "Construction Project"}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* View Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg 
                          className="w-7 h-7 text-slate-900" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>

                    {/* Category Badge */}
                    {img.category && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-slate-900/80 backdrop-blur-sm rounded-full">
                          {img.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-5">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                      {img.title || "Untitled"}
                    </h2>
                    {img.description && (
                      <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                        {img.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mb-4"></div>
                <p className="text-slate-600 text-lg">Loading gallery...</p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <div className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Inspired by What You See?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Let's create something amazing together - your vision, our expertise
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

      {/* Lightbox Modal */}
      {lightboxOpen && images[currentIndex] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900"
            >
              <img
                src={images[currentIndex].imageUrl}
                alt={images[currentIndex].title || "Selected Project"}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </motion.div>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 group"
              aria-label="Close lightbox"
            >
              <svg 
                className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={showPrev}
              className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Info */}
            <div className="mt-6 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {images[currentIndex].title}
              </h3>
              {images[currentIndex].description && (
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                  {images[currentIndex].description}
                </p>
              )}
              <p className="text-slate-400 text-sm mt-3">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}