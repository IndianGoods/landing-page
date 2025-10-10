import { useState, useEffect } from "react";

const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="white" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="white" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const ImageCard = ({ image, name }) => (
  <div className="rounded-2xl md:rounded-4xl overflow-hidden w-full max-w-[280px] sm:max-w-[320px] md:w-64 h-[250px] sm:h-[280px] md:h-[300px] flex-shrink-0 border border-gray-200">
    <img src={image} alt={name} className="w-full h-full object-cover" />
  </div>
);

const ContentCard = ({ testimonial }) => (
  <div className="bg-white rounded-2xl w-full max-w-[320px] sm:max-w-[400px] md:max-w-4xl h-auto min-h-[250px] sm:min-h-[280px] md:h-[300px] p-4 sm:p-6 md:p-8 flex flex-col justify-between border border-gray-200 shadow-sm">
    {/* Upper Section */}
    <div className="space-y-2 sm:space-y-3">
      {/* Name & Role */}
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {testimonial.name}
        </h3>
        <p className="text-[#2563eb] font-medium text-xs sm:text-sm mt-1">
          {testimonial.designation} @ {testimonial.company}
        </p>
      </div>

      {/* Heading / Highlight */}
      {testimonial.heading && (
        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#3b82f6] my-1 sm:my-2">
          {testimonial.heading}
        </h4>
      )}

      {/* Description */}
      <p className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-3">
        {testimonial.description}
      </p>
    </div>

    {/* Stats Section */}
    {testimonial.stats?.length > 0 && (
      <div className="flex gap-3 sm:gap-4 md:gap-8 mt-3 sm:mt-4 flex-wrap border-t border-gray-100 pt-3 sm:pt-4">
        {testimonial.stats.slice(0, 3).map((stat, index) => (
          <div key={index} className="flex flex-col min-w-[60px] sm:min-w-[70px] flex-1">
            <span className="text-[#2563eb] font-semibold text-base sm:text-lg md:text-xl">
              {stat.value}
            </span>
            <span className="text-gray-500 text-[10px] sm:text-xs mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);




const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      designation: "CEO & Founder",
      company: "Kumar Enterprises",
      heading: "Driving Growth with Data",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      description:
        "Insights from regional sales data inform strategic decisions such as market expansion, product launches, and form the promotional campaigns.",
      stats: [
        {
          value: "3.65x",
          label: "Yearly Revenue",
          description: "Another way to grow fast",
        },
        {
          value: "98%",
          label: "Monthly Conversions",
          description: "On our website",
        },
        {
          value: "100+",
          label: "Verified Suppliers",
          description: "Across India",
        },
      ],
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Operations Manager",
      company: "Global Textiles",
      heading: "Driving Growth with Data",
      image:
        "https://plus.unsplash.com/premium_photo-1681074963522-00ca908dce4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The platform's verified wholesaler network is incredible. We've built lasting partnerships that have transformed our entire supply chain operations.",
      stats: [
        {
          value: "2.8x",
          label: "Operational Efficiency",
          description: "Streamlined processes",
        },
        {
          value: "95%",
          label: "On-Time Delivery",
          description: "Customer satisfaction",
        },
        {
          value: "25+",
          label: "Product Categories",
          description: "Available now",
        },
      ],
    },
    {
      id: 3,
      name: "Amit Patel",
      designation: "Purchase Director",
      company: "Patel Industries",
      heading: "Driving Growth with Data",
      image: "/northIndian.png",
      description:
        "Trust and transparency are what set IndianGoods apart. Every transaction is smooth and every supplier is thoroughly verified for our peace of mind.",
      stats: [
        {
          value: "24/7",
          label: "Support Available",
          description: "Round the clock",
        },
        {
          value: "99.2%",
          label: "Client Satisfaction",
          description: "Verified reviews",
        },
        {
          value: "500+",
          label: "Successful Orders",
          description: "This quarter",
        },
      ],
    },
    {
      id: 4,
      name: "Sneha Reddy",
      designation: "Business Owner",
      company: "Reddy Exports",
      heading: "Driving Growth with Data",
      image: "/sneha-reddy.png",
      description:
        "As a growing business, finding reliable suppliers was our biggest challenge. IndianGoods made it simple and cost-effective to scale our operations.",
      stats: [
        {
          value: "4.2x",
          label: "Business Growth",
          description: "Year over year",
        },
        {
          value: "150%",
          label: "Revenue Increase",
          description: "Last 12 months",
        },
        {
          value: "30+",
          label: "Partner Suppliers",
          description: "Verified network",
        },
      ],
    },
  ];

  // Auto scroll
  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoScrolling, testimonials.length]);

  const nextSlide = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoScrolling(true), 12000);
  };

  const prevSlide = () => {
    setIsAutoScrolling(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAutoScrolling(true), 12000);
  };

  const goToSlide = (index) => {
    setIsAutoScrolling(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoScrolling(true), 12000);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#f8fafc] w-full">
      <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What our Partners Say
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Discover how businesses across India are transforming their
            operations with our trusted wholesale platform.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Desktop Layout - Hidden on mobile/tablet */}
          <div className="hidden md:flex items-start justify-center gap-8 lg:gap-12">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#2563eb] p-3 rounded-full flex items-center justify-center hover:bg-[#1e40af] z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Card */}
            <ImageCard
              image={testimonials[currentIndex].image}
              name={testimonials[currentIndex].name}
            />

            {/* Content Card */}
            <ContentCard testimonial={testimonials[currentIndex]} />

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2563eb] p-3 rounded-full flex items-center justify-center hover:bg-[#1e40af] z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile & Tablet Layout - Stacked vertically */}
          <div className="md:hidden">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* Image Card */}
              <ImageCard
                image={testimonials[currentIndex].image}
                name={testimonials[currentIndex].name}
              />

              {/* Content Card */}
              <ContentCard testimonial={testimonials[currentIndex]} />
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="bg-[#2563eb] p-2.5 sm:p-3 rounded-full flex items-center justify-center hover:bg-[#1e40af] transition-colors shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#2563eb] p-2.5 sm:p-3 rounded-full flex items-center justify-center hover:bg-[#1e40af] transition-colors shadow-lg active:scale-95"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "w-6 sm:w-8 h-2 bg-[#2563eb]"
                  : "w-2 h-2 bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
