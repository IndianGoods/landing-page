"use client";
import React from "react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import Navbar from "./Navbar";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [animationData, setAnimationData] = useState(null);

  // ✅ Load Lottie animation from public folder
  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  return (
    <section
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden pt-24"
      style={{
        background: "var(--bg-gradient-dark)",
      }}
    >
      {/* Background Ripple Effect */}
      <BackgroundRippleEffect rows={8} cols={25} cellSize={55} />

      <Navbar isHomePage={true} />

      {/* Hero Content */}
      <div className="relative z-10 grid w-full max-w-[95vw] grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 xl:gap-16 px-6 md:px-10 lg:px-14 xl:px-20 items-start">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center space-y-6 min-h-[550px] lg:min-h-[650px] text-center lg:text-left">
          {/* Main Heading and Subheading */}
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight pointer-events-none"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              CONNECT WITH
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                MILLIONS OF <br />
                WHOLESALERS
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-[1.125rem] text-slate-300 max-w-lg leading-relaxed mx-auto lg:mx-0 pointer-events-none">
              Scale your manufacturing business by connecting with verified
              wholesalers across India. Quality assured, competitive prices, and
              reliable delivery.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg md:text-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-400 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 transform-gpu relative overflow-hidden group pointer-events-auto">
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Get Started</span>
            </button>
            {/* <button className="px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-blue-400/30 text-white font-semibold text-base md:text-lg transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50">
              Learn More
            </button> */}
          </div>

          {/* Trusted By Section */}
          <div className="pt-14 space-y-4">
            <p className="text-sm uppercase tracking-wider text-blue-400 font-semibold pointer-events-none">
              TRUSTED BY THE BEST
            </p>
            <div className="flex flex-wrap items-center gap-7 justify-center lg:justify-start">
              {[
                { name: "TechCorp", icon: "M11 13h14M11 18h10M11 23h12" },
                { name: "InnovateLabs", icon: "M18 8v20M8 18h20" },
                { name: "GlobalTrade", icon: "M18 11v14M11 18h14" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer pointer-events-auto"
                >
                  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                    <rect
                      width="36"
                      height="36"
                      rx="8"
                      fill="currentColor"
                      fillOpacity="0.15"
                    />
                    <path
                      d={c.icon}
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-lg font-semibold">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-full">
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

        {/* Right Side - Stats Cards */}
        {/* <div className="flex flex-col items-end gap-7 pt-10 min-h-[650px] justify-start w-full">
          <div className="flex gap-5 w-full max-w-full">
            <div className="flex h-40 xl:h-44 flex-1 flex-col justify-center px-6 xl:px-7 rounded-2xl bg-blue-900/90 backdrop-blur-md border border-blue-700/50 transition-all duration-300 hover:scale-105 hover:bg-blue-900/95 pointer-events-auto">
              <p className="text-blue-300 text-xs xl:text-sm font-semibold uppercase tracking-wide mb-2">
                Today's Orders
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl xl:text-4xl font-bold text-white">
                  ₹2.4L
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs xl:text-sm">
                <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 11V3M7 3L3 7M7 3L11 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>12%</span>
                </div>
                <span className="text-blue-300">from yesterday</span>
              </div>
            </div>

            <div className="flex h-40 xl:h-44 flex-1 flex-col justify-center px-6 xl:px-7 rounded-2xl bg-blue-900/90 backdrop-blur-md border border-blue-700/50 transition-all duration-300 hover:scale-105 hover:bg-blue-900/95 pointer-events-auto">
              <p className="text-blue-300 text-xs xl:text-sm font-semibold uppercase tracking-wide mb-2">
                New Suppliers
              </p>
              <div className="text-4xl xl:text-5xl font-bold text-white mb-2">
                47
              </div>
              <div className="flex items-center gap-1 text-xs xl:text-sm">
                <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 11V3M7 3L3 7M7 3L11 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>8%</span>
                </div>
                <span className="text-blue-300">this week</span>
              </div>
            </div>
          </div>

          <div className="flex h-80 xl:h-88 w-full rounded-2xl bg-blue-950/95 backdrop-blur-md border border-blue-800/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden p-6 xl:p-8 pointer-events-auto">
            <div className="relative z-10 w-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 24V22C7 19.7909 8.79086 18 11 18H17C19.2091 18 21 19.7909 21 22V24"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm xl:text-base">
                      Active Users
                    </p>
                    <p className="text-blue-300 text-xs xl:text-sm">
                      Live Dashboard
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-emerald-400 text-sm font-semibold">
                    Live
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-300 text-sm">Total Revenue</span>
                  <span className="text-white font-bold text-lg">₹8.2M</span>
                </div>
                <div className="w-full bg-blue-900/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full w-3/4"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">156</div>
                    <div className="text-xs text-blue-300">Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-xs text-blue-300">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}