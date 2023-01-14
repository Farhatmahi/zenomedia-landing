import React, { useEffect, useState } from "react";
import Card from "./Card";
import ClientCard from "./ClientCard";

const Clients = () => {
  const [featureData, setFeatureData] = useState([]);
  useEffect(() => {
    fetch("Clients.json")
      .then((res) => res.json())
      .then((data) => setFeatureData(data));
  }, []);

  return (
    <div className="relative container mx-auto">
      <div className="border-4 bg-[#0cbe8c43] border-primary w-36 h-36 absolute z-0 top-20 left-0 rounded-2xl"></div>
      <div className="p-4 md:p-6 relative z-10">
        <div className="flex flex-col rounded-xl container mx-auto px-4 bg-white md:p-20">
          <div className="text-left space-y-8">
            <h1 className="text-5xl font-bold text-primary">
              Our Client know best
            </h1>
            <p className="text-gray-500 font-medium text-lg w-1/2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureData.map((data) => (
                <ClientCard key={data._id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
