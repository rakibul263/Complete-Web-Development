import React, { useState } from 'react';

const Batsman = () => {
    const [score, setScore]= useState(0);
    const [six, setSix] = useState(0);
    const [four, setFour] = useState(0);
    const handelSingle = () => {
        setScore(score + 1);
    }

    const handelFour = () => {
        setScore(score + 4);
        setFour(score + 1);
    }

    const handelSix = () => {
        setScore(score + 6);
        setSix(six + 1);
    }

    return (
        <div>
            <h3>Player: Bangladeshi</h3>
            <h2>Score: {score}</h2>
            {
                score >= 50 && <h3>Half 100 Done</h3>
            }
            <h2>Six : {six}</h2>
            <h2>Four : {four}</h2>
            <button onClick={handelSingle}>Single Run</button>
            <button onClick={handelFour}>Four</button>
            <button onClick={handelSix}>Six</button>
        </div>
    );
};

export default Batsman;