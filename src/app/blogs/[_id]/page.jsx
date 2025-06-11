import dbConnect, { collectionNamesObject } from '@/library/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaEye, FaHeart, FaComment, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const BlogDetailsPage = async ({ params }) => {
    const p = await params;
    const blogsCollection = dbConnect(collectionNamesObject.blogsCollection);
    const blog = await blogsCollection.findOne({ _id: new ObjectId(p._id) });

    if (!blog) {
        return notFound();
    }

    const formattedDate = new Date(blog.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link href="/" className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors">
                <FaArrowLeft className="mr-2" />
                Back to Blog
            </Link>

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Featured Image - Desktop Only */}
                    <div className="hidden lg:block relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={blog?.featured_image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Author Section */}
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
                                    {blog.author.charAt(0)}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">{blog.author}</h4>
                                <p className="text-gray-600 mt-1">Published on {formattedDate}</p>
                            </div>
                        </div>
                    </div>

                    {/* AI Features */}
                    {blog.ai_features && blog.ai_features.length > 0 && (
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">AI-Powered Features</h3>
                            <div className="space-y-4">
                                {blog.ai_features.map((feature, index) => (
                                    <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="font-medium text-gray-900">{feature.name}</h4>
                                        <p className="text-gray-600 mt-1 text-sm">{feature.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related Posts (Placeholder) */}
                    {/* <div className="p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Posts</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                                    <h4 className="font-medium text-gray-900">Related Post Title {item}</h4>
                                    <p className="text-gray-600 mt-1 text-sm">2 min read</p>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>

                {/* Right Column - Sidebar Content */}
                <div className="lg:col-span-1">
                    {/* Blog Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                            <span className="flex items-center">
                                <FaCalendarAlt className="mr-2" />
                                {formattedDate}
                            </span>
                            <span className="flex items-center">
                                <FaClock className="mr-2" />
                                {blog.reading_time} read
                            </span>
                        </div>
                    </div>

                    {/* Featured Image - Mobile Only */}
                    <div className="lg:hidden relative h-64 w-full mb-8 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={blog.featured_image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Blog Content */}
                    <article className="prose prose-lg max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </article>

                    {/* Engagement Stats */}
                    <div className="mt-8 flex flex-wrap gap-6 border-t border-gray-200 pt-6">
                        <div className="flex items-center text-gray-700">
                            <FaEye className="text-lg mr-2" />
                            <span>{blog.stats.views} views</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaHeart className="text-lg mr-2 text-red-500" />
                            <span>{blog.stats.likes} likes</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaComment className="text-lg mr-2 text-blue-500" />
                            <span>{blog.stats.comments} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsPage;