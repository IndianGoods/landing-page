import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MarketPlace from "./pages/MarketPlace";
import Contact from "./pages/Contact";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import BlogEditor from "./pages/BlogEditor";

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
    path: "/blog",
    element: <BlogHome />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/create",
    element: <BlogEditor />,
  },
  {
    path: "/admin/edit/:id",
    element: <BlogEditor />,
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
