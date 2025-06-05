import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        // console.log("Google Button is clicked");
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handelSignOut = () => {
        auth.signOut()
        .then(() => {
            setUser(null);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='mt-20'>
            <h1 className='font-bold text-2xl mb-5 text-blue-400'>Login</h1>
            {/* <button onClick={handelGoogleSignIn} className='btn btn-outline btn-primary rounded-3xl'><FcGoogle /> Sign in with Google</button>
            <br />
            <button onClick={handelSignOut} className='btn btn-outline btn-secondary rounded-3xl mt-6 mb-6'>Sign Out</button> */}
            {
                user ? 
                <button onClick={handelSignOut} className='btn btn-outline btn-secondary rounded-3xl mt-6 mb-6'>Sign Out</button> :
                <button onClick={handelGoogleSignIn} className='btn btn-outline btn-primary rounded-3xl'><FcGoogle /> Sign in with Google</button>
            }
            <div>
                <h3>{user?.displayName}</h3>
                <p>{user?.email}</p>
            </div>
        </div>

        
    );
};

export default Login;