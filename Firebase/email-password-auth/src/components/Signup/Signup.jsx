import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

    }

    const handelSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage(null); // Reset error message
        setSuccessMessage(null); // Reset success message

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result);
            setSuccessMessage("User created successfully!");
            e.target.reset(); // Reset the form fields
            setTimeout(() => {
                setSuccessMessage(null); // Clear success message after 7 seconds
            }, 7000);
        })
        .catch(error => {
            console.log("Error creating user:", error);
            setErrorMessage(error.message);
            setTimeout(() => {
        setErrorMessage(null); // Clear error message after 7 seconds
            }, 7000);
        })

    }
    return (
        <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                {/* Heading Above the Form */}
                <div className="mb-6 text-center">
                    <h2 className="text-3xl font-bold text-sky-600">Sign Up Your Account</h2>
                    <p className="text-gray-600 mt-2 text-sm">
                        Join us today! It only takes a few steps.
                    </p>
                </div>

                {/* Signup Form */}
                <form className="space-y-4" onSubmit={handelSignup}>
                    <div>
                        <label htmlFor="email" className="label text-sm font-medium text-gray-700">Email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className='relative'>
                        <label htmlFor="password" className="label text-sm font-medium text-gray-700">Password</label>
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="Enter your password"
                            required
                        />
                        <button className='btn btn-xs absolute top-8 right-4' onClick={togglePasswordVisibility} type="button">
                            {showPassword ? (
                                <span className="text-gray-500 flex"> <FaEyeSlash /> </span>
                            ) : (
                                <span className="text-gray-500"> <FaEye /></span>
                            )} 
                            
                        </button>
                    </div>

                    {/* Uncomment below if needed in the future */}
                    {/* 
                    <div>
                        <label htmlFor="confirmPassword" className="label text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="Re-enter your password"
                            required
                        />
                    </div>
                    */}

                    <button type="submit" className="btn bg-sky-500 hover:bg-sky-600 text-white w-full mt-2">
                        Sign Up
                    </button>
                </form>

                {/* Bottom text */}
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="#" className="text-sky-600 hover:underline">Login here</a>
                </p>
                {
                    successMessage && (
                        <div className="mt-4 text-sm text-center text-green-600">
                            {successMessage}
                        </div>
                    )
                }
                {
                    errorMessage && (
                        <div className="mt-4 text-sm text-center text-red-600">
                            {errorMessage}
                        </div>
                    )
                }
            </div>
            
        </div>
    );
};

export default Signup;
