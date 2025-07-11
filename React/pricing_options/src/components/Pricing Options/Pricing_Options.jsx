import React, { use } from "react";
import Pricing_Card from "../Pricing Card/Pricing_Card";

const Pricing_Options = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <h2 className="text-5xl">Get Our Membership</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingData.map((pricing) => (
          <Pricing_Card key={pricing.id} pricing={pricing}></Pricing_Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing_Options;
