import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MarketPlace from "./pages/MarketPlace";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/marketplace",
    element: <MarketPlace />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
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
