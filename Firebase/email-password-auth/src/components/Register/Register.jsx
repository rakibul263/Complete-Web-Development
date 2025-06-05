import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase.init';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        // create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error("Error creating user:", error);
            alert(error.message);
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-sky-100 to-blue-100 px-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full space-y-6">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-sky-600">Create Account</h1>
                    <p className="mt-2 text-gray-500 text-sm">Fill in the form below to register</p>
                </div>
                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                        <div className="mt-1 relative">
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="name@gmail.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <div className="mt-1 relative">
                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must include uppercase, lowercase, and number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                            Must be at least 8 characters, including a number, uppercase and lowercase letter.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition duration-300"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account? <a href="/login" className="text-sky-600 font-medium hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
