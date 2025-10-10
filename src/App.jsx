import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Navbar isHomePage={true} />
        <HeroSection />
      </div>
      <Testimonials />
    </Router>
  );
}

export default App;
