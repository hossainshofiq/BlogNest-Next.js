'use client';
import { signUpUser } from '@/app/actions/auth/signUpUser';
import SocialSignIn from '@/app/signin/components/SocialSignIn';
import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUpForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const confirmPassword = form.confirmPassword.value;

        // if (!email || !password) {
        //     alert("All fields are required");
        //     return;
        // }

        // if (password !== confirmPassword) {
        //     alert("Passwords do not match");
        //     return;
        // }

        // console.log({ name, email, password });
        await signUpUser({ name, email, password });
        toast.success("Sign up successful! Please log in.");
        form.reset();
    };


    return (
        <div>
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                {/* Add this container for toasts to appear */}
                {/* <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> */}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <div className="mt-1">
                            <input
                                name="name"
                                type="text"
                                placeholder='John Doe'
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                name="email"
                                type="email"
                                placeholder="example@gmail.com"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                name="password"
                                type="password"
                                placeholder='********'
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            Password must be at least 8 characters long
                        </p>
                    </div>

                    {/* <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <div className="mt-1">
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder='********'
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div> */}

                    <div>
                        <button
                            type="submit"
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3">
                        <SocialSignIn></SocialSignIn>
                        {/* <button
                            className={`w-full inline-flex items-center gap-2 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
                        >
                            <FaGoogle className=''></FaGoogle>
                            Sign up with Google
                        </button>
                        <button className='w-full inline-flex items-center gap-2 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-blue-600 hover:bg-gray-50'>
                            <FaFacebook className='text-blue-600'></FaFacebook>
                            Sign up with Facebook
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;