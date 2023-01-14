import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="border-l-8 border-primary"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl container mx-auto p-8 bg-white md:p-20">
        <div className="flex flex-col justify-center md:justify-start text-center lg:text-left space-y-8">
          <h1 className="text-3xl md:text-5xl  font-bold text-primary">
            We help your company
            <br /> to grow it by making it visible through
          </h1>
          <p className="text-gray-500 font-medium text-lg md:pr-40">
            Zeno Media offers broadcasters solutions to power their radio
            station and is proudly the largest diaspora focused streaming
            company in the world. Connecting immigrant diaspora communities to
            their favourite stations is our speciality
          </p>
          <button className="bg-white w-full md:w-36 border-2 border-primary text-xl font-semibold text-primary px-8 py-2 rounded-3xl hover:bg-primary hover:text-white transition duration-300 ease-in-out">
            Try now
          </button>
        </div>
        <img
          src="https://i.ibb.co/KWF4LjT/hh-2x.png"
          className="w-full object-cover"
          alt="banner"
        />
      </div>
    </motion.div>
  );
};

export default Banner;
