"use client";
import React, { useState } from 'react';
import { signIn } from "next-auth/react"
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import SocialSignIn from './SocialSignIn';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SignInForm = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setIsLoading(true);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const rememberMe = form['remember-me'].checked;
        toast("Submitting.....")

        try {
            const response = await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: "/",
            });
            if (response.ok) {
                toast.success("Logged in Successfully!")
                router.push("/");
                form.reset();
            } else {
                toast.error("Authentication failed!");
                // form.reset();
            }
        } catch (error) {
            toast.error("Something went wrong!")
        }
        // console.log({ email, password });
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                            name="email"
                            type="email"
                            placeholder='Enter your email'
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            name="password"
                            type="password"
                            placeholder='Enter your password'
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    {/* <div className="text-sm">
                        <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </Link>
                    </div> */}
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                </div>
            </form>

            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
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
                    <button className='w-full inline-flex items-center gap-2 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-blue-600 hover:bg-gray-50'
                    >
                        <FaFacebook className='text-blue-600'></FaFacebook>
                        Sign up with Facebook
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default SignInForm;