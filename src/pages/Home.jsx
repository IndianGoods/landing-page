import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
// import Navbar from "../components/Navbar";

import Cards from "../components/Cards";
import FeaturesSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Usp from "../components/Usp";
//import Hero from "../components/hero";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <FeaturesSection />
      <Cards />
      <Usp />
      <Testimonials />
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;
