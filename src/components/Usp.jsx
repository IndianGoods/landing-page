import { CreditCard, Target, DollarSign, HandHeart } from "lucide-react";
import { TiltedScroll } from "./ui/tilted-scroll";

function Usp() {
  const financialFeatures = [
    { id: "1", text: "Secure Transactions" },
    { id: "2", text: "Real-time Tracking" },
    { id: "3", text: "24/7 Customer Support" },
    { id: "4", text: "Multi-Currency Support" },
    { id: "5", text: "Instant Approvals" },
    { id: "6", text: "Global Operations" },
    { id: "7", text: "Enterprise Security" },
    { id: "8", text: "Flexible Financing" },
  ];

  return (
    <section className="bg-[#fdfdfe] w-full">
      {/* First Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] leading-tight">
              Send Money with Confidence
            </h2>
            <p className="md:text-lg text-[#0f172a]/70 leading-relaxed">
              Secure transactions with real-time tracking. Enterprise-grade
              infrastructure for businesses that demand reliability.
            </p>

            {/* <div className="pt-6 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0f172a] rounded-lg flex items-center justify-center">
                  <HandHeart className="w-6 h-6 text-[#fdfdfe]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    24/7 Customer Support
                  </h3>
                  <p className="text-[#0f172a]/60 leading-relaxed">
                    Dedicated support team available around the clock to resolve
                    any issues
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0f172a] rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#fdfdfe]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    Real-Time Transaction Tracking
                  </h3>
                  <p className="text-[#0f172a]/60 leading-relaxed">
                    Complete visibility with instant updates and status
                    notifications
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="order-first lg:order-last">
            <div className="relative overflow-hidden bg-[#fdfdfe] p-8">
              <TiltedScroll
                items={financialFeatures}
                className="w-full h-full flex items-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      {/* <div className="bg-[#0f172a] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden border border-[#fdfdfe]/10">
                <img
                  src="https://placehold.co/600x500/fdfdfe/0f172a?text=Money+Management"
                  alt="Money Management"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#fdfdfe] leading-tight">
                Streamline Your Financial Operations
              </h2>
              <p className="text-lg text-[#fdfdfe]/70 leading-relaxed">
                Comprehensive tools designed for modern businesses. Manage
                multiple currencies and credit facilities from one platform.
              </p>

              <div className="pt-6 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#fdfdfe] rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-[#0f172a]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#fdfdfe]">
                      Loan and Credit Management
                    </h3>
                    <p className="text-[#fdfdfe]/60 leading-relaxed">
                      Flexible financing options with transparent terms and
                      instant approval workflows
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#fdfdfe] rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-[#0f172a]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#fdfdfe]">
                      Multi-Currency Accounts
                    </h3>
                    <p className="text-[#fdfdfe]/60 leading-relaxed">
                      Operate globally with support for 150+ currencies and
                      real-time exchange rates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Usp;
