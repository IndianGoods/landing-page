import { Star } from "lucide-react";

function Stats() {
  return (
    <section className="bg-[#0f172a] w-full flex items-center justify-center">
      <div className="my-12 md:my-20 max-w-7xl px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-20">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold font-oswald text-white leading-tight">
            Get to know more about IndianGoods
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-md lg:max-w-none">
            With a commitment to security and efficiency, our services ensure
            your financial transactions are seamless and secure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 lg:mt-18">
          <div className="bg-gray-100 px-6 md:px-8 py-8 md:py-12 rounded-2xl text-center space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold font-oswald">
              234 <span className="align-super text-2xl md:text-4xl">M</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-lg">
              Supporting multiple currencies for users
            </p>
          </div>
          <div className="bg-gray-900 border border-white px-6 md:px-8 py-8 md:py-12 rounded-2xl text-center space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold font-oswald">
              768{" "}
              <span className="text-2xl md:text-4xl align-super text-yellow-300">K</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg">
              Gaining new users every single month.
            </p>
          </div>
          <div className="bg-gray-100 px-6 md:px-8 py-8 md:py-12 rounded-2xl text-center space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold font-oswald">
              5.0 <Star className="inline align-super w-6 h-6 md:w-8 md:h-8" />
            </h1>
            <p className="text-gray-600 text-sm md:text-lg">
              High star ratings from satisfied users.
            </p>
          </div>
          <div className="bg-gray-900 border border-white text-white px-6 md:px-8 py-8 md:py-12 rounded-2xl text-center space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold font-oswald">
              $8.8 <span className="text-2xl md:text-4xl align-super">B</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg">
              Generating increased revenue consistently
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
