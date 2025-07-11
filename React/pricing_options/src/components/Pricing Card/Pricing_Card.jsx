import React from "react";
import Feature from "../Feature/Feature";

const Pricing_Card = ({ pricing }) => {
  console.log(pricing);
  const { title, price, description, features } = pricing;
  return (
    <div>
      <div className="border bg-amber-200 rounded-3xl p-4 h-full m-6 flex flex-col">
        <div>
          <h1 className="text-7xl">{title}</h1>
          <h4 className="text-3xl">{price}</h4>
        </div>
        <div className="bg-amber-300 p-4 rounded-2xl mt-4 flex-1">
          <p>{description}</p>
          {features.map((feature, index) => (
            <Feature key={index} feature={feature}></Feature>
          ))}
        </div>
        <div>
          <button className="btn w-full rounded-2xl mt-4 bg-gray-800 text-white font-bold border-none hover:drop-shadow-2xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing_Card;
