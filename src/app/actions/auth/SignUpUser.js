"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObject } from "@/library/dbConnect";

export const signUpUser = async (payload) => {
    // console.log("SignUpUser called with payload:", payload);
    const usersCollection = dbConnect(collectionNamesObject.usersCollection);

    const { name, email, password } = payload;
    if (!name || !email || !password ) return { success: false };

    const user = await usersCollection.findOne({ email: payload.email });
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        // const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);
        payload.password = hashedPassword;
        // payload.confirmPassword = hashedConfirmPassword;
        const result = await usersCollection.insertOne(payload);

        // const { acknowledged, insertedId } = result;
        // return { acknowledged, insertedId };

        const { _id} = result;
        return { _id };
    }

    return { success: false };
}

