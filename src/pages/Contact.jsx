import { useState } from "react";
import {
  FaComments,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Headers";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.phone) validationErrors.phone = "Phone is required";
    if (!formData.message) validationErrors.message = "Message is required";
    if (Object.keys(validationErrors).length) return setErrors(validationErrors);

    setLoading(true);
    setTimeout(() => {
      setStatus("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#fdfdfe] text-[#0f172a]">
      <Navbar isHomePage={false} />

      {/* <HeroSection
        heading="Get in Touch"
        subheading="We’re here to help you create something amazing. Let’s start the conversation today."
      /> */}

      {/* Contact Section */}
      <section className="py-30 px-4 bg-[#fdfdfe]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-2">
              <div className="text-center mb-12">
                <span className="text-[#0f172a] font-semibold text-sm tracking-wider uppercase">
                  Contact Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3 mb-4">
                  Send us a message
                </h2>
                <div className="w-20 h-1 bg-[#0f172a] mx-auto rounded-full"></div>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-semibold text-[#0f172a] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className={`w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f172a] transition-all duration-200 text-lg ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-[#0f172a] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className={`w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f172a] transition-all duration-200 text-lg ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-[#0f172a] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@company.com (optional)"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f172a] transition-all duration-200 text-lg"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-[#0f172a] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name (optional)"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f172a] transition-all duration-200 text-lg"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-[#0f172a] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows="6"
                    className={`w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f172a] transition-all duration-200 resize-none text-lg ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <div
                    className={`p-4 rounded-xl text-center font-medium text-lg ${
                      status.includes("success")
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-1 flex flex-col justify-start space-y-10">
              <div className="text-center lg:text-left">
                <span className="text-[#0f172a] font-semibold text-sm tracking-wider uppercase">
                  Get in Touch
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-3 mb-4">
                  Contact Info
                </h2>
                <div className="w-20 h-1 bg-[#0f172a] rounded-full mb-8 mx-auto lg:mx-0"></div>
              </div>

              {[
                {
                  title: "Chat with Us",
                  text: "Start a live chat with our team",
                  icon: <FaComments />,
                },
                { title: "Call Us", text: "+91 98765 43210", icon: <FaPhoneAlt /> },
                {
                  title: "Email Us",
                  text: "support@yourcompany.com",
                  icon: <FaEnvelope />,
                },
                {
                  title: "Visit Us",
                  text: "123 Business Street, Delhi, India",
                  icon: <FaMapMarkerAlt />,
                },
                {
                  title: "Support Hours",
                  text: "Mon - Fri 9:00 AM - 6:00 PM IST",
                  icon: <FaClock />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span className="text-[#0f172a] text-2xl mt-1">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#0f172a]">{item.title}</h3>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </div>
              ))}

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold text-[#0f172a] mb-4">Follow Us</h3>
                <div className="flex gap-6">
                  {[<FaFacebook />, <FaTwitter />, <FaLinkedin />, <FaInstagram />].map(
                    (icon, idx) => (
                      <span
                        key={idx}
                        className="text-[#0f172a] text-2xl cursor-pointer hover:text-[#1e293b] hover:scale-110 transition-transform"
                      >
                        {icon}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
