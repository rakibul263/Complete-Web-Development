import { Check } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex gap-1'><Check></Check>{feature}</p>
    );
};

export default PricingFeature;