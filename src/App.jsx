import Cards from "./Cards";
import FeaturesSection from "./FeatureSection";
import Footer from "./Footer";
import Stats from "./Stats";
import Usp from "./Usp";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <FeaturesSection />
      <Cards />
      <Usp />
      <Stats />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
