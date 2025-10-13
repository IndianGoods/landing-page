import { CreditCard, Command, FileText } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section
      className="w-full bg-slate-50 py-16"
      style={{ background: "var(--bg-gradient-light)" }}
    >
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-center gap-12 md:gap-0 px-6">
        {/* Credit Card */}
        <div className="flex-1 flex flex-col items-center text-center px-6 md:px-8 relative ">
          <div className="pb-2 ">
            <CreditCard className="text-black w-6 md:w-10 h-6 md:h-10" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
            Credit card
          </h3>
          <p className="text-slate-600 leading-relaxed max-w-xs">
            Rewards and benefits without the downsides of a credit card.
            Simplicity and transparency built right in.
          </p>
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-40 bg-slate-200"></div>
        </div>

        {/* Management */}
        <div className="flex-1 flex flex-col items-center text-center px-6 md:px-8 relative">
          {/* <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-4 mb-4 w-18 md:w-22 flex items-center justify-center shadow-lg"> */}
          <div className="pb-2">
            <Command className="text-black w-6 md:w-10 h-6 md:h-10" />
          </div>
          {/* </div> */}
          <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
            Management
          </h3>
          <p className="text-slate-600 leading-relaxed max-w-xs">
            Institutional-grade fund offerings across active and passive
            strategies to get in paid flash payments.
          </p>
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-40 bg-slate-200"></div>
        </div>

        {/* Application */}
        <div className="flex-1 flex flex-col items-center text-center px-6 md:px-8">
          {/* <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-full p-4 mb-4 w-18 md:w-22 flex items-center justify-center shadow-lg"> */}
          <div className="pb-2">
            <FileText className="text-black w-6 md:w-10 h-6 md:h-10" />
          </div>
          {/* </div> */}
          <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
            Application
          </h3>
          <p className="text-slate-600 leading-relaxed max-w-xs">
            Mobile banking throws out the rules book and give you a precision
            tool for managing your finances.
          </p>
        </div>
      </div>
    </section>
  );
}
