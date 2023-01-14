import React, { useEffect, useState } from "react";
import Card from "./Card";

const Features = () => {
  const [featureData, setFeatureData] = useState([]);
  useEffect(() => {
    fetch("FeatureCardData.json")
      .then((res) => res.json())
      .then((data) => setFeatureData(data));
  }, []);

  return (
    <div className="relative container mx-auto">
      <div className="bg-primary w-36 h-36 absolute z-0 top-20 left-6 rounded-2xl"></div>
      <div className="p-10 relative z-10">
        <div className="flex flex-col rounded-xl container mx-auto px-4 bg-white md:p-20">
          <div className="text-left space-y-8">
            <h1 className="text-5xl font-bold text-primary">
              Features you need
            </h1>
            <p className="text-gray-500 font-medium text-lg w-1/2">
              No depending be convinced in unfeeling he. Excellence she
              unaffected and too sentiments her. Rooms he doors there ye aware
              in by shall.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureData.map((data) => (
                <Card key={data._id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
