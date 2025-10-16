import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Headers";
import { motion } from "framer-motion";
import FeatureSectionDemo from "../components/ui/features-section-demo-2";

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

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className="font-bold text-[#f97415]">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Marketplace = () => {
  // Smooth scroll for hash links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element)
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar isHomePage={true} />

      <HeroSection
        heading="India's Trusted B2B Marketplace"
        subheading="Connecting 10,000+ Manufacturers and 50,000+ Wholesalers directly to build stronger, faster, and more reliable supply chains."
      />

      {/* Process Section */}
      <section
        id="process"
        className="bg-[#fdfdfe] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="text-[#f97415]/80 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f97415] mt-3 mb-4">
              How the Marketplace Works
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-[#334155] max-w-3xl mx-auto px-4">
              A seamless journey for manufacturers and wholesalers, connected by
              our intelligent platform
            </p>
          </div>

          {/* Animated Curvy Line */}
          {/* <svg
            className="absolute left-0 top-20 h-full w-full hidden md:block pointer-events-none"
            viewBox="0 0 1200 1800"
            preserveAspectRatio="none"
          >
            <path
              d="M 900 380 
                 C 900 450, 700 500, 600 550
                 C 500 600, 300 620, 300 650
                 M 300 950
                 C 300 1000, 500 1050, 600 1100
                 C 700 1150, 900 1200, 900 1270"
              fill="none"
              stroke="#f97415"
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
          </svg> */}

          {/* Steps */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-32 relative z-10">
            {[
              {
                step: 1,
                title: "Manufacturers List Products",
                desc: "Showcase your products instantly and access a verified buyer network with real-time analytics.",
                img: "process1.png",
                features: [
                  "List Products Instantly",
                  "Verified Buyer Network",
                  "Real-time Analytics",
                ],
                imgFirst: false,
              },
              {
                step: 2,
                title: "Platform Connects & Matches",
                desc: "Our AI engine ensures secure matching, smooth payments, and logistics with 24/7 support.",
                img: "process2.png",
                features: [
                  "AI-Powered Matching",
                  "Secure Transactions",
                  "24/7 Support",
                ],
                imgFirst: true,
              },
              {
                step: 3,
                title: "Wholesalers Receive Orders",
                desc: "Access competitive prices, quality assurance, and timely deliveries at scale.",
                img: "process3.png",
                features: [
                  "Quality Assurance",
                  "Flexible Payments",
                  "Timely Delivery",
                ],
                imgFirst: false,
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: step.imgFirst ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 lg:gap-12"
              >
                {step.imgFirst ? (
                  <>
                    {/* Image on Left */}
                    <div className="w-full md:w-1/2 order-1">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="rounded-2xl w-full h-60 sm:h-72 lg:h-80 object-cover"
                      />
                    </div>

                    {/* Content on Right */}
                    <div className="w-full md:w-1/2 order-2">
                      <span className="inline-block mb-3 px-3 sm:px-4 py-1.5 bg-[#f97415] rounded-full text-white font-bold text-xs sm:text-sm">
                        STEP {step.step}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000000] mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#334155] mb-6 leading-relaxed">
                        {step.desc}
                      </p>
                      <div className="space-y-3">
                        {step.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-[#f97415]" />
                            <span className="text-[#334155] text-base">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content on Left */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                      <span className="inline-block mb-3 px-3 sm:px-4 py-1.5 bg-[#f97415] rounded-full text-white font-bold text-xs sm:text-sm">
                        STEP {step.step}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000000] mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#334155] mb-6 leading-relaxed">
                        {step.desc}
                      </p>
                      <div className="space-y-3">
                        {step.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-[#f97415]" />
                            <span className="text-[#334155] text-base">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image on Right */}
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="rounded-2xl w-full h-60 sm:h-72 lg:h-80 object-cover"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 sm:mt-20 lg:mt-24">
            <div className="inline-flex items-center gap-2 bg-[#fdfdfe] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-[#f97415] font-semibold text-sm sm:text-base">
                Join <span className="text-blue-600 font-bold">1,000+</span>{" "}
                businesses already trading on our platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section
        id="benefits"
        className="bg-[#f97415] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
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
                className="bg-[#1e293b]/70 backdrop-blur-sm border border-[#334155] rounded-xl p-8 hover:shadow-2xl transition-all hover:bg-[#1e293b]/80"
              >
                <div className="inline-flex p-0 rounded-none mb-6 text-white">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section
        id="benefits"
        className="bg-[#f97415] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 sm:mb-16">
          {/* Section label */}
          <span className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase">
            Benefits
          </span>

          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>

          {/* Accent line */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#ffd699] to-[#fff3e0] mx-auto rounded-full mb-6"></div>

          {/* Description */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            Experience the future of B2B trading with cutting-edge technology
            and unmatched reliability.
          </p>
        </div>

        {/* Features grid */}
        <FeatureSectionDemo />
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
