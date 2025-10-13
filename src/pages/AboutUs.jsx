import React from "react";
import { ArrowRight, Users, Globe, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import { ShoppingBag } from "lucide-react";
import Footer from "../components/Footer";
import HeroSection from "../components/Headers";
import TeamSection from "../components/about/MeetTeam";
// Simple Button component
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

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar isHomePage={true} />

      <HeroSection
        heading="About IndianGoods"
        subheading="Connecting cultures through authentic Indian commerce and craftsmanship."
      />

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block mb-4">
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Connecting Cultures Through Commerce
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                IndianGoods was born from a passion to bridge cultures and bring
                the rich heritage of Indian craftsmanship to global markets.
                Every product tells a story, and every purchase supports the
                artisans and entrepreneurs of India.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our platform is more than a marketplace—it's a movement to
                empower Indian businesses and share our culture with the world
                through trusted B2B partnerships.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Global Reach",
                  desc: "Connecting businesses across 50+ countries worldwide",
                  icon: "🌐",
                },
                {
                  title: "Quality First",
                  desc: "Rigorous vetting process for all suppliers",
                  icon: "✓",
                },
                {
                  title: "Fast Delivery",
                  desc: "Streamlined logistics and shipping solutions",
                  icon: "⚡",
                },
                {
                  title: "24/7 Support",
                  desc: "Dedicated team ready to assist you always",
                  icon: "💬",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-all"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-l-4 border-blue-600 rounded-r-2xl px-8 py-8">
            <p className="text-gray-800 text-xl leading-relaxed">
              We connect international businesses with authentic Indian
              manufacturers and suppliers. From traditional handicrafts to
              modern innovations, we curate products that represent India's
              diversity and quality—helping thousands of businesses expand
              globally with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f8fafc] w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              A Note from Our Founder
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Leadership insights that drive our mission to connect cultures
              through authentic Indian commerce.
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8">
            {/* Content Card */}
            <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-8 md:p-12 flex flex-col justify-between shadow-sm">
              <div>
                <div className="absolute top-6 right-6 opacity-5">
                  <svg
                    className="w-20 h-20 text-[#0743ba]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed font-light italic mb-6">
                  "When I started IndianGoods, my dream was to connect India’s
                  rich craftsmanship with the world. Every artisan we empower
                  and every partnership we build helps share the story of India
                  with global communities."
                </blockquote>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0743ba] to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow">
                  AS
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Ayan Srivastav
                  </h4>
                  <p className="text-[#0743ba] font-medium text-sm">
                    Founder & CEO, IndianGoods
                  </p>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="w-full md:w-72 h-80 flex-shrink-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1729157661483-ed21901ed892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ayan Srivastav"
                className="w-full h-full object-cover"
                style={{ minHeight: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trust & Transparency",
                desc: "Building lasting relationships through honest communication and clear business practices.",
                icon: "🤝",
              },
              {
                title: "Innovation",
                desc: "Leveraging cutting-edge technology to create seamless trade experiences.",
                icon: "💡",
              },
              {
                title: "Cultural Heritage",
                desc: "Preserving and promoting India's rich craftsmanship and traditional excellence.",
                icon: "🎨",
              },
              {
                title: "Quality Assurance",
                desc: "Maintaining the highest standards through rigorous supplier vetting and product checks.",
                icon: "⭐",
              },
              {
                title: "Sustainability",
                desc: "Supporting eco-friendly practices and responsible sourcing for a better tomorrow.",
                icon: "🌱",
              },
              {
                title: "Global Collaboration",
                desc: "Fostering international partnerships that benefit businesses across borders.",
                icon: "🌍",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
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
