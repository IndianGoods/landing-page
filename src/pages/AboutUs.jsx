import React, { useState, useEffect } from "react";
import {
  Globe,
  Handshake,
  Lightbulb,
  Palette,
  ShieldCheck,
  Leaf,
  ShoppingBag,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Headers";
import TeamSection from "../components/about/MeetTeam";
import Lottie from "lottie-react";

// ✅ Simple reusable Button component
const Button = ({
  children,
  size = "default",
  variant = "default",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300";
  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const variantClasses = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border-2 bg-transparent hover:bg-white/10",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ✅ AboutUs Component
const AboutUs = () => {
  const [animationData, setAnimationData] = useState(null);

  // Fetch Lottie animation dynamically
  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  const values = [
    {
      title: "Trust & Transparency",
      desc: "Building lasting relationships through honest communication and clear business practices.",
      icon: <Handshake className="w-8 h-8 text-blue-800" />,
    },
    {
      title: "Innovation",
      desc: "Leveraging cutting-edge technology to create seamless trade experiences.",
      icon: <Lightbulb className="w-8 h-8 text-blue-800" />,
    },
    {
      title: "Cultural Heritage",
      desc: "Preserving and promoting India's rich craftsmanship and traditional excellence.",
      icon: <Palette className="w-8 h-8 text-blue-800" />,
    },
    {
      title: "Quality Assurance",
      desc: "Maintaining the highest standards through rigorous supplier vetting and product checks.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-800" />,
    },
    {
      title: "Sustainability",
      desc: "Supporting eco-friendly practices and responsible sourcing for a better tomorrow.",
      icon: <Leaf className="w-8 h-8 text-blue-800" />,
    },
    {
      title: "Global Collaboration",
      desc: "Fostering international partnerships that benefit businesses across borders.",
      icon: <Globe className="w-8 h-8 text-blue-800" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isHomePage={true} />

      <HeroSection
        heading="About IndianGoods"
        subheading="Connecting cultures through authentic Indian commerce and craftsmanship."
      />

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-[#fdfdfe]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-blue-600/10 px-4 py-1 rounded-full mb-4">
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Connecting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                  Cultures
                </span>{" "}
                Through Commerce
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-8"></div>

              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                IndianGoods was born from a passion to bridge cultures and bring
                the rich heritage of Indian craftsmanship to global markets.
                Every product tells a story, and every purchase supports the
                artisans and entrepreneurs of India.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Our platform is more than a marketplace — it’s a movement to
                empower Indian businesses and share our culture with the world
                through trusted B2B partnerships.
              </p>
            </div>

            {/* Right Lottie Animation */}
            <div className="flex justify-center items-center">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-[80%]"
                />
              ) : (
                <p className="text-gray-500">Loading animation...</p>
              )}
            </div>
          </div>

          {/* Highlighted Info Card */}
          <div className="bg-white border-l-4 border-blue-600 rounded-2xl px-10 py-10 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-800 text-xl leading-relaxed">
              We connect international businesses with authentic Indian
              manufacturers and suppliers. From traditional handicrafts to
              modern innovations, we curate products that represent India's
              diversity and quality — helping thousands of businesses expand
              globally with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-6 bg-[#0f172a] w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              A Note from Our Founder
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Leadership insights that drive our mission to connect cultures
              through authentic Indian commerce.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8">
            {/* Quote Card */}
            <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 md:p-12 flex flex-col justify-between shadow-2xl relative">
              <div>
                <div className="absolute top-6 right-6 opacity-10">
                  <svg
                    className="w-20 h-20 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed font-light italic mb-6">
                  "When I started IndianGoods, my dream was to connect India’s
                  rich craftsmanship with the world. Every artisan we empower
                  and every partnership we build helps share the story of India
                  with global communities."
                </blockquote>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-600">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg">
                  AS
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Ayan Srivastav
                  </h4>
                  <p className="text-cyan-400 font-medium text-sm">
                    Founder & CEO, IndianGoods
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Image */}
            <div className="w-full md:w-72 h-80 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-slate-600 shadow-2xl ring-1 ring-cyan-400/20">
              <img
                src="https://images.unsplash.com/photo-1729157661483-ed21901ed892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Ayan Srivastav"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-semibold text-sm tracking-wider uppercase">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6 flex items-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <TeamSection />

      <Footer />
    </div>
  );
};

export default AboutUs;
