import dbConnect, { collectionNamesObject } from "@/library/dbConnect"
import Image from "next/image"
import Link from "next/link"

export default async function Blog() {

    // const blogs = [
    //     {
    //         "_id": "65a1b2c3d4e5f6a7b8c9d0e1",
    //         "post_id": "blog001",
    //         "title": "Next.js Authentication Made Simple",
    //         "featured_image": "https://www.dxomark.com/wp-content/uploads/medias/post-90166/MicrosoftTeams-image-7-1024x691.jpg",
    //         "author": "Jane Developer",
    //         "created_at": "2023-12-15T09:30:00Z",
    //         "reading_time": "8 min",
    //         "content": "In this comprehensive guide, we'll explore how to implement secure authentication in Next.js using NextAuth.js...",
    //         "ai_features": [
    //             {
    //                 "name": "AI Summary",
    //                 "details": "Automatically generated post summary using Gemini API"
    //             },
    //             {
    //                 "name": "Tag Suggestions",
    //                 "details": "AI-recommended tags based on content analysis"
    //             }
    //         ],
    //         "tags": ["nextjs", "authentication", "security"],
    //         "stats": {
    //             "views": 1245,
    //             "likes": 42,
    //             "comments": 8
    //         }
    //     },
    //     {
    //         "_id": "65a1b2c3d4e5f6a7b8c9d0e2",
    //         "post_id": "blog002",
    //         "title": "Mastering RTK Query in React",
    //         "featured_image": "https://www.dxomark.com/wp-content/uploads/medias/post-90166/MicrosoftTeams-image-7-1024x691.jpg",
    //         "author": "Sam Redux",
    //         "created_at": "2023-12-10T14:15:00Z",
    //         "reading_time": "12 min",
    //         "content": "Redux Toolkit Query revolutionizes data fetching in React applications...",
    //         "ai_features": [
    //             {
    //                 "name": "Code Examples",
    //                 "details": "AI-generated code snippets for common RTK Query patterns"
    //             }
    //         ],
    //         "tags": ["redux", "rtk-query", "data-fetching"],
    //         "stats": {
    //             "views": 892,
    //             "likes": 35,
    //             "comments": 5
    //         }
    //     },
    //     {
    //         "_id": "65a1b2c3d4e5f6a7b8c9d0e3",
    //         "post_id": "blog003",
    //         "title": "Integrating AI in Your Blog Platform",
    //         "featured_image": "https://www.dxomark.com/wp-content/uploads/medias/post-90166/MicrosoftTeams-image-7-1024x691.jpg",
    //         "author": "AI Enthusiast",
    //         "created_at": "2023-12-05T11:20:00Z",
    //         "reading_time": "10 min",
    //         "content": "Discover how to enhance your blog with AI-powered features...",
    //         "ai_features": [
    //             {
    //                 "name": "Content Suggestions",
    //                 "details": "AI-generated writing prompts based on your draft"
    //             },
    //             {
    //                 "name": "SEO Optimization",
    //                 "details": "Automated keyword and meta description suggestions"
    //             }
    //         ],
    //         "tags": ["ai", "gemini", "blogging"],
    //         "stats": {
    //             "views": 1560,
    //             "likes": 64,
    //             "comments": 12
    //         }
    //     },
    //     {
    //         "_id": "65a1b2c3d4e5f6a7b8c9d0e4",
    //         "post_id": "blog004",
    //         "title": "MongoDB Best Practices for Next.js",
    //         "featured_image": "https://www.dxomark.com/wp-content/uploads/medias/post-90166/MicrosoftTeams-image-7-1024x691.jpg",
    //         "author": "DB Expert",
    //         "created_at": "2023-11-28T16:45:00Z",
    //         "reading_time": "15 min",
    //         "content": "Learn how to optimize your MongoDB usage in Next.js applications...",
    //         "ai_features": [
    //             {
    //                 "name": "Query Optimizer",
    //                 "details": "AI-suggested database query improvements"
    //             }
    //         ],
    //         "tags": ["mongodb", "database", "nextjs"],
    //         "stats": {
    //             "views": 720,
    //             "likes": 28,
    //             "comments": 4
    //         }
    //     },
    //     {
    //         "_id": "65a1b2c3d4e5f6a7b8c9d0e5",
    //         "post_id": "blog005",
    //         "title": "Building a Comment System with React",
    //         "featured_image": "https://www.dxomark.com/wp-content/uploads/medias/post-90166/MicrosoftTeams-image-7-1024x691.jpg",
    //         "author": "UI Specialist",
    //         "created_at": "2023-11-20T13:10:00Z",
    //         "reading_time": "9 min",
    //         "content": "A step-by-step guide to creating an interactive comment system...",
    //         "ai_features": [
    //             {
    //                 "name": "Moderation Assistant",
    //                 "details": "AI-powered comment quality analysis"
    //             }
    //         ],
    //         "tags": ["react", "comments", "ui"],
    //         "stats": {
    //             "views": 980,
    //             "likes": 39,
    //             "comments": 7
    //         }
    //     }
    // ]


    const blogsCollection = dbConnect(collectionNamesObject.blogsCollection);
    const blogs = await blogsCollection.find({}).toArray();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Blog blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((post) => (
                    <div
                        key={post._id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Featured Image */}
                        <div className="relative h-48 w-full">
                            <Image
                                src={post.featured_image}
                                alt={post.title}
                                layout="fill"
                                // objectFit="cover"
                                className="hover:scale-105 transition-transform duration-300 object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        {/* Post Content */}
                        <div className="p-6">
                            {/* <div className="flex flex-wrap gap-2 mb-3">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div> */}

                            <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
                                <Link href={`/blogs/${post._id}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {post.content.substring(0, 150)}...
                            </p>

                            {/* AI Features Badges */}
                            {/* <div className="mb-4">
                                {post.ai_features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="inline-block mr-2 mb-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md"
                                        title={feature.details}
                                    >
                                        {feature.name}
                                    </span>
                                ))}
                            </div> */}

                            {/* Meta Information */}
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{post.reading_time} read</span>
                                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center mr-4">
                                    <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <span>{post.stats.views}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                    <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span>{post.stats.likes}</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span>{post.stats.comments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}