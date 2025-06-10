import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SocialSignIn = () => {

    return (
        <div>
            <button
                className={`w-full inline-flex items-center gap-2 mb-3 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
            >
                <FaGoogle className=''></FaGoogle>
                Sign up with Google
            </button>
            <button className='w-full inline-flex items-center gap-2 justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-blue-600 hover:bg-gray-50'>
                <FaFacebook className='text-blue-600'></FaFacebook>
                Sign up with Facebook
            </button>
        </div>
    );
};

export default SocialSignIn;