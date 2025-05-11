import React, { useState } from 'react';

const ControledField = () => {

    const [password, setPassword] = useState('secret');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submited");

        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }else{
            setError('');
        }

        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }

    const handelPasswordOnChange = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);

        // if(password.length < 6){
        //     setError('Password must be at least 6 characters long');
        // }else{
        //     setError('');
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' required/>
                <br />
                <input type="password" name="password" onChange={handelPasswordOnChange} defaultValue={password} id="password" placeholder='Enter Your Password'  required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p style={{color: 'red'}}>{error}</p>
            }
        </div>
    );
};

export default ControledField;