import React from "react";

const ClientCard = ({ data }) => {
  return (
    <div className="card card-compact bg-[#0cbe8c43]">
      <div className="card-body">
        <h2 className="card-title text-[#0a805e] text-3xl font-bold">
          {data.title}
        </h2>
        <p className="text-primary font-semibold leading-6 text-lg">
          {data.description}
        </p>
        <div className="card-actions justify-between">
          <img src="" alt="" />
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
