import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import ProjectDetail from "./pages/ProjectDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

         <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery />} />
           <Route path="/features" element={<Features />} />
            <Route path="/about" element={<AboutUs />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
