import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import HeroSection from "../components/Headers";
// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          let startTime = null;
          const animate = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className="font-bold">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Marketplace = () => {
  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isHomePage={true} />
      
      <HeroSection
        heading="India's Trusted B2B Marketplace"
        subheading="Connecting 10,000+ Manufacturers and 50,000+ Wholesalers directly to build stronger, faster, and more reliable supply chains."
      />

      <section
        id="process"
        className="bg-[#f8fafc] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              How the Marketplace Works
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A seamless journey for manufacturers and wholesalers, connected by
              our intelligent platform
            </p>
          </div>

          {/* Flow Container */}
          <div className="relative">
            {/* Animated Curvy Line */}
            {/* Animated Curvy Line */}
            <svg
              className="absolute left-0 top-0 h-full w-full hidden md:block pointer-events-none"
              viewBox="0 0 1200 1800"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="flowLine" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="50%" stopColor="#0743ba" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path
                d="M 900 380 
                   C 900 450, 700 500, 600 550
                   C 500 600, 300 620, 300 650
                   
                   M 300 950
                   C 300 1000, 500 1050, 600 1100
                   C 700 1150, 900 1200, 900 1270"
                fill="none"
                stroke="url(#flowLine)"
                strokeWidth="3"
                strokeDasharray="12,8"
                strokeLinecap="round"
                opacity="0.6"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-20"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>

            {/* Steps */}
            <div className="space-y-16 sm:space-y-24 lg:space-y-32 relative z-10">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 lg:gap-12"
              >
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <span className="inline-block mb-3 px-3 sm:px-4 py-1.5 bg-blue-600/10 rounded-full text-blue-600 font-bold text-xs sm:text-sm">
                    STEP 1
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Manufacturers List Products
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    Showcase your products instantly and access a verified buyer
                    network with real-time analytics.
                  </p>

                  <div className="space-y-3">
                    {[
                      "List Products Instantly",
                      "Verified Buyer Network",
                      "Real-time Analytics",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <span className="text-base text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="relative group">
                    <img
                      src="process1.png"
                      alt="Manufacturers listing products"
                      className="rounded-2xl w-full h-60 sm:h-72 lg:h-80 object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 lg:gap-12"
              >
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <img
                      src="process2.png"
                      alt="Platform matching AI"
                      className="rounded-2xl w-full h-60 sm:h-72 lg:h-80 object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <span className="inline-block mb-3 px-3 sm:px-4 py-1.5 bg-blue-600/10 rounded-full text-blue-600 font-bold text-xs sm:text-sm">
                    STEP 2
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Platform Connects & Matches
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    Our AI engine ensures secure matching, smooth payments, and
                    logistics with 24/7 support.
                  </p>

                  <div className="space-y-3">
                    {[
                      "AI-Powered Matching",
                      "Secure Transactions",
                      "24/7 Support",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <span className="text-base text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 lg:gap-12"
              >
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <span className="inline-block mb-3 px-3 sm:px-4 py-1.5 bg-blue-600/10 rounded-full text-blue-600 font-bold text-xs sm:text-sm">
                    STEP 3
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Wholesalers Receive Orders
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    Access competitive prices, quality assurance, and timely
                    deliveries at scale.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Quality Assurance",
                      "Flexible Payments",
                      "Timely Delivery",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <span className="text-base text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="relative group">
                    <img
                      src="process3.png"
                      alt="Wholesalers receiving orders"
                      className="rounded-2xl w-full h-60 sm:h-72 lg:h-80 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom CTA */}
            <div className="text-center mt-16 sm:mt-20 lg:mt-24">
            <div className="inline-flex items-center gap-2 bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-gray-900 font-semibold text-sm sm:text-base">
                Join <span className="text-blue-600 font-bold">1,000+</span>{" "}
                businesses already trading on our platform
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Benefits Section */}
      <section id="benefits" className="bg-[#f8fafc] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wider uppercase">
                Benefits
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience the future of B2B trading with cutting-edge technology
              and unmatched reliability
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Verified Network",
                text: "Every business is thoroughly verified with comprehensive background checks and ongoing monitoring for your security",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Stable Pricing",
                text: "AI-driven price optimization ensures fair, stable pricing with transparent negotiation tools and market insights",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Logistics & Credits",
                text: "Comprehensive logistics network with insurance coverage and flexible credit terms tailored to your business needs",
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "24/7 Support",
                text: "Round-the-clock customer support with dedicated account managers and instant chat assistance",
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "Quality Assurance",
                text: "Rigorous quality checks, product certifications, and satisfaction guarantees for every transaction",
              },
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: "Easy Integration",
                text: "Seamless API integration with existing systems, mobile apps, and comprehensive dashboard analytics",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] rounded-xl p-8 hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="inline-flex p-4 rounded-xl bg-blue-600 text-white mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default Marketplace;