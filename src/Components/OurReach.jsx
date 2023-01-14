import React from "react";

const OurReach = () => {
  return (
    <div className="flex flex-col-reverse rounded-xl bg-white pt-20">
      <img
        src="https://i.ibb.co/1vsg64f/Group-29-2x.png"
        className="w-full object-cover p-20"
        alt="banner"
      />
      <div className="text-left space-y-8 border-l-8 border-primary pl-10 pr-4 md:pl-28">
        <h1 className="text-5xl font-bold text-primary">Our Reach</h1>
        <p className="text-gray-500 font-medium text-lg">
          Advertising on our platform gives you direct access to the audience
          you wish to target.
        </p>
        <button className="bg-white border-2 border-primary text-lg font-semibold text-primary px-8 py-2 rounded-3xl hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Try now
        </button>
      </div>
    </div>
  );
};

export default OurReach;
