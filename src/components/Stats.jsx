import { Star } from "lucide-react";

function Stats() {
  return (
    <div className="my-20 max-w-7xl px-12">
      <div className="flex items-center justify-between gap-20">
        <h1 className="uppercase text-4xl md:text-6xl font-semibold font-oswald">
          Get to know more about IndianGoods
        </h1>
        <p className="text-gray-600 text-lg ">
          With a commitment to security and efficiency, our services ensure your
          financial transactions are seamless and secure
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-8 mt-18">
        <div className="bg-gray-100 w-68 px-8 py-12 rounded-2xl text-center space-y-6">
          <h1 className="text-6xl font-semibold font-oswald">
            234 <span className="align-super text-4xl">M</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Supporting multiple currencies for users
          </p>
        </div>
        <div className="bg-gray-900  w-68 px-8 py-12 rounded-2xl text-center space-y-6">
          <h1 className="text-6xl text-white font-semibold font-oswald">
            768 <span className="text-4xl align-super text-yellow-300">K</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Gaining new users every single month.
          </p>
        </div>
        <div className="bg-gray-100  w-68 px-8 py-12 rounded-2xl text-center space-y-6">
          <h1 className="text-6xl font-semibold font-oswald">
            5.0 <Star className="inline align-super" />
          </h1>
          <p className="text-gray-600 text-lg">
            High star ratings from satisfied users.
          </p>
        </div>
        <div className="bg-gray-100  w-68 px-8 py-12 rounded-2xl text-center space-y-6">
          <h1 className="text-6xl font-semibold font-oswald">
            $8.8 <span className="text-4xl align-super">B</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Generating increased revenue consistenly
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
