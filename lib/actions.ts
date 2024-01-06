"use server";

import { Product, User } from "./models";
import { connectToDatabase } from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"
import bcrypt from "bcrypt";
import { IUser } from "@/@types/IUser";
import { IProduct } from "@/@types/IProduct";

export async function createUser(formData: any) {

    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDatabase();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, hashedPassword, phone, address, isAdmin, isActive })

        await newUser.save();

    } catch (error: any) {
        if(error.code == 11000) {
            for (const [key, value] of Object.entries(error.keyValue)) {
                return console.log(`${key} ${value} already in use.`);
            }
        }

        console.log("Failed to create user. Try again later.")
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export async function updateUser(formData: any) {
    
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDatabase();

        const updateFields: Omit<IUser, "_id"> = {
            username, email, password, phone, address, isAdmin, isActive
        }

        //@ts-ignore
        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || updateFields[key] === undefined && delete updateFields[key]))

        await User.findByIdAndUpdate(id, updateFields);

    } catch (error: any) {
        console.log("Failed to create user. Try again later.")
    }

    revalidatePath("/dashboard/users")

    redirect("/dashboard/users")
}

export async function updateProduct(formData: any) {
    
    const { id, title, description, price, stock, color } = Object.fromEntries(formData);

    try {
        connectToDatabase();

        const updateFields: IProduct = {
            title, description, price, stock, color
        }

        //@ts-ignore
        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || updateFields[key] === undefined && delete updateFields[key]))

        await Product.findByIdAndUpdate(id, updateFields); 

    } catch (error: any) {
        console.log("Failed to create user. Try again later.")
    }

    revalidatePath("/dashboard/users")

    redirect("/dashboard/users")
}

export async function createProduct(formData: any) {

    const { title, description, price, stock, color, size } = Object.fromEntries(formData);

    try {
        connectToDatabase();

        const newProduct = new Product({ title, description, price, stock, color, size })

        await newProduct.save();

    } catch (error: any) {
        console.log(error)
        console.log("Failed to create product. Try again later.")
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export async function deleteProduct(formData: any) {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDatabase();
        await Product.findByIdAndDelete(id);

    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/products")
}

export async function deleteUser(formData: any) {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDatabase();

        await Product.findByIdAndDelete(id);

    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/users")
}
