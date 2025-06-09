"use server";
import dbConnect, { collectionNamesObject } from "@/library/dbConnect";
import { bcrypt } from 'bcrypt';

export const signInUser = async (payload) => {

    const { email, password } = payload;
    const usersCollection = dbConnect(collectionNamesObject.usersCollection);


    if (!email || !password) {
        return { success: false, message: "Email and password are required" };
    }

    const user = await usersCollection.findOne({ email });
    if (!user) {
        return { success: false, message: "User not found" };
    }

    const isPasswordValid = await bcrypt.compare(user.password, password);
    if (!isPasswordValid) {
        return { success: false, message: "Invalid password" };
    }

    return user;
}