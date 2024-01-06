import { IUser } from "@/@types/IUser";
import { Product, User } from "./models";
import { connectToDatabase } from "./utils";

export async function fetchUsers(query: string, page: any) {
    
    const regex = new RegExp(query, "i")

    const ITEM_PER_PAGE = 2;

    try {
        connectToDatabase();

        const count = await User.find({username: {$regex: regex}}).countDocuments();
        
        const users = await User.find({ 
            username: { $regex: regex }
        }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));

        return {users, count};
        
    } catch (error: any) {
        throw new Error("Failed to fetch users");
    }
}
export async function fetchUser(id: string) {
    try {
        connectToDatabase();

        const user = await User.findById(id);

        return user as IUser;
        
    } catch (error: any) {
        throw new Error("Failed to fetch users");
    }
}

export async function fetchProduct(id: string) {
    try {
        connectToDatabase();

        const product = await Product.findById(id);
        return product;
        
    } catch (error: any) {
        throw new Error("Failed to fetch product");
    }
}

export async function fetchProducts(query: string, page: any) {

    const regex = new RegExp(query, "i");
    const ITEM_PER_PAGE = 2;

    try {
        connectToDatabase();
        const count = await Product.find({title: {$regex: regex}}).countDocuments();
        const products = await Product.find({title: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    
        return { count, products };
    } catch (error) {
        console.log(error);
    }
}