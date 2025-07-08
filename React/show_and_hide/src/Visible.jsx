import React, { useState } from 'react';

const Visible = () => {
    const [show, setShow] = useState(false);

    function visible(){
        setShow(!show);
    }
    return (
        <div>
            <h1>Show and Hide Task</h1>
            {
                show && <h2>Hello, React Learner </h2>
            }
            <button onClick={visible}>{show ? "Hide" : "Show"}</button>
        </div>
    );
};

export default Visible;