import {
  CreditCardIcon,
  Crosshair,
  DollarSignIcon,
  HelpingHandIcon,
} from "lucide-react";

function Usp() {
  return (
    <>
      <div className="max-w-7xl my-16 px-12 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl uppercase font-oswald font-semibold text-center md:text-start text-slate-800">
            Let's Start{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              sending your money
            </span>
          </h1>
          <p className="text-slate-600 md:text-lg leading-snug">
            Integrating advanced technologies, fintech reshapes the financial
            landscape, making it more user-friendly and adaptive to modern
            needs.
          </p>

          <div className="mt-10 space-y-2 md:space-y-4">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-2xl shadow-lg">
                <HelpingHandIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
                Access 24/7 Customer Support
              </h1>
            </div>
            <p className="text-slate-600">
              Get assistance anytime with our dedicated support team ready to
              help with any issues or questions
            </p>
          </div>
          <div className="mt-10 space-y-2 md:space-y-4">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-2xl shadow-lg">
                <Crosshair className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
                Track Transition in Real-Time
              </h1>
            </div>
            <p className="text-slate-600">
              Monitor the status of your transactions with instant updates and
              notifications
            </p>
          </div>
        </div>

        <div className="w-full h-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img src="./card-image.jpeg" alt="Financial Management" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl my-16 px-12 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
        <div className="w-full h-auto object-cover">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img src="./card-image.jpeg" alt="Money Management" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl uppercase font-oswald font-semibold text-center md:text-start text-slate-800">
            Save your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              time and money
            </span>{" "}
            with us
          </h1>
          <p className="text-slate-600 md:text-lg leading-snug">
            We give you the blocks needed to create a truly professional
            website for your SaaS. It's a long established fact that a reader
            will benefit from our innovative solutions.
          </p>

          <div className="mt-10 space-y-2 md:space-y-4">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-2xl shadow-lg">
                <CreditCardIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
                Loan and Credit Management
              </h1>
            </div>
            <p className="text-slate-600">
              Get assistance anytime with our dedicated support team ready to
              help with any issues or questions
            </p>
          </div>
          <div className="mt-10 space-y-2 md:space-y-4">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-2 rounded-2xl shadow-lg">
                <DollarSignIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
                Multi-Currency Accounts
              </h1>
            </div>
            <p className="text-slate-600">
              Monitor the status of your transactions with instant updates and
              notifications across multiple currencies
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usp;
