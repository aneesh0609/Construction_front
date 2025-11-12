import { useState, useEffect } from "react";

// Testimonials array
const testimonials = [
  {
    quote: "Building Dreams, One Project at a Time",
    description:
      "We deliver top-quality residential, commercial, and industrial projects with professionalism and excellence.",
    image: "/construction/1.jpg",
  },
  {
    quote: "Your Vision, Our Expertise",
    description:
      "Turning your ideas into reality with precise planning and construction.",
    image: "/construction/2.jpg",
  },
  {
    quote: "Quality You Can Trust",
    description:
      "Reliable construction services for residential, commercial, and industrial projects.",
    image: "/construction/3.jpg",
  },
];

export default function HeroTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        {/* Overlay to reduce opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 md:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-snug sm:leading-tight md:leading-tight">
          {current.quote}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mb-6 drop-shadow-md leading-relaxed sm:leading-relaxed md:leading-relaxed">
          {current.description}
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-blue-500 transition-colors shadow-lg text-sm sm:text-base md:text-lg"
        >
          Request a Free Quote
        </a>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
