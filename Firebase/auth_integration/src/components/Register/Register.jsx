import React from 'react';
import { Link } from 'react-router';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase.init';

const Register = () => {
    const handelRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log('User registered successfully:', result.user);
        })
        .catch((error) => {
            console.error('Error registering user:', error);
        });

    };

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
        <div className="card-body">
            <h2 className='text-3xl font-bold text-center'>Register Now</h2>
            <form className="fieldset" onSubmit={handelRegister}>
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <p>Already have an account ? <Link to="/login" className='text-sky-400'>Login</Link></p>
        </div>
        </div>
    );
};

export default Register;