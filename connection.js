import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectdb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,    
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1);  
    }
}

export { connectdb };
