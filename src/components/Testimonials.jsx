import { useState, useEffect } from "react";

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    className="w-8 h-8 text-blue-200 opacity-50"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z" />
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const TestimonialCard = ({ testimonial, isActive }) => (
  <div
    className={`transition-all duration-500 ${
      isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
    }`}
  >
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-900/10 border border-slate-100 max-w-4xl mx-auto relative overflow-hidden">
      {/* Background Quote Icon */}
      <div className="absolute top-6 right-8">
        <QuoteIcon />
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
        <span className="text-slate-600 text-sm ml-2 font-medium">5.0</span>
      </div>

      {/* Testimonial Quote */}
      <blockquote className="text-xl md:text-2xl text-slate-800 leading-relaxed mb-8 font-medium">
        "{testimonial.description}"
      </blockquote>

      {/* Person Info & Stats */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Person Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              {testimonial.name}
            </h4>
            <p className="text-slate-600 text-sm">
              {testimonial.designation} at{" "}
              <span className="font-semibold text-blue-600">
                {testimonial.company}
              </span>
            </p>
          </div>
        </div>

        {/* Key Stats */}
        <div className="flex gap-6 md:gap-8">
          {testimonial.stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      designation: "CEO & Founder",
      company: "Kumar Enterprises",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      description:
        "IndianGoods transformed our supply chain completely. The verified wholesaler network and transparent pricing helped us scale our business 3x faster than we ever imagined.",
      stats: [
        { value: "3.65x", label: "Revenue Growth" },
        { value: "98%", label: "Success Rate" },
        { value: "100+", label: "Suppliers" },
      ],
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Operations Manager",
      company: "Global Textiles",
      image:
        "https://plus.unsplash.com/premium_photo-1681074963522-00ca908dce4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
      description:
        "The platform's verified wholesaler network is incredible. We've built lasting partnerships that have transformed our entire supply chain operations and reduced costs significantly.",
      stats: [
        { value: "2.8x", label: "Efficiency" },
        { value: "95%", label: "On-Time Delivery" },
        { value: "25+", label: "Categories" },
      ],
    },
    {
      id: 3,
      name: "Amit Patel",
      designation: "Purchase Director",
      company: "Patel Industries",
      image: "/northIndian.png",
      description:
        "Trust and transparency are what set IndianGoods apart. Every transaction is smooth, every supplier is verified, and the support team is always there when we need them.",
      stats: [
        { value: "24/7", label: "Support" },
        { value: "99.2%", label: "Satisfaction" },
        { value: "500+", label: "Orders" },
      ],
    },
    {
      id: 4,
      name: "Sneha Reddy",
      designation: "Business Owner",
      company: "Reddy Exports",
      image: "/sneha-reddy.png",
      description:
        "As a growing business, finding reliable suppliers was our biggest challenge. IndianGoods made it simple and cost-effective to scale our operations beyond our expectations.",
      stats: [
        { value: "4.2x", label: "Growth" },
        { value: "150%", label: "Revenue Jump" },
        { value: "30+", label: "Partners" },
      ],
    },
  ];

  // Auto scroll with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              10,000+
            </span>{" "}
            Businesses
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how manufacturers and wholesalers across India are growing their
            businesses with our platform.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="relative min-h-[400px] md:min-h-[350px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={index === currentIndex}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-3 bg-blue-600"
                  : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
