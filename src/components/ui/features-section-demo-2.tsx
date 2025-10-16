import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description: "Simple, intuitive, and powerful for everyone.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Affordable Pricing",
      description:
        "Best in the market. Transparent and flexible for all business sizes.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime Guarantee",
      description: "Our systems are designed for reliability and performance.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Architecture",
      description:
        "Easily expand your business without worrying about infrastructure.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Always here for you — day, night, and everything in between.",
      icon: <IconHelp />,
    },
    {
      title: "Money Back Guarantee",
      description: "If you're not satisfied, we’ll make it right.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And Much More",
      description:
        "Continuously improving to give you the best experience possible.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-orange-100 py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l border-orange-100",
        index < 4 && "lg:border-b border-orange-100"
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-[#fff4e6] to-transparent pointer-events-none"
        )}
      />

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-[#f97415] group-hover/feature:text-[#ff8c33] transition-colors duration-200">
        {icon}
      </div>

      {/* Title with orange left bar */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-orange-200 group-hover/feature:bg-[#f97415] transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition-transform duration-300 inline-block text-[#1e293b]">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
