import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { name: "Home", path: "home" },
  { name: "About", path: "/about" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Blog", path: "/blog" },
  { name: "Finance", path: "/finance" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ isHomePage = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return setScrolled(true);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const sections = NAV_ITEMS.filter(item => !item.path.startsWith("/"))
            .map(item => ({ id: item.path, element: document.getElementById(item.path) }))
            .filter(s => s.element);

          const scrollPos = window.scrollY + 100;
          for (let i = sections.length - 1; i >= 0; i--) {
            if (sections[i].element.offsetTop <= scrollPos) {
              setActiveSection(sections[i].id);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleClick = (path) => {
    setIsOpen(false);

    if (path.startsWith("/")) return navigate(path);
    if (path === "home") return navigate("/");

    if (isHomePage) {
      const el = document.getElementById(path);
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    } else {
      navigate("/#" + path);
    }
  };

  const getNavItemClasses = (itemPath) => {
    const isActive =
      (activeSection === itemPath && !itemPath.startsWith("/") && isHomePage && location.pathname === "/") ||
      (location.pathname === itemPath && itemPath.startsWith("/"));

    if (scrolled || !isHomePage) return isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500";
    return isActive ? "text-white" : "text-white/90 hover:text-white";
  };

  return (
    <nav
      className={`${
        isHomePage ? "absolute" : "fixed"
      } top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-xl shadow border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 flex justify-between items-center">
        {/* Branding */}
        <div
          className="text-xl sm:text-2xl md:text-3xl font-extrabold cursor-pointer"
          onClick={() => handleClick("home")}
        >
          <span className={scrolled || !isHomePage ? "text-gray-800" : "text-white"}>Indian</span>
          <span className="text-[#ff3030]">Goods</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-8 xl:space-x-10">
          {NAV_ITEMS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(item.path)}
              className={`transition-all duration-300 font-medium hover:scale-105 relative ${getNavItemClasses(item.path)}`}
            >
              {item.name}
              {((activeSection === item.path && !item.path.startsWith("/") && isHomePage && location.pathname === "/") ||
                (location.pathname === item.path && item.path.startsWith("/"))) && (
                <div
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    scrolled || !isHomePage ? "bg-blue-600" : "bg-white"
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleClick("cta")}
            className={`px-4 lg:px-5 py-2 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              scrolled || !isHomePage
                ? "bg-[#f54a00] text-white shadow"
                : "bg-transparent border border-white/30 text-white hover:bg-white/10"
            }`}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-colors duration-300 ${
              scrolled || !isHomePage ? "text-gray-700 hover:text-blue-500" : "text-white/90 hover:text-white"
            }`}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 transform origin-top px-4 z-50 ${
          isOpen ? "opacity-100 scale-100 max-h-96 mt-2" : "opacity-0 scale-95 max-h-0 mt-0"
        } overflow-hidden`}
      >
        <div
          className={`${
            scrolled || !isHomePage
              ? "bg-white/95 backdrop-blur-xl shadow-xl border border-white/20"
              : "bg-black/40 backdrop-blur-sm border border-white/10"
          } rounded-2xl relative z-50`}
        >
          <div className="flex flex-col px-3 py-4">
            {NAV_ITEMS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(item.path)}
                className={`w-full text-left py-3 px-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  scrolled || !isHomePage
                    ? "text-gray-700 hover:text-blue-500 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => handleClick("cta")}
              className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 mt-3 text-base w-full ${
                scrolled || !isHomePage
                  ? "bg-[#f54a00] text-white hover:shadow-lg"
                  : "border border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
