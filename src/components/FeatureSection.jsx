import { CreditCard, Command, FileText } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#F9FAF9] py-16">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-center gap-12 md:gap-0 px-6">
        {/* Credit Card */}
        <div className="flex-1 flex flex-col items-center text-center px-6 md:px-8 relative">
          <div className="bg-[#3D6156] rounded-full p-4 mb-4 w-18 md:w-22 flex items-center justify-center">
            <CreditCard className="text-white w-6 md:w-8 h-6 md:h-8" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-3">
            Credit card
          </h3>
          <p className="text-[#666] leading-relaxed max-w-xs">
            Rewards . and benifits without the downsides of a credit card.
            Simplicity and transparency built right in.
          </p>
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-40 bg-[#EAEAEA]"></div>
        </div>

        {/* Management */}
        <div className="flex-1 flex flex-col items-center text-center px-6 md:px-8 relative">
          <div className="bg-[#4DA179] rounded-full p-4 mb-4 w-18 md:w-22 flex items-center justify-center">
            <Command className="text-white w-6 md:w-8 h-6 md:h-8" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-3">
            Management
          </h3>
          <p className="text-[#666] leading-relaxed max-w-xs">
            Institutional-grade fund offerings across active and passive
            strategies to get in paid flash payments.
          </p>
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-40 bg-[#EAEAEA]"></div>
        </div>

        {/* Application */}
        <div className="flex-1 flex flex-col items-center text-center px-6 md:px-8">
          <div className="bg-[#3D6156] rounded-full p-4 mb-4 w-18 md:w-22 flex items-center justify-center">
            <FileText className="text-white w-6 md:w-8 h-6 md:h-8" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-3">
            Application
          </h3>
          <p className="text-[#666] leading-relaxed max-w-xs">
            Mobile banking throws out the rules book and give you a precision
            tool for managing your finances.
          </p>
        </div>
      </div>
    </section>
  );
}
