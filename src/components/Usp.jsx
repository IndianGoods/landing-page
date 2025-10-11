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
          <h1 className="text-4xl md:text-6xl uppercase font-oswald font-semibold text-center md:text-start">
            Let's Start sending your money
          </h1>
          <p className="text-gray-600 md:text-lg leading-snug">
            Integraing advanced technologies, fintech reshapes the financial
            landscape, making it more user-friendly and adaptive to modern
            needs.
          </p>

          <div className="mt-10 space-y-2 md:space-y-4">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-gray-200 p-2 rounded-2xl">
                <HelpingHandIcon className="w-6 md:w-8 h-6 md:h-8 text-gray-800" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold">
                Access 24/7 Customer Support
              </h1>
            </div>
            <p className="text-gray-600">
              Get assistance anytime with our dedicated support team ready to
              help with any issues or questions
            </p>
          </div>
          <div className="mt-10 space-y-2 md:space-y-4">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-gray-200 p-2 rounded-2xl">
                <Crosshair className="w-6 md:w-8 h-6 md:h-8 text-gray-800" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold">
                Track Transition in Real-Time
              </h1>
            </div>
            <p className="text-gray-600">
              Monitor the status of your transactions with instant updates and
              notifications
            </p>
          </div>
        </div>

        <div className="w-full h-auto ">
          <img src="./card-image.jpeg" alt="" className="rounded-3xl" />
        </div>
      </div>
      <div className="max-w-7xl my-16 px-12 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
        <div className="w-full h-auto object-cover">
          <img src="./card-image.jpeg" alt="" className="rounded-3xl" />
        </div>
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl uppercase font-oswald font-semibold text-center md:text-start">
            Save your time and money with us
          </h1>
          <p className="text-gray-600 md:text-lg leading-snug">
            We gives you the blocks needed to create a truly professional
            website for your SaaS is a long established fact that a reader
          </p>

          <div className="mt-10 space-y-2 md:space-y-4">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-gray-200 p-2 rounded-2xl">
                <CreditCardIcon className="w-6 md:w-8 h-6 md:h-8 text-gray-800" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold">
                Loan and Credit Management
              </h1>
            </div>
            <p className="text-gray-600">
              Get assistance anytime with our dedicated support team ready to
              help with any issues or questions
            </p>
          </div>
          <div className="mt-10 space-y-2 md:space-y-4">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-gray-200 p-2 rounded-2xl">
                <DollarSignIcon className="w-6 md:w-8 h-6 md:h-8 text-gray-800" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold">
                Multi-Currency Accounts
              </h1>
            </div>
            <p className="text-gray-600">
              Monitor the status of your transactions with instant updates and
              notifications
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usp;
