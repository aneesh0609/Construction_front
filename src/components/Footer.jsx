// src/components/Footer.jsx
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">BEENA Constructions</h2>
          <p className="text-gray-400">
            Building your dreams with precision and excellence. We specialize in Residential, Commercial, Industrial & Renovation projects with utmost safety and quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">123 BEENA Street, Cityname, India</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>
          <p className="text-gray-400">Email: info@beenaconstructions.com</p>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6 space-y-2">
        <p>© {new Date().getFullYear()} BEENA CONSTRUCTIONS. All rights reserved.</p>
        <p className="text-xs">
          Some images used on this website are from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline">Freepik</a>
        </p>
      </div>
    </footer>
  );
}
