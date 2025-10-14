import React, { useState, useEffect } from "react";
import {
  Globe,
  Handshake,
  Lightbulb,
  Palette,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Headers";
import TeamSection from "../components/about/MeetTeam";
import Lottie from "lottie-react";

// ✅ Simple Reusable Button Component
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
    default: "bg-[#0f172a] text-[#fdfdfe] hover:bg-[#1e293b]",
    outline:
      "border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-[#fdfdfe]",
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

// ✅ About Us Page
const AboutUs = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/about.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  const values = [
    {
      title: "Trust & Transparency",
      desc: "We believe in honest communication and genuine partnerships, fostering trust that lasts.",
      icon: <Handshake className="w-8 h-8 text-[#0f172a]" />,
    },
    {
      title: "Innovation",
      desc: "Embracing technology to craft seamless, efficient, and impactful trade experiences.",
      icon: <Lightbulb className="w-8 h-8 text-[#0f172a]" />,
    },
    {
      title: "Cultural Heritage",
      desc: "Celebrating India’s craftsmanship by sharing its beauty and authenticity with the world.",
      icon: <Palette className="w-8 h-8 text-[#0f172a]" />,
    },
    {
      title: "Quality Assurance",
      desc: "Delivering excellence through careful selection, strict standards, and continuous improvement.",
      icon: <ShieldCheck className="w-8 h-8 text-[#0f172a]" />,
    },
    {
      title: "Sustainability",
      desc: "Encouraging eco-friendly sourcing and production for a sustainable global future.",
      icon: <Leaf className="w-8 h-8 text-[#0f172a]" />,
    },
    {
      title: "Global Collaboration",
      desc: "Uniting businesses across continents to strengthen international commerce and understanding.",
      icon: <Globe className="w-8 h-8 text-[#0f172a]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar isHomePage={true} />

      <HeroSection
        heading="About IndianGoods"
        subheading="Connecting cultures through authentic Indian craftsmanship and innovation."
      />

      {/* Section 1 — Our Story */}
      <section className="py-24 px-6 bg-[#fdfdfe] text-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left */}
            <div>
              <div className="inline-block bg-[#0f172a]/10 px-4 py-1 rounded-full mb-4">
                <span className="text-[#0f172a] font-semibold text-sm tracking-wider uppercase">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Connecting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] to-blue-400">
                  Cultures
                </span>{" "}
                Through Commerce
              </h2>

              <div className="w-20 h-1 bg-[#0f172a] rounded-full mb-8"></div>

              <p className="text-lg leading-relaxed mb-5">
                IndianGoods was founded with a vision to bridge cultures and
                bring the spirit of Indian craftsmanship to global markets. Each
                product we showcase represents the dedication, creativity, and
                soul of an artisan.
              </p>

              <p className="text-lg leading-relaxed">
                We go beyond being a marketplace — we are a movement dedicated
                to empowering Indian entrepreneurs and promoting authentic trade
                built on trust and quality.
              </p>
            </div>

            {/* Right — Lottie */}
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

          {/* Highlighted Info */}
          <div className="bg-[#fdfdfe] border-l-4 border-[#0f172a] rounded-2xl px-10 py-10 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xl leading-relaxed">
              We connect global businesses with genuine Indian manufacturers and
              suppliers. From handcrafted goods to contemporary innovations, our
              curated selection symbolizes India’s diversity, integrity, and
              quality — building stronger global ties through trade.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Founder */}
      <section className="py-16 px-6 bg-[#0f172a] w-full text-[#fdfdfe]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              A Note from Our Founder
            </h2>
            <p className="text-[#e2e8f0] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Leadership rooted in passion and purpose — inspiring us to bring
              India’s authentic craftsmanship to the world stage.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8">
            {/* Quote Card */}
            <div className="flex-1 bg-[#1e293b]/50 backdrop-blur-sm border border-[#334155] rounded-2xl p-8 md:p-12 flex flex-col justify-between shadow-xl relative">
              <div>
                <div className="absolute top-6 right-6 opacity-10">
                  <svg
                    className="w-20 h-20 text-[#fdfdfe]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="text-lg md:text-xl leading-relaxed font-light italic mb-6">
                  "IndianGoods was born from a simple belief — that every artisan
                  deserves a global stage. Each connection we make builds a
                  bridge between tradition and innovation, between India and the
                  world."
                </blockquote>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#334155]">
                <div className="w-14 h-14 bg-[#fdfdfe] text-[#0f172a] rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  AS
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Ayan Srivastav</h4>
                  <p className="text-[#cbd5e1] font-medium text-sm">
                    Founder & CEO, IndianGoods
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Image */}
            <div className="w-full md:w-72 h-80 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-[#334155] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1729157661483-ed21901ed892?q=80&w=687&auto=format&fit=crop"
                alt="Ayan Srivastav"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Core Values */}
      <section className="py-24 px-6 bg-[#fdfdfe] text-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm tracking-wider uppercase text-[#0f172a]/80">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-[#0f172a] mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-[#fdfdfe] border border-[#e2e8f0] rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6 flex items-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="leading-relaxed opacity-90">{value.desc}</p>
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
