import React from 'react';

function spreadOperator() {
    const number1 = [1, 2, 3];
    const number2 = [4, 5, 6];
    const combinedNumbers = [...number1, ...number2];
    console.log(combinedNumbers);
}

const ES6 = () => {
    return (
        <div>
            <h1>Hello, ES6!</h1>
            <button onClick={spreadOperator}>Spread Operator</button>
        </div>
    );
};

export default ES6;