import mongoose from "mongoose";

interface ConnectionProps {
    isConnected?: any;
}

const connection: ConnectionProps = {}

export async function connectToDatabase() {
    
    try {
        if(connection.isConnected) return;
        
        const db = await mongoose.connect(process.env.NEXT_PRIVATE_MONGODB_URI as string);

        connection.isConnected = db.connections[0].readyState;
    } catch (error: any) {
        throw new Error(error);
    }
}