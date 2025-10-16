import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f0f0f5] text-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 sm:pt-16">
        {/* Grid of links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Column 1 - Company */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-4 text-black">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#f97415] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#f97415] transition-colors"
                >
                  Blog & Research
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#f97415] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="hover:text-[#f97415] transition-colors"
                >
                  Market Place
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Marketplace */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-4 text-black">
              Marketplace
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  to="/marketplace"
                  className="hover:text-[#f97415] transition-colors"
                >
                  B2B Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace#benefits"
                  className="hover:text-[#f97415] transition-colors"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace#process"
                  className="hover:text-[#f97415] transition-colors"
                >
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Stay Connected */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-4 text-black">
              Stay Connected
            </h3>
            <p className="text-sm mb-4 text-black">
              Join our community for updates and business insights
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-3 mb-4 sm:mb-6">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-[#fdfdfe] shadow-md rounded-full flex items-center justify-center text-black hover:bg-[#f97415] hover:text-[#fdfdfe] transition-all duration-300 hover:scale-105"
                  >
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                )
              )}
            </div>

            {/* WhatsApp Community Button */}
            <a
              href="https://chat.whatsapp.com/your-community-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-[#fdfdfe] font-medium px-3 sm:px-4 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.41 1.27 4.83L2 22l5.3-1.38A9.96 9.96 0 0012.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm5.14 14.24c-.22.62-1.28 1.18-1.77 1.26-.46.09-1.06.13-1.71-.11-.39-.13-.89-.29-1.53-.57-2.7-1.17-4.46-3.9-4.6-4.08-.13-.18-1.1-1.47-1.1-2.8 0-1.34.69-1.99.94-2.26.22-.27.48-.34.64-.34h.46c.14 0 .34-.04.53.4.18.44.61 1.53.66 1.64.04.13.09.27.02.44-.07.18-.11.27-.23.42-.11.13-.24.29-.34.39-.11.09-.22.2-.09.4.13.18.57.93 1.21 1.5.83.74 1.53.97 1.77 1.06.22.09.36.07.5-.04.14-.11.57-.67.72-.9.13-.22.3-.18.5-.11.18.07 1.14.53 1.34.62.18.09.3.13.34.2.05.05.05.62-.16 1.23Z" />
              </svg>
              <span className="text-xs sm:text-sm">
                Join WhatsApp Community
              </span>
            </a>
          </div>

          {/* Column 4 - Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-4 text-black">
              Contact Information
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-black text-base sm:text-lg">📧</span>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium text-black text-sm">Email</h4>
                  <p className="text-xs text-black">support@indiangoods.com</p>
                  <p className="text-xs text-black">business@indiangoods.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-black text-base sm:text-lg">📞</span>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium text-black text-sm">Phone</h4>
                  <p className="text-xs text-black">+91 1800-XXX-XXXX</p>
                  <p className="text-xs text-black">24/7 Support Available</p>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-black text-base sm:text-lg">📍</span>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium text-black text-sm">Address</h4>
                  <p className="text-xs text-black">Mumbai, Maharashtra</p>
                  <p className="text-xs text-black">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 lg:gap-6 text-xs text-black">
              <p>© {new Date().getFullYear()} IndianGoods. All rights reserved.</p>
              <span className="hidden sm:block">|</span>
              <a href="#" className="hover:text-[#f97415] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#f97415] transition-colors">
                Privacy Policy
              </a>
            </div>
            <div className="text-xs text-black">
              <p>🇮🇳 Proudly Made in India</p>
            </div>
          </div>
        </div>

        {/* Branding Section */}
        <div className="py-6 sm:py-8">
          <h1 className="text-center w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight">
            <span className="text-black">Indian</span>
            <span className="text-[#ff3030]">Goods</span>
          </h1>
          <p className="text-center text-black mt-2 text-xs sm:text-sm">
            Connecting India's Manufacturers & Wholesalers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
