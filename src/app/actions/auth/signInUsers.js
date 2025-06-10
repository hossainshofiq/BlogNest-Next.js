"use server";

import dbConnect, { collectionNamesObject } from "@/library/dbConnect";
import bcrypt from 'bcrypt';

export const signInUser = async (payload) => {
    const { email, password } = payload;

    const usersCollection = dbConnect(collectionNamesObject.usersCollection);
    const user = await usersCollection.findOne({ email });

    if (!user) return null;

    // ✅ Await the compare function and pass correct arguments: compare(plain, hashed)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return user;
};
