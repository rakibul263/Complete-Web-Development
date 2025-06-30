import React from 'react';

function printHello(event){
    console.log("Hello, World!");
    console.log(event);
}

function printBye(){
    console.log("Goodbye, World!");
}

function printDoubleClick(){
    console.log("Button was double-clicked!");
}

const Button = () => {
    return (
        <div>
            <button onClick={printHello}>Click Me</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a.</p>
            <button onDoubleClick={printDoubleClick}>Another Click</button>
        </div>
    );
};

export default Button;