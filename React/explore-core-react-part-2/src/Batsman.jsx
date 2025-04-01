import { useState } from "react";

export default function Batsman () {
    const [runs, setRuns]= useState(0);
    const [six, setSixs]= useState(0);
    const [four, setFour] = useState(0);

    const handelSingles = () => {
        const updateRun = runs +  1;
        setRuns(updateRun);
    }

    const handelSix = () => {
        const updateRun = runs + 6;
        const updateSix = six + 1;
        setSixs(updateSix);
        setRuns(updateRun);
    }

    const handelFour = () => {
        const updateRun = runs + 4;
        const updateFour = four + 1;
        setFour(updateFour); 
        setRuns(updateRun);
    }
    return (
        <div>
            <h3>Player : Bangladeshi Player</h3>
            {
                runs > 50 && <p>Your run is 50+</p>
            
            }
            <h1>Score : {runs}</h1>
            <p>Six : {six}</p>
            <p>Four : {four}</p>

            <button onClick={handelSix}>Six</button>
            <button onClick={handelFour}>Four</button>
            <button onClick={handelSingles}> Singles</button>
        </div>
    )
}