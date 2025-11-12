import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function HeroBannerWithSmallMap() {
  const projects = [
    {
      id: 1,
      name: "Burj Heights Complex",
      location: "Dubai, UAE",
      coords: [25.276987, 55.296249],
      details:
        "A 28-floor commercial complex designed with smart energy management and eco-friendly architecture.",
    },
    {
      id: 2,
      name: "Lusail Smart City",
      location: "Lusail, Qatar",
      coords: [25.416666, 51.533333],
      details:
        "Smart urban development featuring green infrastructure and AI-based monitoring systems.",
    },
    {
      id: 3,
      name: "Red Sea Industrial Port",
      location: "Jeddah, Saudi Arabia",
      coords: [21.4858, 39.1925],
      details:
        "High-capacity logistics and trade hub integrating solar energy and automated workflows.",
    },
  ];

  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[75vh] flex flex-col justify-center items-center text-center px-6 sm:px-10 lg:px-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80"
            alt="Construction Site"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-gray-950/90"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                 Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">the Future</span>
              </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-8">
            Delivering landmark projects with precision and passion across the GCC region.
          </p>
          
        </motion.div>
      </div>

      {/* Projects Section with Map and Text Side by Side */}
      <div
        id="map"
        className="relative z-10 py-20 bg-gray-900 flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-10 lg:px-20"
      >
        {/* Left Side Text */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Our Projects in the Middle East
          </h2>
          <p className="text-gray-300 text-lg mb-4 max-w-md">
            Over the last two decades, we have successfully delivered
            commercial, industrial, and residential projects across
            multiple countries, maintaining the highest construction
            standards.
          </p>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>🏗️ 300+ completed projects with global recognition</li>
            <li>🌍 Strategic operations in UAE, Qatar, and Saudi Arabia</li>
            <li>⚙️ Expertise in sustainable architecture and smart systems</li>
            <li>🏢 Long-term partnerships with top real estate firms</li>
          </ul>
          <p className="mt-6 text-indigo-400 font-semibold">
            Excellence | Innovation | Sustainability
          </p>
        </motion.div>

        {/* Right Side Map */}
        <motion.div
          className="flex-1 w-full h-[350px] rounded-2xl overflow-hidden shadow-xl border border-gray-800"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MapContainer
            center={[25.3, 48.5]} // Focused region
            zoom={5}
            zoomControl={false}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            closePopupOnClick={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />
            {projects.map((p) => (
              <Marker key={p.id} position={p.coords}>
                <Popup closeOnClick={true} autoClose={true}>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{p.name}</h3>
                    <p className="text-gray-700 text-sm mb-1">📍 {p.location}</p>
                    <p className="text-gray-600 text-xs">{p.details}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>
      </div>
    </section>
  );
}
