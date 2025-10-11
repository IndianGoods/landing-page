function Cards() {
  return (
    <div className="max-w-7xl my-20 px-6 md:px-12">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-3xl md:text-5xl uppercase font-oswald font-bold text-center leading-snug ">
          Protect your investments with{" "}
          <span className="inline md:block">exacting precision.</span>
        </h1>
        <p className="text-center text-base md:text-xl text-gray-500">
          Our expert team offers personalized guidance, helping you{" "}
          <span className="inline md:block">
            navigate your financial journey with confidence
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <img src="./card-image.jpeg" alt="" className="rounded-3xl" />
        <img src="./card-image.jpeg" alt="" className="rounded-3xl" />
        <img src="./card-image.jpeg" alt="" className="rounded-3xl" />
      </div>
    </div>
  );
}

export default Cards;
