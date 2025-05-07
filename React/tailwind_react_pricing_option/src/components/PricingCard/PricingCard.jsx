import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    const {name, price, description, features} = pricing;
    return (
        <div className='border-2 border-amber-600 p-4 rounded-lg p-5 bg-amber-600 text-yellow-100 flex flex-col'>
            <div>
                <h1 className='text-6xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-amber-500 p-4 rounded-lg mt-4 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;