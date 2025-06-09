import React from 'react';
// import Head from 'next/head';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* <Head>
                <title>About Our Blog Platform | Next.js Blog</title>
                <meta name="description" content="Learn about our Next.js blog platform with RTK Query and AI integration" />
            </Head> */}

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    About Our Blog Platform
                </h1>

                <div className="space-y-6 text-gray-600">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h2>
                        <p className="text-lg leading-relaxed">
                            We've created a modern blog platform that combines the power of Next.js, Redux Toolkit Query,
                            and AI to deliver a seamless content creation and reading experience. Our goal is to empower
                            writers with smart tools while providing readers with high-quality, easily discoverable content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Technology Stack</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="font-medium text-gray-800">Frontend</h3>
                                <p>Next.js, React, TypeScript, Tailwind CSS</p>
                            </li>
                            <li className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="font-medium text-gray-800">State Management</h3>
                                <p>Redux Toolkit with RTK Query</p>
                            </li>
                            <li className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="font-medium text-gray-800">Backend</h3>
                                <p>Next.js API Routes</p>
                            </li>
                            <li className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="font-medium text-gray-800">Database</h3>
                                <p>MongoDB with Mongoose</p>
                            </li>
                            <li className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="font-medium text-gray-800">Authentication</h3>
                                <p>NextAuth.js with Google OAuth</p>
                            </li>
                            <li className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="font-medium text-gray-800">AI Integration</h3>
                                <p>Google Gemini API for content assistance</p>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Key Features</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1 mr-3">✓</div>
                                <p className="text-lg">
                                    <strong>AI-Powered Writing Assistance:</strong> Automatic summary generation and tag suggestions using Gemini API
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1 mr-3">✓</div>
                                <p className="text-lg">
                                    <strong>Modern Architecture:</strong> Built with Next.js for server-side rendering and API routes
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1 mr-3">✓</div>
                                <p className="text-lg">
                                    <strong>Efficient Data Management:</strong> RTK Query for optimized data fetching and caching
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1 mr-3">✓</div>
                                <p className="text-lg">
                                    <strong>User Authentication:</strong> Secure sign-in with multiple providers
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="pt-4">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Get Started</h2>
                        <p className="text-lg mb-4">
                            Ready to join our community of writers and readers?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/blogs/create" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors">
                                Write Your First Post
                            </Link>
                            <Link href="/" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg text-center hover:bg-gray-300 transition-colors">
                                Explore Blog blogs
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;