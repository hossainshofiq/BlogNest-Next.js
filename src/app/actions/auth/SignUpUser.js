"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObject } from "@/library/dbConnect";

export const signUpUser = async (payload) => {
    console.log("SignUpUser called with payload:", payload);

    const usersCollection = dbConnect(collectionNamesObject.usersCollection);

    const { email, password } = payload;
    if (!email || !password) return { success: false };


    const user = await usersCollection.findOne({ email: payload.email });
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;

        const result = await usersCollection.insertOne(payload);
        const { acknowledged, insertedId } = result;
        return { acknowledged, insertedId };
    }

    return { success: false };

}

