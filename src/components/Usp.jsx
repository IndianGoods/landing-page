import {
  CreditCardIcon,
  Crosshair,
  DollarSignIcon,
  HelpingHandIcon,
} from "lucide-react";

function Usp() {
  return (
    <section
      className=" bg-gray-100 w-full flex flex-col items-center justify-center"
      style={{ background: "var(--bg-gradient-light)" }}
    >
      <div className="max-w-7xl my-16 px-12 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl uppercase font-oswald font-semibold text-center md:text-start text-slate-800">
            Let's Start{" "}
            {/* <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> */}
            sending your money
            {/* </span> */}
          </h1>
          <p className="text-slate-600 md:text-lg leading-snug">
            Send money securely and track every transaction in real time —
            anywhere, anytime.
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
            <img
              src="https://placehold.co/400?text=Placeholder"
              alt="Financial Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
      <div className="bg-[#f0f6ff] w-full flex items-center justify-center">
        <div className="max-w-7xl my-16 px-12 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl uppercase font-oswald font-semibold text-center md:text-start text-slate-800">
              Save your{" "}
              {/* <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> */}
              time and money with us
              {/* </span>{" "} */}
            </h1>
            <p className="text-slate-600 md:text-lg leading-snug">
              Build your SaaS site faster with ready-to-use professional tools
              and automated workflows.
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
          <div className="w-full h-auto object-cover">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://placehold.co/400?text=Placeholder"
                alt="Money Management"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Usp;
