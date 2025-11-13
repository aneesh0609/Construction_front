// src/components/SafetyFeatures.jsx
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaHardHat, FaTools, FaShieldAlt, FaLeaf } from "react-icons/fa";

export default function SafetyFeatures() {
  const features = [
    {
      icon: <FaHardHat className="text-white text-2xl" />,
      title: "Strict Safety Protocols",
      desc: "We enforce rigorous safety standards on every project site to protect workers and clients."
    },
    {
      icon: <FaTools className="text-white text-2xl" />,
      title: "Innovative Solutions",
      desc: "Using modern equipment and techniques to ensure projects are efficient and durable."
    },
    {
      icon: <FaShieldAlt className="text-white text-2xl" />,
      title: "Quality Assurance",
      desc: "Every detail is inspected for precision, ensuring long-lasting structures."
    },
    {
      icon: <FaLeaf className="text-white text-2xl" />,
      title: "Sustainable Practices",
      desc: "Eco-friendly materials and energy-efficient designs are our standard."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Safety & Features | BENNU Construction</title>
        <meta
          name="description"
          content="BEENA Constructions ensures top-notch safety and innovative construction features in every project, delivering quality and sustainable results."
        />
        <link rel="canonical" href="https://your-domain.com/safety-features" />
      </Helmet>

      <section className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side Image */}
          <motion.div
            className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/construction/5.jpg"
              alt="Construction Safety and Features"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="md:w-1/2 w-full relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Safety & Innovative Features
            </h2>
            <p className="text-gray-700 mb-4">
              At <strong>BENNU Construction</strong>, safety is embedded in every stage of our construction process. We combine strict safety protocols, advanced equipment, and professional expertise to deliver projects that are secure, innovative, and sustainable.
            </p>
            <p className="text-gray-700 mb-8">
              Our commitment to quality ensures every structure we build meets rigorous standards while incorporating modern construction techniques. Partner with us to experience projects that are visually impressive, safe, and built to last.
            </p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="bg-blue-600 text-white rounded-lg p-4 flex flex-col items-start gap-3 shadow-lg hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-800 p-3 rounded-full">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
