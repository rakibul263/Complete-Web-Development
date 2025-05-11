import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("from submited")
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' name='name' /> <br />
                <input type="email" placeholder='Your Email' name='email' /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;