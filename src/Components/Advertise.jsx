import React from "react";

const Advertise = () => {
  return (
    <div className="relative container mx-auto">
      <div className="bg-primary w-36 h-36 absolute top-0 left-0 rounded-2xl"></div>
      <div className="relative p-10 z-50">
        <div className="rounded-xl container mx-auto px-4 bg-white md:p-20">
          <div className="text-left space-y-8">
            <h1 className="text-5xl font-bold text-primary">
              Advertise better with Zeno
            </h1>
            <p className="text-gray-500 font-medium text-lg">
              Our team consists of unorthodox thinkers, all with diverse
              background
            </p>
            <button className="bg-white border-2 border-primary text-lg font-semibold text-primary px-8 py-2 rounded-3xl hover:bg-primary hover:text-white transition duration-300 ease-in-out">
              Try now
            </button>
          </div>
        </div>
      </div>
      <div className="border-4 bg-[#0cbe8c43] border-primary w-36 h-36 absolute bottom-0 right-0 rounded-2xl"></div>
    </div>
  );
};

export default Advertise;
