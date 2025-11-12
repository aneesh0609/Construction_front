import { Helmet } from "react-helmet-async";
import HeroTestimonial from "../components/HeroTestimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatWeDo from "../components/WhatWeDo";
import OwnersSection from "../components/OwnersSection";
import SafetySection from "../components/SafetySection";
import ServiceTestimonials from "../components/Testinomial";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Beena Construction Company</title>
        <meta
          name="description"
          content="Beena construction is a top construction company offering residential, commercial, and industrial projects with high-quality standards."
        />
        <meta
          name="keywords"
          content="construction company, builders, civil engineering, renovation, road construction"
        />
        <link rel="canonical" href="https://your-domain.com/" />
      </Helmet>

      {/* Hero / Testimonial Section */}
      <HeroTestimonial />

      {/* Main Content Section */}
      <main className="flex flex-col items-center justify-center p-6 bg-gray-50">
        <h2 className="text-5xl font-bold text-center mt-12">
          Your Dream, Our Construction
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-xl">
          We deliver quality infrastructure, on time, every time. Residential,
          commercial, industrial, and renovation projects handled with
          precision.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-3 py-3 rounded hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
          <a
            href="/projects"
            className="bg-gray-200 px-3 py-3 rounded hover:bg-gray-300 transition"
          >
            View Projects
          </a>
        </div>
      </main>

      <WhyChooseUs />
      <WhatWeDo />
      <SafetySection />
      <OwnersSection />
      <ServiceTestimonials />
    
    </>
  );
}
