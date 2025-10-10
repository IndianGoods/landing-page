import React from "react";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
//import Hero from "../components/hero";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f5fa] text-gray-900 font-inter">
      <div id="home">
        {/* <Hero /> */}
        
        <HeroSection />
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;