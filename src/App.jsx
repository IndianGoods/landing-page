import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
