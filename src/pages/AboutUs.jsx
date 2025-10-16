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
import { SparklesCore } from "../components/ui/sparkles";
import FeatureSectionDemo from "../components/ui/features-section-demo-1";
import { CyberneticBentoGrid } from "@/components/cybernetic-bento-grid";

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
    default: "bg-[#f97415] text-[#fdfdfe] hover:bg-[#1e293b]",
    outline:
      "border-2 border-[#f97415] text-[#f97415] hover:bg-[#f97415] hover:text-[#fdfdfe]",
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
    fetch("/hero-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  const values = [
    {
      title: "Trust & Transparency",
      desc: "We believe in honest communication and genuine partnerships, fostering trust that lasts.",
      icon: <Handshake className="w-8 h-8 text-[#f97415]" />,
    },
    {
      title: "Innovation",
      desc: "Embracing technology to craft seamless, efficient, and impactful trade experiences.",
      icon: <Lightbulb className="w-8 h-8 text-[#f97415]" />,
    },
    {
      title: "Cultural Heritage",
      desc: "Celebrating India’s craftsmanship by sharing its beauty and authenticity with the world.",
      icon: <Palette className="w-8 h-8 text-[#f97415]" />,
    },
    {
      title: "Quality Assurance",
      desc: "Delivering excellence through careful selection, strict standards, and continuous improvement.",
      icon: <ShieldCheck className="w-8 h-8 text-[#f97415]" />,
    },
    {
      title: "Sustainability",
      desc: "Encouraging eco-friendly sourcing and production for a sustainable global future.",
      icon: <Leaf className="w-8 h-8 text-[#f97415]" />,
    },
    {
      title: "Global Collaboration",
      desc: "Uniting businesses across continents to strengthen international commerce and understanding.",
      icon: <Globe className="w-8 h-8 text-[#f97415]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar isHomePage={true} />

      {/* <HeroSection
        heading="About IndianGoods"
        subheading="Connecting cultures through authentic Indian craftsmanship and innovation."
      /> */}

      <div className="h-[23.25rem] w-full bg-[#f97415] flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-6xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20 drop-shadow-md">
          About Us
        </h1>

        <div className="w-[32rem] h-20 relative">
          {/* Gradient lines — shifted to golden tones */}
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-[#ffd280] to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-[#ffea9e] to-transparent h-px w-3/4" />
          <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-[#fff6d5] to-transparent h-[4px] w-1/4 blur-sm" />
          <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-[#fff2c2] to-transparent h-px w-1/4" />

          {/* Sparkles Effect — soft golden particles instead of white */}
          <SparklesCore
            background="transparent"
            minSize={0.5}
            maxSize={1.4}
            particleDensity={850}
            className="w-full h-full"
            particleColor="#fff2c2"
          />

          {/* Soft radial fade to blend edges */}
          <div className="absolute inset-0 w-full h-full bg-[#f97415] [mask-image:radial-gradient(300px_150px_at_top,transparent_25%,white)]"></div>
        </div>
      </div>

      {/* Section 1 — Our Story */}
      <section className="py-24 px-6 bg-[#fdfdfe] text-[#f97415]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left */}
            <div>
              <div className="inline-block bg-[#f97415]/10 px-4 py-1 rounded-full mb-4">
                <span className="text-[#f97415] font-semibold text-sm tracking-wider uppercase">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Connecting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97415] via-orange-400 to-yellow-300">
                  Cultures
                </span>{" "}
                Through Commerce
              </h2>

              <div className="w-20 h-1 bg-[#000000] rounded-full mb-8"></div>

              <p className="text-lg leading-relaxed mb-5 text-black">
                IndianGoods was founded with a vision to bridge cultures and
                bring the spirit of Indian craftsmanship to global markets. Each
                product we showcase represents the dedication, creativity, and
                soul of an artisan.
              </p>

              <p className="text-lg leading-relaxed text-black">
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
          <div className="bg-[#f97415] border-l-4 border-[#4a1f0a] rounded-2xl px-10 py-10 shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xl leading-relaxed text-gray-200">
              We connect global businesses with genuine Indian manufacturers and
              suppliers. From handcrafted goods to contemporary innovations, our
              curated selection symbolizes India’s diversity, integrity, and
              quality — building stronger global ties through trade.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Founder */}
     <section className="py-16 px-6 bg-[#f97415] text-[#fdfdfe]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-3 tracking-tight">
            A Note from Our Founder
          </h2>
          <div className="w-16 h-px bg-[#fdfdfe]/30 mx-auto mb-4"></div>
          <p className="text-[#fdfdfe]/80 text-base md:text-lg max-w-2xl mx-auto font-light">
            Leadership rooted in passion and purpose — inspiring us to bring
            India's authentic craftsmanship to the world stage.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Founder Image */}
          <div className="flex-shrink-0">
            <div className="w-56 h-72 rounded-xl overflow-hidden shadow-2xl mx-auto md:mx-0">
              <img
                src="https://images.unsplash.com/photo-1729157661483-ed21901ed892?q=80&w=687&auto=format&fit=crop"
                alt="Ayan Srivastav"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#fdfdfe]/10 rounded-xl -z-10"></div>
          </div>

          {/* Quote Card */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <svg
              className="w-10 h-10 text-[#fdfdfe]/30 mb-2 mx-auto md:mx-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-lg md:text-xl leading-relaxed font-light">
              IndianGoods was born from a simple belief — that every artisan
              deserves a global stage. Each connection we make builds a bridge
              between tradition and innovation, between India and the world.
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-14 h-14 bg-[#fdfdfe] text-[#f97415] rounded-full flex items-center justify-center font-semibold text-lg shadow-lg">
                AS
              </div>
              <div>
                <h4 className="text-lg font-medium mb-0.5">
                  Ayan Srivastav
                </h4>
                <p className="text-[#fdfdfe]/70 text-sm font-light">
                  Founder & CEO, IndianGoods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Section 3 — Core Values */}
      {/* <section className="py-24 px-6 bg-[#fdfdfe] text-[#f97415]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm tracking-wider uppercase text-[#f97415]/80">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-[#f97415] mx-auto rounded-full"></div>
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
      </section> */}

      <CyberneticBentoGrid />

      {/* <FeatureSectionDemo /> */}

      {/* Meet the Team */}
      <TeamSection />

      <Footer />
    </div>
  );
};

export default AboutUs;
