import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-slate-900 text-white py-10 w-full"
      style={{ background: "var(--bg-gradient-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col w-96 ">
          <h2 className="font-semibold text-2xl mb-4 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            MoneyHub
          </h2>
          <div>
            <div className="mb-4 max-w-xs">
              <p className="font-semibold mb-3 text-base">Subscribe</p>
              <p className="text-sm font-normal text-slate-400 ">
                Join our newsletter to stay up to date on features and releases.
              </p>
            </div>
            <form className="flex items-center bg-[#1B3641] rounded-full overflow-hidden w-full py-1.5 px-3 ">
              <span className="text-lg">
                <div className="p-2 bg-[#0F2028] rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                {/* <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-gray-400 bg-[#0F2028] p-1.5 rounded-full "
                >
                  <path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2-.5a.5.5 0 0 0-.5.5v.217l7 5.25 7-5.25V4a.5.5 0 0 0-.5-.5H4zm14 2.383l-5.803 4.351a2.5 2.5 0 0 1-3.394 0L2 5.883V16a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V5.883z" />
                </svg> */}
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent py-2 px-2 flex-1 outline-none text-white placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="bg-[#0F2028] rounded-full text-white py-2 px-4 font-semibold"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-5">
              By subscribing you agree to with our{" "}
              <span className="underline cursor-pointer text-white">
                Privacy Policy
              </span>
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-3 mb-4 sm:mb-6">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-[#fa7414] hover:text-white transition-all duration-300 hover:scale-105"
              >
                <FaFacebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-[#fa7414] hover:text-white transition-all duration-300 hover:scale-105"
              >
                <FaTwitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-[#fa7414] hover:text-white transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-[#fa7414] hover:text-white transition-all duration-300 hover:scale-105"
              >
                <FaInstagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>

            {/* WhatsApp Community Button */}
            <a
              href="https://chat.whatsapp.com/your-community-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#20b357] text-white font-medium px-3 sm:px-4 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-sm"
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
            <h3 className="font-semibold text-base sm:text-lg mb-4 text-[#0743ba]">
              Contact Information
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <span className="text-[#fa7414] text-base sm:text-lg">📧</span>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium text-gray-800 text-sm">Email</h4>
                  <p className="text-xs text-gray-600">
                    support@indiangoods.com
                  </p>
                  <p className="text-xs text-gray-500">
                    business@indiangoods.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <span className="text-[#fa7414] text-base sm:text-lg">📞</span>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium text-gray-800 text-sm">Phone</h4>
                  <p className="text-xs text-gray-600">+91 1800-XXX-XXXX</p>
                  <p className="text-xs text-gray-500">
                    24/7 Support Available
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <span className="text-[#fa7414] text-base sm:text-lg">📍</span>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium text-gray-800 text-sm">Address</h4>
                  <p className="text-xs text-gray-600">Mumbai, Maharashtra</p>
                  <p className="text-xs text-gray-500">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 lg:gap-6 text-xs text-gray-500">
              <p>
                © {new Date().getFullYear()} IndianGoods. All rights reserved.
              </p>
              <span className="hidden sm:block">|</span>
              <a href="#" className="hover:text-[#fa7414] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#fa7414] transition-colors">
                Privacy Policy
              </a>
            </div>
            <div className="text-xs text-gray-500">
              <p>🇮🇳 Proudly Made in India</p>
            </div>
          </div>
        </div>

        {/* Branding Section */}
        <div className="py-6 sm:py-8">
          <h1 className="text-center w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight">
            <span className="text-[#0743ba]">Indian</span>
            <span className="text-[#fa7414]">Goods</span>
          </h1>
          <p className="text-center text-gray-600 mt-2 text-xs sm:text-sm">
            Connecting India's Manufacturers & Wholesalers
          </p>
        </div>
      </div>

      {/* Branding full-width bottom */}
    </footer>
  );
};

export default Footer;
