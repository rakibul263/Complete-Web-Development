import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]=useState(0);
    const handelSingles = () =>{
        const newRuns = runs + 1;
        setRuns(newRuns);
    }
    const handelFour = () => {
        const newRuns = runs + 4;
        setRuns(newRuns);
    }
    const handelSix = () => {
        const newRuns = runs + 6;
        setRuns(newRuns);
    }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handelSingles}>Singls</button>
            <button onClick={handelFour}>Four</button>
            <button onClick={handelSix}>Six</button>
        </div>
    )
}