import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseValue = () => {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <div>
            <h1>Use State</h1>
            <h1>Value : {count}</h1>
            <button onClick={increaseValue}>Increase Value</button>
        </div>
    );
};

export default Counter;