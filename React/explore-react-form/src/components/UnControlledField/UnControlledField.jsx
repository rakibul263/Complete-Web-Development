import React, { useRef } from 'react';

const UnControlledField = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id='email'/>
                <br />
                <input ref={passwordRef} type="password" name="password" id='password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledField;