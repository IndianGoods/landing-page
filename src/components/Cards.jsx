function Cards() {
  return (
    <div className="max-w-7xl my-20 px-6 md:px-12">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-3xl md:text-5xl uppercase font-oswald font-bold text-center leading-snug text-slate-800">
          Protect your investments with{" "}
          <span className="inline md:block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            exacting precision.
          </span>
        </h1>
        <p className="text-center text-base md:text-xl text-slate-600 max-w-3xl">
          Our expert team offers personalized guidance, helping you{" "}
          <span className="inline md:block">
            navigate your financial journey with confidence
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img src="./card-image.jpeg" alt="Investment Protection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img src="./card-image.jpeg" alt="Financial Security" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img src="./card-image.jpeg" alt="Expert Guidance" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
