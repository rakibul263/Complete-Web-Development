import React, { useState } from 'react';

const Counter = () => {
    const [score, setScore] = useState(0);

    function _add() {
        setScore(score + 1);
    }
    function _minus() {
        setScore(score - 1);
    }
    function _clear(){
        setScore(0);
    }
    return (
        <div>
            <h2>State And Event Handling</h2>
            <h1>Score : {score}</h1>
            <button onClick={_add}>+1</button>
            <button onClick={_minus}>-1</button>
            <button onClick={_clear}>Clear</button>
        </div>
    );
};

export default Counter;