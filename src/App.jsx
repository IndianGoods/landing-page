
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/NavBar"

import Cards from "./Cards";
import FeaturesSection from "./FeatureSection";
import Footer from "./Footer";
import Stats from "./Stats";
import Usp from "./Usp";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
    <HeroSection />
      <FeaturesSection />
      <Cards />
      <Usp />
    <Testimonials
      <Stats />
      {/* <Footer /> */}
    </div>


// function App() {
//   return (
//     <Router>
//       <div className="w-full min-h-screen">
//         <Navbar isHomePage={true} />
//         <HeroSection />
//       </div>
//       <Testimonials />
//     </Router>
// >>>>>>> main
//   );
// }

export default App;
