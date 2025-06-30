import React from 'react';

function handelSubmit(event){
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("From was submitted");
}

const Form = () => {
    return (
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder='write something' />
            <button>Submit</button>
        </form>
    );
};

export default Form;