import React from "react";

const ClientCard = ({ data }) => {
  return (
    <div className="card pt-4 bg-[#b6eade]">
      <div className="card-body p-0">
        <div className="flex items-center gap-4 pl-4">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={data.image} alt='' />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg text-[#0a805e] font-bold">{data.name}</h1>
            <h2 className="text-md text-[#0a805e]">{data.position}</h2>
          </div>
        </div>
        <p className="text-primary font-semibold leading-6 text-md px-4">
          {data.description}
        </p>
        <div className="card-actions justify-between items-end mt-4">
          <img src="https://i.ibb.co/rdPBdv9/Repeat-Grid-1.png" className="w-28" alt="" />
          <div className="rounded-full bg-primary w-16 h-16 flex justify-center items-center mr-4 mb-4">
            <img
              src="https://i.ibb.co/2ZBmD9Z/quotation-mark.png"
              className="w-8"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
