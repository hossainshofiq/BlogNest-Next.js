// import React from 'react';

// const Banner = () => {
//     return (
//         <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 px-6 text-center rounded-lg shadow-md">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to BlogNest</h1>
//             <p className="text-lg md:text-xl mb-6">
//                 Create, explore, and enhance your blogs with the power of AI.
//             </p>
//             <a
//                 href="/create"
//                 className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition duration-300"
//             >
//                 Start Writing
//             </a>
//         </div>
//     );
// };

// export default Banner;

"use client";
import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            {/* Background with gradient animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            </div>
            
            {/* Animated floating elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                        style={{
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s linear infinite ${Math.random() * 5}s`,
                            transform: `scale(${Math.random() + 0.5})`
                        }}
                    />
                ))}
            </div>
            
            {/* Content */}
            <div className="relative z-10 py-16 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-pink-200">
                        Welcome to BlogNest
                    </span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Create, explore, and enhance your blogs with the power of AI.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/create"
                        className="relative overflow-hidden bg-white text-indigo-700 hover:text-indigo-800 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                    >
                        <span className="relative z-10">Start Writing</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-100 hover:opacity-0 transition-opacity duration-300"></span>
                    </Link>
                    
                    <Link
                        href="/explore"
                        className="relative overflow-hidden border-2 border-white/30 text-white hover:border-white/50 font-medium py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 transform group/button"
                    >
                        <span className="relative z-10">Explore Blogs</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                </div>
            </div>

            {/* Custom styles for animations */}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0) rotate(0deg); }
                }
            `}</style>
        </div>
    );
};

export default Banner;
