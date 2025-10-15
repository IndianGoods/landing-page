import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
// import Navbar from "../components/Navbar";

import Cards from "../components/Cards";
import FeaturesSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Usp from "../components/Usp";
import { AnimatedTestimonialsDemo } from "../components/Testimonial-v2";
import { LampDemo } from "../components/LampDemo";
import { DemoOne } from "@/components/demo";
import { Logos3Demo } from "../components/logos3-demo";
import ScrollFade from "../components/ui/scroll-fade";
//import Hero from "../components/hero";

const Home = () => {
  return (
    <div className="w-full">
      <ScrollFade direction="up" duration={0.8}>
        <HeroSection />
      </ScrollFade>
      
      {/* Trust Indicators - Logo Carousel */}
      <ScrollFade direction="up" delay={0.2} duration={0.6}>
        <Logos3Demo />
      </ScrollFade>

      <ScrollFade direction="up" delay={0.1} duration={0.7}>
        <Cards />
      </ScrollFade>
      
      {/* <DemoOne /> */}
      {/* <LampDemo /> */}
      
      <ScrollFade direction="left" delay={0.2} duration={0.8}>
        <Usp />
      </ScrollFade>
      
      {/* <Testimonials /> */}
      
      <ScrollFade direction="right" delay={0.1} duration={0.7}>
        <FeaturesSection />
      </ScrollFade>
      
      <ScrollFade direction="up" delay={0.3} duration={0.9}>
        <AnimatedTestimonialsDemo />
      </ScrollFade>
      
      <ScrollFade direction="up" delay={0.2} duration={0.6}>
        <Stats />
      </ScrollFade>
      
      <ScrollFade direction="up" delay={0.1} duration={0.5}>
        <Footer />
      </ScrollFade>
    </div>
  );
};

export default Home;
