import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card  bg-[#b6eade]">
      <div className="card-body p-0">
        <h2 className="card-title text-[#0a805e] text-3xl font-bold mt-4 ml-4">
          {data.title}
        </h2>
        <p className="text-primary font-semibold leading-6 text-lg mt-2 ml-4">
          {data.description}
        </p>
        <div className="card-actions justify-start mt-4">
        <img src="https://i.ibb.co/rdPBdv9/Repeat-Grid-1.png" className="w-28" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
