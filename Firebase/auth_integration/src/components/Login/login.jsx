import React from 'react';
import { Link } from 'react-router';

const login = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
        <div className="card-body">
            <h2 className='text-3xl font-bold text-center'>Login Now</h2>
            <form className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>New to this site ? <Link to="/register" className='text-sky-400'>Create an account</Link></p>
        </div>
        </div>
    );
};

export default login;