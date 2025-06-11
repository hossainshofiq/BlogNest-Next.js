import { signInUser } from "@/app/actions/auth/signInUsers";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import dbConnect, { collectionNamesObject } from "./dbConnect";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter your email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials);
                // Add logic here to look up the user from the credentials supplied
                const user = await signInUser(credentials)
                console.log(user);
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // console.log({ user, account, profile, email, credentials });

            if (account) {
                const { providerAccountId, provider } = account;
                const { email: user_email, name, image } = user;
                const usersCollection = dbConnect(collectionNamesObject.usersCollection);
                const isExistUser = await usersCollection.findOne({ providerAccountId });
                if (!isExistUser) {
                    const payload = { providerAccountId, email: user_email, name, image, provider };
                    await usersCollection.insertOne(payload);
                }
            }
            return true
        },
    }
}