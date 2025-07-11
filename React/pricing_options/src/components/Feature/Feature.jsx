import React from 'react';
import { SiTicktick } from "react-icons/si";

const Feature = ({feature}) => {
  return (
    <div>
      <p className='flex gap-2'><SiTicktick />{feature}</p>
    </div>
  );
};

export default Feature;
