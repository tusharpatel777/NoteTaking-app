import mongoose from "mongoose"

export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb is connected successfully hai bhai");

    } catch (error) {
        console.log("error in connecting the mongodb",error)
        process.exit(1);
        
    }
}