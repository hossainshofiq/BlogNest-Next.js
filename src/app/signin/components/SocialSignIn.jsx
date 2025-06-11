'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SocialSignIn = () => {

    const session = useSession();
    const router = useRouter();

    const handleSocialSignIn = (providerName) => {
        // console.log("Social Sign In", providerName);

        signIn(providerName, { redirect: false });
        // console.log(result);        
    };

    useEffect(() => {
        if (session?.status == "authenticated") {
            router.push("/");
            toast.success(`Successfully Sign In!`);
        }
    }, [session?.status]);

    return (
        <div className="flex gap-6">
            <button
                onClick={() => handleSocialSignIn("google")}
                // className={`w-full inline-flex items-center gap-2 mb-3 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium hover:bg-gray-50`}
                className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200"
            >
                <FaGoogle className='text-xl'></FaGoogle>
                {/* Sign up with Google */}
            </button>

            <button
                onClick={() => handleSocialSignIn("github")}
                // className='w-full inline-flex items-center gap-2 mb-3 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium hover:bg-gray-50'
                className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200"
            >

                <FaGithub className='text-xl'></FaGithub>
                {/* Sign up with GitGub */}
            </button>

            <button
                onClick={() => handleSocialSignIn("facebook")}
                // className='w-full inline-flex items-center gap-2 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-blue-600 hover:bg-gray-50'
                className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200"
            >
                <FaFacebook className='text-blue-600 text-xl'></FaFacebook>
                {/* Sign up with Facebook */}
            </button>
        </div>
    );
};

export default SocialSignIn;