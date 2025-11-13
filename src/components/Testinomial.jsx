import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function ServiceTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  // Dummy testimonials
  const dummyTestimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Homeowner",
      comment:
        "BuildRight transformed my house into a modern dream home. Professional, timely, and exceptional quality!",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Mary Smith",
      role: "Business Owner",
      comment:
        "Their team delivered our office renovation on schedule and beyond expectations. Highly recommended!",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Industrial Manager",
      comment:
        "Excellent work on our factory construction. Attention to detail and safety standards were impressive.",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 4,
      name: "Linda Williams",
      role: "Investor",
      comment:
        "BuildRight made our commercial project hassle-free. Professional, transparent, and reliable team.",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  useEffect(() => {
    // simulate fetching data
    setTimeout(() => setTestimonials(dummyTestimonials), 300);
  }, []);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": "BuildRight Construction",
      "description": "Construction services: residential, commercial, industrial, and renovation projects.",
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": t.name,
      "reviewBody": t.comment,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title> Beena Construction</title>
        <meta
          name="description"
          content="Read testimonials from our satisfied clients about residential, commercial, and industrial construction services."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="bg-gray-50 py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          What Our Clients Say
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 max-w-7xl mx-auto px-4">
          {testimonials.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">
              Loading testimonials...
            </p>
          ) : (
            testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                  loading="lazy"
                />
                <p className="text-gray-700 italic mb-4">"{t.comment}"</p>
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                <span className="text-sm text-gray-500">{t.role}</span>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
