import { useState } from "react";

export default function Counter(){
    const [count, setCount]= useState(0);

    const handelAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const CounterStyle = {
        border:'2px solid orange',
        borderRadius: '30px',
        padding: '10px',
    }
    return (
        <div style={CounterStyle}>
            <h4>Count : {count}</h4>
            <button onClick={handelAdd}>Add</button>
        </div>
    )
}