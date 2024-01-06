import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: String,
        default: false
    },
    isActive: {
        type: String,
        default: false
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
}, { timestamps: true });

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        max: 300,
    },
    description: {
        type: String,
        required: true,
        unique: true,
        max: 400,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    img: {
        type: String,
    },
    color: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
