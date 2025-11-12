import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import API from "../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);


  useEffect(() => {
    checkLoginStatus();
  }, []);

  
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const checkLoginStatus = async () => {
    try {
      const res = await API.get("/auth/me", { withCredentials: true });
      if (res.data?.success) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    } catch {
      setIsLoggedIn(false);
    }
  };


  const handleLogout = async () => {
    try {
      await API.post("/auth/logout", {}, { withCredentials: true });
      setIsLoggedIn(false);
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Logout failed. Try again.");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Features", path: "/features" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <Link
              to="/"
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              <div className="relative">
                <img
                  src="/logo.jpg"
                  alt="Beena Construction Logo"
                  className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-cover rounded-full ring-2 ring-blue-600/20 group-hover:ring-blue-600/40 transition-all duration-300 shadow-sm"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
                  BEENA CONSTRUCTION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium transition-colors duration-200 group ${
                      activeLink === link.path
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                        activeLink === link.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Login/Logout Button */}
            <div className="hidden lg:flex items-center">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="relative px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 shadow-lg">
            <ul className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      activeLink === link.path
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md text-center"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md text-center"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Spacer below navbar */}
      <div className="h-16 md:h-20"></div>

      <ToastContainer />
    </>
  );
}
