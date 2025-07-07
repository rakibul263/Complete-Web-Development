import React, { useState } from 'react';

const Counter = () => {
    const card = {
        border: '2px solid orange',
        padding: '20px',
        margin: '50px'
    }
    const [count, setCount] = useState(0);

    function _count() {
        setCount(count + 1);
    }



    return (
        <div style={card}>
            <h3>Count: {count}</h3>
            <button onClick={_count}>Add</button>
        </div>
    );
};

export default Counter;