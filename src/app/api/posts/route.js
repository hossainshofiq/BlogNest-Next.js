// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/library/authOptions';
// import dbConnect, { collectionNamesObject } from '@/library/dbConnect';

// export async function POST(request) {
//     const session = await getServerSession(authOptions);

//     if (!session) {
//         return new Response(JSON.stringify({ error: 'Unauthorized' }), {
//             status: 401,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//     }

//     try {
//         const {
//             blog_id,
//             title,
//             content,
//             authorId,
//             authorName,
//             authorEmail,
//             authorImage
//         } = await request.json();

//         if (!title || !content) {
//             return new Response(JSON.stringify({ error: 'Title and content are required' }), {
//                 status: 400,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//         }

//         const blogsCollection = dbConnect(collectionNamesObject.blogsCollection);

//         const result = await blogsCollection.insertOne({
//             blog_id,
//             title,
//             content,
//             authorId,
//             authorName,
//             authorEmail,
//             authorImage,
//             createdAt: new Date(),
//             updatedAt: new Date(),
//             views: 0,
//             likes: [],
//             comments: []
//         });

//         return new Response(JSON.stringify({
//             success: true,
//             postId: result.insertedId
//         }), {
//             status: 201,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//     } catch (error) {
//         console.error('Error creating post:', error);
//         return new Response(JSON.stringify({
//             error: 'Internal server error',
//             details: error.message
//         }), {
//             status: 500,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//     }
// }

import { getServerSession } from 'next-auth';
import { authOptions } from '@/library/authOptions';
import dbConnect, { collectionNamesObject } from '@/library/dbConnect';

export async function POST(request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const {
            title,
            content,
            featured_image = 'https://www.dxomark.com/wp-content/uploads/medias/post-90166/MicrosoftTeams-image-7-1024x691.jpg',
            tags = [],
            reading_time = '5 min', // Default reading time
            ai_features = []
        } = await request.json();

        // Validate required fields
        if (!title || !content) {
            return Response.json(
                { error: 'Title and content are required' }, 
                { status: 400 }
            );
        }

        const blogsCollection = dbConnect(collectionNamesObject.blogsCollection);

        // Generate a blog_id (you might want to use a more robust ID generator)
        const latestBlog = await blogsCollection.find().sort({ _id: -1 }).limit(1).toArray();
        const nextIdNumber = latestBlog.length > 0 ? 
            parseInt(latestBlog[0].blog_id?.replace('blog', '') || 0) + 1 : 1;
        const blog_id = `blog${nextIdNumber.toString().padStart(3, '0')}`;

        // Create new blog post matching your sample data structure
        const result = await blogsCollection.insertOne({
            blog_id,
            title,
            featured_image,
            author: session.user.name || 'Anonymous', // Using author field from your sample
            created_at: new Date(),
            reading_time,
            content,
            ai_features,
            tags,
            stats: {
                views: 0,
                likes: 0, // Using number instead of array in sample
                comments: 0  // Using number instead of array in sample
            },
            // Keeping your additional fields for future use
            authorId: session.user.id,
            authorEmail: session.user.email,
            authorImage: session.user.image,
            updatedAt: new Date(),
            status: 'published'
        });

        return Response.json(
            { 
                success: true, 
                blog_id: result.insertedId,
                message: 'Blog post created successfully'
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error creating post:', error);
        return Response.json(
            { 
                error: 'Internal server error',
                details: error.message 
            },
            { status: 500 }
        );
    }
}