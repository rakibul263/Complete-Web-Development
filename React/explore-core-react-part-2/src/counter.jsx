import { useState } from "react"

export default function Counter(){
    const [count, setCount]= useState(0);

    const handelAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const counterStyle = {
        border : '2px solid orange',
        borderRadius : '30px',
    }
    return (
        <div style={counterStyle}>
            <h3>Count : {count}</h3>
            <button onClick={handelAdd}>Add</button>
        </div>
    )
}