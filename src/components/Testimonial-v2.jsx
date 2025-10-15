import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "IndianGoods transformed our supply chain completely. The verified wholesaler network and transparent pricing helped us scale our business 3x faster than we ever imagined.",
      name: "Rajesh Kumar",
      designation: "CEO & Founder at Kumar Enterprises",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      stats: [
        { value: "3.65x", label: "Revenue Growth" },
        { value: "98%", label: "Success Rate" },
        { value: "100+", label: "Suppliers" },
      ],
    },
    {
      quote:
        "The platform's verified wholesaler network is incredible. We've built lasting partnerships that have transformed our entire supply chain operations and reduced costs significantly.",
      name: "Priya Sharma",
      designation: "Operations Manager at Global Textiles",
      src: "https://plus.unsplash.com/premium_photo-1681074963522-00ca908dce4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
      stats: [
        { value: "2.8x", label: "Efficiency" },
        { value: "95%", label: "On-Time Delivery" },
        { value: "25+", label: "Categories" },
      ],
    },
    {
      quote:
        "Trust and transparency are what set IndianGoods apart. Every transaction is smooth, every supplier is verified, and the support team is always there when we need them.",
      name: "Amit Patel",
      designation: "Purchase Director at Patel Industries",
      src: "/northIndian.png",
      stats: [
        { value: "24/7", label: "Support" },
        { value: "99.2%", label: "Satisfaction" },
        { value: "500+", label: "Orders" },
      ],
    },
    {
      quote:
        "As a growing business, finding reliable suppliers was our biggest challenge. IndianGoods made it simple and cost-effective to scale our operations beyond our expectations.",
      name: "Sneha Reddy",
      designation: "Business Owner at Reddy Exports",
      src: "/sneha-reddy.png",
      stats: [
        { value: "4.2x", label: "Growth" },
        { value: "150%", label: "Revenue Jump" },
        { value: "30+", label: "Partners" },
      ],
    },
  ];
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#0f172a] to-blue-700 bg-clip-text text-transparent">
              10,000+
            </span>{" "}
            Businesses
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how manufacturers and wholesalers across India are growing their
            businesses with our platform.
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </div>
  );
}
